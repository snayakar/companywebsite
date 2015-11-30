use(["/libs/wcm/foundation/components/utils/AuthoringUtils.js"], function (AuthoringUtils) {

    "use strict";

    var footer = {},
        CONST = {
            PROP_COPYRIGHT: "copyright",
            PROP_TERMS_AND_CONDITION: "termsLink",
            PROP_PHONE: "phone",
            PROP_EMAIL: "email",
            PROP_TWITTER_URL: "twitter",
            PROP_FACEBOOK_URL: "facebook",
            PROP_LINKEDIN_URL: "linkedin"
        };

    // Copyright Text
    footer.copyright = granite.resource.properties[CONST.PROP_COPYRIGHT]
            || currentStyle.get(CONST.PROP_COPYRIGHT, "");

    // Terms and Condition Link
    footer.termsLink = granite.resource.properties[CONST.PROP_TERMS_AND_CONDITION]
                || currentStyle.get(CONST.PROP_TERMS_AND_CONDITION, "");

    // Phone Number
    footer.phone = granite.resource.properties[CONST.PROP_PHONE]
                || currentStyle.get(CONST.PROP_PHONE, "");

    // Email
    footer.email = granite.resource.properties[CONST.PROP_EMAIL]
                || currentStyle.get(CONST.PROP_EMAIL, "");

    // Twitter URL
    footer.twitter = granite.resource.properties[CONST.PROP_TWITTER_URL]
                || currentStyle.get(CONST.PROP_TWITTER_URL, "");

    // Facebook URL
    footer.facebook = granite.resource.properties[CONST.PROP_FACEBOOK_URL]
                || currentStyle.get(CONST.PROP_FACEBOOK_URL, "");

    // Linkedin URL
    footer.linkedin = granite.resource.properties[CONST.PROP_LINKEDIN_URL]
                || currentStyle.get(CONST.PROP_LINKEDIN_URL, "");

    // TODO: change currentStyle to wcm.currentStyle
    // Adding the constants to the exposed API
    footer.CONST = CONST;

    footer.isTouch = AuthoringUtils.isTouch;


    return footer;

});