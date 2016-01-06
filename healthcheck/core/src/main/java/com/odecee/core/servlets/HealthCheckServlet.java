package com.odecee.core.servlets;

import java.io.IOException;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;

import org.apache.felix.scr.annotations.Activate;
import org.apache.felix.scr.annotations.Deactivate;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.odecee.core.servlets.response.NoBodyResponse;

@SlingServlet(
	paths = "/bin/system/healthcheck")
public class HealthCheckServlet extends SlingSafeMethodsServlet {

	private static final long serialVersionUID = -7178816685805617964L;

	private final Logger log = LoggerFactory.getLogger(getClass());
	
	//MBean References
	private final String bundlesMBeanResourcePath = "/system/sling/monitoring/mbeans/org/apache/sling/healthcheck/HealthCheck/inactiveBundles";
	private final String replicationQueuesMBeanResourcePath = "/system/sling/monitoring/mbeans/org/apache/sling/healthcheck/HealthCheck/replicationQueue";
	private final String requestStatusMBeanResourcePath = "/system/sling/monitoring/mbeans/org/apache/sling/healthcheck/HealthCheck/requestsStatus";

	private static final String contentType = "text/html";

	@Reference
	private ResourceResolverFactory resolverFactory;

	private Resource bundlesMBeanResource = null;
	private Resource replicationQueuesMBeanResource = null;
	private Resource requestStatusMBeanResource = null;

	private ResourceResolver resolver = null;

	@Activate
	protected void activate(final Map<String, Object> props) {
		Map<String, Object> param = new HashMap<String, Object>();        
		param.put(ResourceResolverFactory.SUBSERVICE, "readService");

		try {
			resolver = resolverFactory.getServiceResourceResolver(param);

			bundlesMBeanResource = resolver.getResource(bundlesMBeanResourcePath);
			log.info("Registered MBean Resource: " + bundlesMBeanResource);
			replicationQueuesMBeanResource = resolver.getResource(replicationQueuesMBeanResourcePath);
			log.info("Registered MBean Resource: " + replicationQueuesMBeanResource);
			requestStatusMBeanResource = resolver.getResource(requestStatusMBeanResourcePath);
			log.info("Registered MBean Resource: " + requestStatusMBeanResource);
			log.info(resolver.getUserID());
		} catch (LoginException e) {
			log.error("LoginException",e);
		}
	}

	@Deactivate
	protected void deactivate() {
		if(resolver != null && resolver.isLive()){
			resolver.close();
		}
	}

	@Override
	protected void doGet(SlingHttpServletRequest request,
			SlingHttpServletResponse response) throws ServletException,
			IOException {

		StringBuilder output = processResponse(response);

		Writer w = response.getWriter();
		w.write(output.toString());
		w.flush();
	}

	@Override
	protected void doHead(SlingHttpServletRequest request,
			SlingHttpServletResponse response) throws ServletException,
			IOException {

		NoBodyResponse resp = new NoBodyResponse(response);
		doGet(request, resp);
		resp.setContentLength();
	}

	private StringBuilder processResponse(SlingHttpServletResponse response) {
		//Bundles
		Boolean okBundles = getMBeanAttributeResponse("mbean:attributes/ok", bundlesMBeanResource, Boolean.FALSE);

		//Replication Queues
		Boolean okQueues = getMBeanAttributeResponse("mbean:attributes/ok", replicationQueuesMBeanResource, Boolean.FALSE);

		//Request Status
		Boolean okRequests = getMBeanAttributeResponse("mbean:attributes/ok", requestStatusMBeanResource, Boolean.FALSE);
		String requestResourceStatus = getMBeanAttributeResponse("mbean:attributes/status", requestStatusMBeanResource, "Status not available!");

		String responseStatus = "All bundles are active!!";
		String replicationQueue = "<br/>All replication queues are stable!!";
		String requestStatus = "<br/>Instance is serving requests!!";
		response.setStatus(HttpServletResponse.SC_OK);
		response.setContentType(contentType);

		StringBuilder output = new StringBuilder();

		if (!okBundles) {
			responseStatus = "Some bundles were <b>Not Active</b>. Please contact adminsitrator!!";
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}

		if(!okQueues) {
			replicationQueue = "<br/>Some queues were <b>Blocked</b>. Please contact adminsitrator!!";
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}

		if(!okRequests && !("WARN".equals(requestResourceStatus))) {
			requestStatus = "<br/>There were errors while serving requests from this instance. Please contact adminsitrator!!";
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}

		output.append(responseStatus);
		output.append(replicationQueue);
		output.append(requestStatus);
		return output;
	}

	private <T extends Object> T getMBeanAttributeResponse(String attribute, Resource mBean, T defaultValue) {
		Resource mBeanResource = mBean.getChild("mbean:attributes/ok");
		ValueMap mBeanProperties = mBeanResource.adaptTo(ValueMap.class);

		return mBeanProperties.get("mbean:value", defaultValue);
	}

}
