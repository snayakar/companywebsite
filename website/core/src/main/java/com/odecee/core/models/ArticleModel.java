package com.odecee.core.models;

import java.text.SimpleDateFormat;
import java.util.*;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Named;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.SearchResult;
import org.apache.jackrabbit.api.security.user.Authorizable;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.foundation.Image;

@Model(adaptables=SlingHttpServletRequest.class)
public class ArticleModel {

	private final Logger logger = LoggerFactory.getLogger(getClass());

	private static final String NO_TITLE = "NO_TITLE";

    // Inject sling objects... Coming through SlingHttpServletRequest
    @SlingObject
    private Resource resource;

    @SlingObject
    private SlingHttpServletRequest request;

    @SlingObject
    private ResourceResolver resourceResolver;

    // Inject OSGi services... coming through AEM
    @OSGiService
    private QueryBuilder queryBuilder;

    // Inject node properties... coming through resource
    @Inject @Named("author") @Default(values="aparker@geometrixx.info")
    protected String authorId;

    @Inject @Named("articleColor") @Default(values="#514753")
    protected String articleColor;

    @Inject @Named("jcr:title") @Default(values=NO_TITLE)
    private String title;

    @Inject @Named("pageTitle") @Default(values=NO_TITLE)
    private String pageTitle;

    @Inject @Optional @Named("jcr:created")
    private Date createdTime;

    @Inject @Named("path") @Default(values="/content/odecee")
    private String contentPath;

    //private article model attributes
    private String authorAvatar;
    private String authorName;
    private String postId;
    private String printDate;
    private List<Tag> tags = new ArrayList<Tag>();
    private List<Tag> categories = new ArrayList<Tag>();

    @PostConstruct
    protected void init() {
    	try {

			UserManager userManager = resourceResolver.adaptTo(UserManager.class);
			Authorizable user = userManager.getAuthorizable(authorId);
			Resource userProfileResource = resourceResolver.getResource(user.getPath() + "/profile");

			authorName = (String)userProfileResource.getValueMap().get("givenName") + " " + (String)userProfileResource.getValueMap().get("familyName");
			Image image = new Image(resourceResolver.getResource(user.getPath() + "/profile/photos/primary"), "image");
			image.setSelector(".img");

			TagManager tagManager = resourceResolver.adaptTo(TagManager.class);
			Tag[] tags = tagManager.getTags(resource);

			if(tags!=null && tags.length>0) {
				for(Tag tag: tags) {
					if(tag.getNamespace().getName().equals("category")) {
						this.categories.add(tag);
					} else if(tag.getNamespace().getName().equals("odecee-tags")) {
						this.tags.add(tag);
					}
				}
			}

            authorAvatar = image.getSrc();

            //fetch articles from content Path
            final Map<String, String> map = new HashMap<String, String>();

            logger.info("this is the path" + contentPath);
            map.put("path", contentPath);
            map.put("type", "cq:Page");

            Query query = queryBuilder.createQuery(PredicateGroup.create(map), resourceResolver.adaptTo(Session.class));

            //TODO: Expose resultList to article component
            SearchResult result = query.getResult();

            logger.info("Number total of pages >> " + String.valueOf(result.getTotalMatches()));

		} catch (RepositoryException e) {
			e.printStackTrace();
		}
    }

    public String getAuthorName() {
        return authorName;
    }

    public String getAuthorAvatar() {
    	return authorAvatar;
    }

    public String getTitle() {
    	return NO_TITLE.equals(pageTitle) ? title : pageTitle;
    }

    public String getDate() {
    	return printDate;
    }

    public String getArticleColor() {
    	logger.info("Article color: " + articleColor);
    	return articleColor;
    }

    public List<Tag> getTags() {
    	return tags;
    }

    public List<Tag> getCategories() {
    	return categories;
    }

    public String[] getSelectors() {
        return request.getRequestPathInfo().getSelectors();
    }

}