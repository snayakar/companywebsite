use(["/libs/wcm/foundation/components/utils/AuthoringUtils.js",
    "/libs/wcm/foundation/components/utils/Image.js",
     "/libs/sightly/js/3rd-party/q.js"], function (AuthoringUtils, Image, Q) {

    "use strict";
    
    var section = {},
        textDeferred = Q.defer(),
        imageDeferred = Q.defer(),
        CONST = {
            PROP_ALIGNMENT: "alignment",
            PROP_TEXT: "text",
            PROP_TEXT_COLOR: "textColor",
            PROP_HEADING: "heading",
            PROP_BACKGROUND_COLOR: "backgroundColor",
            PROP_BUTTON_LINK: "link",
            PROP_BUTTON_LABEL: "label",
            PROP_ARROW_ICON: "arrowIcon"
        };

    // The container CSS class name is what defines the alignment
    section.alignment = granite.resource.properties[CONST.PROP_ALIGNMENT]
            || currentStyle.get(CONST.PROP_ALIGNMENT, "");

    // Text Color
    section.textColor = granite.resource.properties[CONST.PROP_TEXT_COLOR]
                || currentStyle.get(CONST.PROP_TEXT_COLOR, "");

    // Background Color
    section.backgroundColor = granite.resource.properties[CONST.PROP_BACKGROUND_COLOR]
                || currentStyle.get(CONST.PROP_BACKGROUND_COLOR, "");


    if (granite.resource.properties[CONST.PROP_TEXT] ||
            granite.resource.properties[CONST.PROP_BUTTON_LINK] ||
            granite.resource.properties[CONST.PROP_HEADING]) {
        var textComponent = {}

        // Heading
        textComponent[CONST.PROP_HEADING] = granite.resource.properties[CONST.PROP_HEADING]
                                                    || currentStyle.get(CONST.PROP_HEADING, "");

        // Text
        textComponent[CONST.PROP_TEXT] = granite.resource.properties[CONST.PROP_TEXT]
                         || currentStyle.get(CONST.PROP_TEXT, "");

        // Link
        textComponent[CONST.PROP_BUTTON_LINK] = granite.resource.properties[CONST.PROP_BUTTON_LINK]
                         || currentStyle.get(CONST.PROP_TEXT, "");

        textDeferred.resolve(textComponent);
    }
    
    
    // Button
    section.buttonLink = granite.resource.properties[CONST.PROP_BUTTON_LINK]
                         || currentStyle.get(CONST.PROP_BUTTON_LINK, "");
    
    // Label
    section.buttonLabel = granite.resource.properties[CONST.PROP_BUTTON_LABEL]
                         || currentStyle.get(CONST.PROP_BUTTON_LABEL, "");
    
     // Label
    section.arrowIcon = granite.resource.properties[CONST.PROP_ARROW_ICON]
                         || currentStyle.get(CONST.PROP_ARROW_ICON, "");
    
    

    var image = {};

    granite.resource.resolve(granite.resource.path + "/image").then(function (imageResource) {
        if (imageResource.properties["fileReference"]) {
			image = new Image(imageResource);
            imageDeferred.resolve(image);
        } else {
            granite.resource.resolve(granite.resource.path + "/image/file").then(function (localImage) {
				image = new Image(localImage);
                imageDeferred.resolve(image);
            }, function () {
                 imageDeferred.resolve(false);
            });
        }
    }, function () {
         imageDeferred.resolve(false);
    });

    // TODO: change currentStyle to wcm.currentStyle
    // Adding the constants to the exposed API
    section.CONST = CONST;

    section.isTouch = AuthoringUtils.isTouch;

    section.textContent = textDeferred.promise;
    section.imageContent = imageDeferred.promise;

    return section;

});