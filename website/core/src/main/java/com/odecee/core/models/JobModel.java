package com.odecee.core.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;
import com.odecee.core.utils.OdeceeConstants;
import com.odecee.core.utils.OdeceeUtils;

@Model(adaptables=Resource.class)
public class JobModel {
	private final Logger logger = LoggerFactory.getLogger(getClass());

	@Inject
	private ResourceResolverFactory resourceResolverFactory;

	private Resource locationResource = null;

	@Inject
	private Resource resource;
	
	@Inject
    private Page resourcePage;

	@Inject @Named("jcr:title") @Default(values="")
	private String title;

	@Inject @Named("jcr:description") @Default(values="")
	private String description;

	@PostConstruct
	protected void init() {
		ResourceResolver resolver = null;

		try {
			resolver = resourceResolverFactory.getAdministrativeResourceResolver(null);
			locationResource = OdeceeUtils.findNearestLocation(resolver, resource);

		} catch (LoginException e) {
			logger.error("Failed to authenticate", e);
		}
	}

	public ValueMap getLocationProperties() {
		return locationResource.getValueMap();
	}

	public String getLocation() {
		String town = locationResource.getValueMap().get("town", String.class);
		String country = locationResource.getValueMap().get("country", String.class);

		String location = town + ", " + country;
		return location.toUpperCase();
	}

	public String getCity() {
		return locationResource.getValueMap().get("town", String.class).toLowerCase();
	}

	public String getLocationImage() {
		return locationResource.getValueMap().get("image", String.class);
	}

	public String getTitle() {
		return title;
	}

	public String getDescription() {
		return description;
	}

	public String getPagePath() {
		return resource.adaptTo(Page.class).getPath();
	}

	public List<JobModel> getRelatedJobs() {
		List<JobModel> relatedJobs = new ArrayList<JobModel>();

		Page jobPage = resourcePage.getParent();

		logger.info("Parent Page: " + jobPage );

		Iterator<Page> jobsForLocation = jobPage.listChildren();
		while(jobsForLocation.hasNext()) {
			Page job = jobsForLocation.next();
			if(!resourcePage.equals(job)) {
				JobModel jobModel = job.getContentResource().adaptTo(JobModel.class);
				relatedJobs.add(jobModel);
			}
		}

		return relatedJobs; 
	}

}
