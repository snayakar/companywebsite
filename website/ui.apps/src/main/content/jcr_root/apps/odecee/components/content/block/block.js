use(["/libs/wcm/foundation/components/utils/AuthoringUtils.js",
    "/libs/wcm/foundation/components/utils/Image.js",
     "/libs/sightly/js/3rd-party/q.js"], function (AuthoringUtils, Image, Q) {

    "use strict";

    var block = {};


    block.items = [];

    var CONST = {
        PROP_STYLE: "style",
        NUMBER_ITEMS: 3,
        PROP_TEXT: "text",
        PROP_TEXT_COLOR: "textColor",
        PROP_HEADING: "heading",
        PROP_BACKGROUND_COLOR: "backgroundColor",
        PROP_BUTTON_LINK: "link",
        PROP_BUTTON_LABEL: "label",
        PROP_ARROW_ICON: "arrowIcon"
    };

    // The container CSS class name is what defines the alignment
    block.style = granite.resource.properties[CONST.PROP_STYLE]
            || currentStyle.get(CONST.PROP_STYLE, "");

    // Adding the constants to the exposed API
    block.CONST = CONST;

    block.isTouch = AuthoringUtils.isTouch;


    for (var i=1; i <= CONST.NUMBER_ITEMS; i++) {
        var item = {},  imageDeferred = Q.defer();

        // Text Color
        item.textColor = granite.resource.properties[CONST.PROP_TEXT_COLOR + i]
                    || currentStyle.get(CONST.PROP_TEXT_COLOR + i, "");

        // Background Color
        item.backgroundColor = granite.resource.properties[CONST.PROP_BACKGROUND_COLOR + i]
                    || currentStyle.get(CONST.PROP_BACKGROUND_COLOR + i, "");


        // Heading
        item.heading = granite.resource.properties[CONST.PROP_HEADING + i]
                                                        || currentStyle.get(CONST.PROP_HEADING + i, "");

        // Text
        item.text = granite.resource.properties[CONST.PROP_TEXT + i]
                             || currentStyle.get(CONST.PROP_TEXT + i, "");

        // Button
        item.buttonLink = granite.resource.properties[CONST.PROP_BUTTON_LINK + i]
                             || currentStyle.get(CONST.PROP_BUTTON_LINK + i, "");

        // Label
        item.buttonLabel = granite.resource.properties[CONST.PROP_BUTTON_LABEL + i]
                             || currentStyle.get(CONST.PROP_BUTTON_LABEL + i, "");

        var image = {};

        granite.resource.resolve(granite.resource.path + "/image" + i).then(function (imageResource) {
            if (imageResource.properties["fileReference"]) {
                image = new Image(imageResource);
                imageDeferred.resolve(image);
            } else {
                granite.resource.resolve(granite.resource.path + "/image" + i + "/file").then(function (localImage) {
                    image = new Image(localImage);
                    imageDeferred.resolve(image);
                }, function () {
                     imageDeferred.resolve(false);
                });
            }
        }, function () {
             imageDeferred.resolve(false);
        });

        item.image = imageDeferred.promise;

        block.items.push(item);

    }

    block.CONST = CONST;

    block.isTouch = AuthoringUtils.isTouch;

    console.log(block.items.length);

    return block;
});