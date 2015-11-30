package com.odecee.core.models;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Named;
import javax.jcr.RepositoryException;

import org.apache.jackrabbit.api.security.user.Authorizable;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.foundation.Image;

@Model(adaptables=Resource.class)
public class ArticleModel {
	
	private final Logger logger = LoggerFactory.getLogger(getClass());
	
	private static final String NO_TITLE = "NO_TITLE";
	
	@Inject
    private ResourceResolverFactory resourceResolverFactory;

    @Inject @Named("author") @Default(values="aparker@geometrixx.info")
    protected String authorId;
    
    @Inject @Named("articleColor") @Default(values="#514753")
    protected String articleColor;
    
    private String authorAvatar;
    private String authorName;
    
    @Inject @Named("jcr:title") @Default(values=NO_TITLE)
    private String title;
    
    @Inject @Named("pageTitle") @Default(values=NO_TITLE)
    private String pageTitle;
    
    @Inject @Named("jcr:created")
    private Date date;
    
    private String postId;
    
    private String printDate;
    
    private List<Tag> tags = new ArrayList<Tag>();
    private List<Tag> categories = new ArrayList<Tag>();

    @Inject
    private Resource resource;

    @PostConstruct
    protected void init() {
    	ResourceResolver resolver = null;
    	
    	try {
			resolver = resourceResolverFactory.getAdministrativeResourceResolver(null);
			
			UserManager userManager = resolver.adaptTo(UserManager.class);
			Authorizable user = userManager.getAuthorizable(authorId);
			Resource userProfileResource = resolver.getResource(user.getPath() + "/profile");
			
			authorName = (String)userProfileResource.getValueMap().get("givenName") + " " + (String)userProfileResource.getValueMap().get("familyName");
			Image image = new Image(resolver.getResource(user.getPath() + "/profile/photos/primary"), "image");
			image.setSelector(".img");
			
			TagManager tagManager = resolver.adaptTo(TagManager.class);
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
			
			SimpleDateFormat sdf = new SimpleDateFormat("MMMM dd, YYYY");
			printDate = sdf.format(date);
		} catch (LoginException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (RepositoryException e) {
			// TODO Auto-generated catch block
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
    
    public int getPostId() {
    	return date.hashCode();
    }

}
