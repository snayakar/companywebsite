package com.odecee.core.models;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.foundation.Image;

@Model(adaptables=Resource.class)
public class JobModel {
	private final Logger logger = LoggerFactory.getLogger(getClass());
	
	private static final String LOCATION_RESOURCE_TYPE = "odecee/components/structure/locationpage";
	private static final String ODECEE_PATH = "odecee";
	
	@Inject
    private ResourceResolverFactory resourceResolverFactory;
	
	private Resource locationResource = null;
	
	@Inject
	private Resource resource;
	
	private String imageSrc;
	
	@Inject @Named("jcr:title") @Default(values="")
    private String title;
    
    @PostConstruct
    protected void init() {
    	ResourceResolver resolver = null;
    	
    	try {
			resolver = resourceResolverFactory.getAdministrativeResourceResolver(null);
			
			findNearestLocation(resolver, resource);
			
			imageSrc = locationResource.getValueMap().get("image", String.class);
		} catch (LoginException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }

	private void findNearestLocation(ResourceResolver resolver, Resource resource) {
		if(resource.getParent().getPath().contains(ODECEE_PATH)) {
			Resource parent = resource.getParent();
			String parentResourceType = parent.getChild("jcr:content").getValueMap().get("sling:resourceType", String.class);
			logger.info("Parent resource type: " + parent.getChild("jcr:content").getValueMap().get("sling:resourceType", String.class));
			if(LOCATION_RESOURCE_TYPE.equals(parentResourceType)) {
				logger.info("Found location: " + parent);
				locationResource = parent.getChild("jcr:content");
			} else {
				findNearestLocation(resolver, parent);
			}
		}
		
		logger.error("Failed to find location");
	}
	
	public String getLocation() {
		String location = (String)locationResource.getValueMap().get("town") + ", " + (String)locationResource.getValueMap().get("country");
		return location.toUpperCase();
	}
	
	public String getCity() {
		return locationResource.getValueMap().get("town", String.class).toLowerCase();
	}
	
	public String getLocationImage() {
		
		return imageSrc;
	}
	
	public String getTitle() {
		return title;
	}

}
