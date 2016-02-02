package com.odecee.core.resourceproviders.impl;

import static org.apache.sling.query.SlingQuery.$;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.jcr.RepositoryException;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.felix.scr.annotations.Activate;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Deactivate;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Service;
import org.apache.jackrabbit.api.security.user.Authorizable;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceMetadata;
import org.apache.sling.api.resource.ResourceProvider;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.SyntheticResource;
import org.apache.sling.commons.osgi.PropertiesUtil;
import org.apache.sling.query.SlingQuery;
import org.osgi.framework.Constants;
import org.osgi.service.component.ComponentContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import com.odecee.core.resourceproviders.AbstractCollectionResourceProvider;
import com.odecee.core.resourceproviders.CollectionResource;
import com.odecee.core.resourceproviders.CollectionResourceProvider;

@Component(
        label = "Odecee Collection Resource Provider",
        description = "Odecee Collection Resource Provider",
        immediate = true
)
@Properties({
    @Property(
            label = "Vendor",
            name = Constants.SERVICE_VENDOR,
            value = "Odecee Pty Ltd",
            propertyPrivate = true
    ),
    @Property(
            label = "Root paths",
            description = "Root paths this Sling Resource Provider will respond to",
            name = ResourceProvider.ROOTS,
            value = {"/content/author"})
})
@Service
public class ArticleCollectionResourceProviderImpl extends AbstractCollectionResourceProvider implements CollectionResourceProvider {
	
	private final Logger logger = LoggerFactory.getLogger(getClass());

	private List<String> roots;

    @Override
    public Resource getResource(ResourceResolver resourceResolver, HttpServletRequest request, String path) {
        // The Request is not taken into consideration when evaluating
        // the Resource request, so we just call getResource(rr, path)

        // Remember, since this is a Synthetic resource there are no ACLs applied to this
        // resource. If you would like to restrict access, it must be done programmatically by checking
        // the ResourceResolver's user.
        return getResource(resourceResolver, path);
    }

    @Override
    public Resource getResource(ResourceResolver resourceResolver, String path) {
        // Make getResource() return as fast as possible!
        // Return null early if getResource() cannot/should not process the resource request

        // Check the user/group issuing the resource resolution request
        if (!accepts(resourceResolver)) {
            return null;
        }

        // Reject any paths that do not match the roots
        if (!accepts(path)) {
            return null;
        }

        // If path is a root, return a Sythentic Folder
        // This could be any "type" of SyntheticResource
        if (isRoot(path)) {
        	//TODO: Sunil to change this so that it return a SyntheticResource that contains a list of ALL articles. Have a look at the listChildren method for the query
            return new SyntheticResource(resourceResolver, path, CollectionResource.AUTHOR_RESOURCE_TYPE);
        }

        // Make sure the new resource has the correct resource type
        Map<String, String> thirdPartyData = new HashMap<String, String>();
        // Mocking some data from a third party that represents this resource
        thirdPartyData.put("resourceTypeKey", CollectionResource.AUTHOR_RESOURCE_TYPE);

        ResourceMetadata resourceMetaData = new ResourceMetadata();
        // Set the resolution path
        resourceMetaData.setResolutionPath(path);
        // This resourceType can of course be set/derived from anywhere
        // Often it is set in the OSGi Properties if the value is fixed for all
        // Resources this provider returns
        final String resourceType = thirdPartyData.get("resourceTypeKey");
        
        UserManager userManager = resourceResolver.adaptTo(UserManager.class);
		Authorizable user = null;
		String authorName = null;
		try {
			user = userManager.getAuthorizable(extractParameter(path));
			Resource userProfileResource = resourceResolver.getResource(user.getPath() + "/profile");
			authorName = (String)userProfileResource.getValueMap().get("givenName") + " " + (String)userProfileResource.getValueMap().get("familyName");
		} catch (RepositoryException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

        // Populate data
        SlingQuery query = $(resourceResolver).find("cq:Page[jcr:content/author="+ extractParameter(path) +"]");
        List<Resource> queryResults = query.asList();
        
        resourceMetaData.put("articles", queryResults);
        resourceMetaData.put("authorName", authorName);
        resourceMetaData.put("authorId", extractParameter(path));
        resourceMetaData.put("categories", getTags(queryResults, resourceResolver));
        resourceMetaData.put("resourceType", resourceType);

        // Create the resource to return
        Resource resource = new SyntheticResource(resourceResolver, resourceMetaData, resourceType);

        return resource;
    }

	@Override
    public Iterator<Resource> listChildren(Resource parent) {
        final String path = parent.getPath();

        // Check the user/group issuing the resource resolution request
        if (!accepts(parent.getResourceResolver())) {
            return null;
        }

        // Reject any paths that do not match the roots
        if (!accepts(path)) {
            return null;
        }

        // If path is not the root, return null
        // This only allows listChildren to be called on a "Root" path
        // This restriction is implementation specific
        if (!isRoot(path)) {
            return null;
        }

        List<Resource> resources = new ArrayList<Resource>();
        
        SlingQuery query = $(parent.getResourceResolver()).find("cq:Page[jcr:content/jcr:template=/apps/odecee/templates/page-article]");
        List<Resource> articlePages = query.asList();
        
		Set<Resource> authors = new HashSet<Resource>();

        // Call third party, get and create a list of resources in a similar fashion as in getResource
        for (Resource articlePage: articlePages) {
    		
            ResourceMetadata resourceMetaData = new ResourceMetadata();

            // Create the "path" for this resource; this pathing scheme should
            // be compatible with getResource(..)
            resourceMetaData.setResolutionPath(path + "/" + articlePage.getValueMap().get("author", String.class));
            final String resourceType = "sling/services/authors";

            Resource resource = new SyntheticResource(parent.getResourceResolver(),
                    resourceMetaData, resourceType);

            authors.add(resource);
        }

        resources.addAll(authors);
        return resources.iterator();
    }

    /**
     * Checks if the provided path is a defined Root path
     *
     * @param path
     * @return
     */
    protected boolean isRoot(String path) {
        for (String root : this.roots) {
            if (StringUtils.equals(path, root)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Checks if this Resource Provider is willing to handle the resource path
     *
     * @param path
     * @return
     */
    protected boolean accepts(String path) {
        for (String root : this.roots) {
            if (StringUtils.startsWith(path, root.concat("/"))) {
                return true;
            }
        }

        return false;
    }

    /**
     * Checks if this Resource Provider is willing to handle the resolution request
     *
     * @param resourceResolver
     * @return
     */
    protected boolean accepts(ResourceResolver resourceResolver) {
        if (resourceResolver == null) {
            return false;
        }
        if (StringUtils.equals("anonymous", resourceResolver.getUserID())) {
            // Terrible "anonymous" check, this is just for an example
            return false;
        }

        return true;
    }
    
    protected String extractParameter(String path) {
    	for (String root : this.roots) {
    		String absoluteRoot = root.concat("/");
            if (StringUtils.startsWith(path, absoluteRoot)) {
                return path.substring(absoluteRoot.length());
            }
        }
    	
    	return null;
    }

    protected List<Tag> getTags(List<Resource> queryResults, ResourceResolver resourceResolver) {
    	List<Tag> tags = new ArrayList<Tag>();
    	
    	TagManager tagManager = resourceResolver.adaptTo(TagManager.class);
    	Set<Tag> tagSet = new HashSet<Tag>();
    	for(Resource page: queryResults) {
    		if(tagManager.getTags(page) != null) {
    			tagSet.addAll(new ArrayList<Tag>(Arrays.asList(tagManager.getTags(page))));
    		}
    	}
    	
    	tags.addAll(tagSet);
    	
		return tags;
	}

    /**
     * OSGi Component Methods *
     */
    @Activate
    protected void activate(final ComponentContext componentContext) throws Exception {
        configure(componentContext);
    }

    @Deactivate
    protected void deactivate(ComponentContext ctx) {
    }

    private void configure(final ComponentContext componentContext) {
        final Map<String, String> properties = (Map<String, String>) componentContext.getProperties();

        // Get Roots from Service properties
        this.roots = new ArrayList<String>();

        String[] rootsArray = PropertiesUtil.toStringArray(properties.get(ResourceProvider.ROOTS), new String[]{});
        for (String root : rootsArray) {
            root = StringUtils.strip(root);
            if (StringUtils.isBlank(root)) {
                continue;
            } else if (StringUtils.equals(root, "/")) {
                // Cowardly refusing to mount the root
                continue;
            }

            this.roots.add(StringUtils.removeEnd(root, "/"));
        }
    }

}
