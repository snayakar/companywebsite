package com.odecee.core.resourceproviders;

import org.apache.sling.adapter.annotations.Adaptable;
import org.apache.sling.adapter.annotations.Adapter;
import org.apache.sling.api.resource.AbstractResource;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceMetadata;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;

/** A Sling Resource that represents a collection which could be an Article, Job Post or other collection*/
@Adaptable(adaptableClass=Resource.class, adapters={
    @Adapter({ValueMap.class})
})
public class CollectionResource extends AbstractResource implements Resource {

    private final String path;
    private final ResourceMetadata metadata;
    private final ValueMap valueMap;
    private final ResourceResolver resolver;
    
    public static final String AUTHOR_RESOURCE_TYPE = "sling/services/author";
    
    public CollectionResource(ResourceResolver resolver, String path, ValueMap valueMap) {
        this.path = path;
                
        this.valueMap = valueMap;
        this.resolver = resolver;
        
        metadata = new ResourceMetadata();
        metadata.setResolutionPath(path);
    }
    
    @Override
    public String toString() {
        return getClass().getSimpleName() + " " + path;
    }
    
    public String getPath() {
        return path;
    }

    public ResourceMetadata getResourceMetadata() {
        return metadata;
    }

    public ResourceResolver getResourceResolver() {
        return resolver;
    }

    public String getResourceSuperType() {
        return null;
    }

    public String getResourceType() {
        return AUTHOR_RESOURCE_TYPE;
    }
    
    @Override
    @SuppressWarnings("unchecked")
    public <AdapterType> AdapterType adaptTo(Class<AdapterType> type) {
        if(type == ValueMap.class) {
            return (AdapterType)valueMap;
        }
        return super.adaptTo(type);
    }
}
