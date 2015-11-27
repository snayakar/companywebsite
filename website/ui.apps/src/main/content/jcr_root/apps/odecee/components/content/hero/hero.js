use(["/libs/wcm/foundation/components/utils/AuthoringUtils.js",
    "/libs/wcm/foundation/components/utils/Image.js",
     "/libs/sightly/js/3rd-party/q.js"], function (AuthoringUtils, Image, Q) {

    "use strict";
    
    var hero = {},
        CONST = {
            PROP_TEXT: "text",
            PROP_HEADING: "heading",
            PROP_BUTTON_LINK: "link",
            PROP_BUTTON_LABEL: "label",
            PROP_ARROW_ICON: "arrowIcon"
        };

    // Heading
    hero.heading = granite.resource.properties[CONST.PROP_HEADING]
                                                || currentStyle.get(CONST.PROP_HEADING, "");

    // Text
    hero.text = granite.resource.properties[CONST.PROP_TEXT]
                     || currentStyle.get(CONST.PROP_TEXT, "");


    
   /* // Button
    hero.buttonLink = granite.resource.properties[CONST.PROP_BUTTON_LINK]
                         || currentStyle.get(CONST.PROP_BUTTON_LINK, "");
    
    // Label
    hero.buttonLabel = granite.resource.properties[CONST.PROP_BUTTON_LABEL]
                         || currentStyle.get(CONST.PROP_BUTTON_LABEL, "");*/
    
     // Label
    hero.arrowIcon = granite.resource.properties[CONST.PROP_ARROW_ICON]
                         || currentStyle.get(CONST.PROP_ARROW_ICON, "");
    
    

    hero.CONST = CONST;

    hero.isTouch = AuthoringUtils.isTouch;

    return hero;

});