package com.odecee.core.utils;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OdeceeUtils {
	private static final Logger logger = LoggerFactory.getLogger(OdeceeUtils.class);
	
	public static Resource findNearestLocation(ResourceResolver resolver, Resource resource) {
		while(resource.getParent().getPath().contains(OdeceeConstants.ODECEE_PATH)) {
			Resource parent = resource.getParent();
			String parentResourceType = parent.getChild("jcr:content").getValueMap().get("sling:resourceType", String.class);
			logger.info("Parent resource type: " + parent.getChild("jcr:content").getValueMap().get("sling:resourceType", String.class));
			if(OdeceeConstants.LOCATION_RESOURCE_TYPE.equals(parentResourceType)) {
				logger.info("Found location: " + parent);
				return parent.getChild("jcr:content");
			} else {
				resource = parent;
			}
		}
		
		logger.error("Failed to find location");
		
		return null;
	}

}
