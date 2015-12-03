use(function () {
    var items = [];
    var root = currentPage.getAbsoluteParent(2);
    var currentNavPath = currentPage.getAbsoluteParent(2).getPath();
    var it = root.listChildren(new Packages.com.day.cq.wcm.api.PageFilter());

    while (it.hasNext()) {
        var page = it.next();
		console.log(page.getProperties());
        items.push({
            page: page,
            properties : page.getProperties(),
            url: page.getPath() + '.html'
        });
    }

    return {
        items: items
    };
});