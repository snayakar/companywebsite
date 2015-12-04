use(function () {
    var items = [];
    var root = currentPage.getAbsoluteParent(2);
    var currentNavPath = currentPage.getAbsoluteParent(2).getPath();
    var it = root.listChildren(new Packages.com.day.cq.wcm.api.PageFilter());

    while (it.hasNext()) {
        var page = it.next();

		var subChannelsIterator = page.listChildren(new Packages.com.day.cq.wcm.api.PageFilter());
        var subChannels =[];
		var properties = page.getProperties();

		if (page.properties.get('moreSection')) {
		    var indexNumber = 0;
            while(subChannelsIterator.hasNext() && page.properties.get('maxnav') > indexNumber) {
                var subChannel = subChannelsIterator.next();
                subChannels.push({
                    page: subChannel,
                    properties : subChannel.getProperties(),
                    url: subChannel.getPath() + '.html'
                })

                indexNumber++;
            }
        }
        items.push({
            page: page,
            properties : properties,
            url: page.getPath() + '.html',
            subChannels: subChannels
        });
    }

    return {
        items: items
    };
});