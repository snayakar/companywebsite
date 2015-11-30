use(["/libs/wcm/foundation/components/utils/AuthoringUtils.js",
    "/libs/wcm/foundation/components/utils/Image.js",
     "/libs/sightly/js/3rd-party/q.js"], function (AuthoringUtils, Image, Q) {

    "use strict";
    
    var processItem = {},
    CONST = {
        PROP_TEXT: "text",
        PROP_HEADING: "heading",
        PROP_BUTTON_LINK: "link",
        PROP_BUTTON_LABEL: "label",
    };


    // Heading
    processItem.heading = granite.resource.properties[CONST.PROP_HEADING]
                                                || currentStyle.get(CONST.PROP_HEADING, "");

    // Text
    processItem.text = granite.resource.properties[CONST.PROP_TEXT]
                     || currentStyle.get(CONST.PROP_TEXT, "");

    // Link
    processItem.buttonLink = granite.resource.properties[CONST.PROP_BUTTON_LINK]
                     || currentStyle.get(CONST.PROP_TEXT, "");

    // Label
    processItem.buttonLabel = granite.resource.properties[CONST.PROP_BUTTON_LABEL]
                         || currentStyle.get(CONST.PROP_BUTTON_LABEL, "");
    

    // TODO: change currentStyle to wcm.currentStyle
    // Adding the constants to the exposed API
    processItem.CONST = CONST;

    processItem.isTouch = AuthoringUtils.isTouch;

    return processItem;

});