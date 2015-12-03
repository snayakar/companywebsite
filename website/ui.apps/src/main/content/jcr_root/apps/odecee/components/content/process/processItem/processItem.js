use(["/libs/wcm/foundation/components/utils/AuthoringUtils.js",
    "/libs/wcm/foundation/components/utils/Image.js",
     "/libs/sightly/js/3rd-party/q.js"], function (AuthoringUtils, Image, Q) {

    "use strict";

    var image = new Image(granite.resource);
    var processItem = {},
    CONST = {
        PROP_TEXT: "text",
        PROP_HEADING: "heading",
        PROP_BUTTON_LINK: "link",
        PROP_TEXT_IS_RICH : "textIsRich",
        PROP_BUTTON_LABEL: "label",
        CONTEXT_TEXT: "text",
        CONTEXT_HTML: "html",
    };


    // Heading
    processItem.heading = granite.resource.properties[CONST.PROP_HEADING]
                                                || currentStyle.get(CONST.PROP_HEADING, "");


    // Wether the text contains HTML or not
    processItem.context = granite.resource.properties[CONST.PROP_TEXT_IS_RICH]
            ? CONST.CONTEXT_HTML : CONST.CONTEXT_TEXT

    // Text
    processItem.text = granite.resource.properties[CONST.PROP_TEXT]
                     || currentStyle.get(CONST.PROP_TEXT, "");

    // Link
    processItem.buttonLink = granite.resource.properties[CONST.PROP_BUTTON_LINK]
                     || currentStyle.get(CONST.PROP_TEXT, "");

    // Label
    processItem.buttonLabel = granite.resource.properties[CONST.PROP_BUTTON_LABEL]
                         || currentStyle.get(CONST.PROP_BUTTON_LABEL, "");
    

    var hasContentDeferred = Q.defer();
    if (granite.resource.properties[CONST.PROP_TEXT]) {
        hasContentDeferred.resolve(true);
    }
    granite.resource.resolve(granite.resource.path + "/image").then(function (imageResource) {
        if (imageResource.properties["fileReference"]) {
            hasContentDeferred.resolve(true);
        } else {
            granite.resource.resolve(granite.resource.path + "/image/file").then(function (localImage) {
                hasContentDeferred.resolve(true);
            }, function () {
                hasContentDeferred.resolve(false);
            });
        }
    }, function () {
        hasContentDeferred.resolve(false);
    });

    // TODO: change currentStyle to wcm.currentStyle
    // Adding the constants to the exposed API
    processItem.CONST = CONST;

    processItem.isTouch = AuthoringUtils.isTouch;

    processItem.hasImage = hasContentDeferred.promise;

    return processItem;

});