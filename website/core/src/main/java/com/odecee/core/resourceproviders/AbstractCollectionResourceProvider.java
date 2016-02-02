package com.odecee.core.resourceproviders;

import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceWrapper;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.wrappers.ValueMapDecorator;

public class AbstractCollectionResourceProvider implements CollectionResourceProvider {

	@Override
	public Resource getResource(ResourceResolver arg0, String arg1) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Resource getResource(ResourceResolver arg0, HttpServletRequest arg1,
			String arg2) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterator<Resource> listChildren(Resource arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	
	/**
     * Custom Resource Wrapper that is used to expose a custom ValueMap via the "Provided" resource's .adaptTo(ValueMap.class);
     */
    protected class ProvidedResourceWrapper extends ResourceWrapper {
        private final ValueMap properties;

        public ProvidedResourceWrapper(Resource resource, Map<String, Object> properties) {
            super(resource);
            this.properties = new ValueMapDecorator(properties);
        }

        @Override
        public final <AdapterType> AdapterType adaptTo(Class<AdapterType> type) {
            if (type != ValueMap.class) {
                return super.adaptTo(type);
            }

            // Return the ValueMap of the properties passed in
            return (AdapterType) this.properties;
        }
    }

}
