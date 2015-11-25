/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2014 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

"use strict";

/**
 * Text and Image component JS Use-api script
 */
use(["/libs/wcm/foundation/components/utils/AuthoringUtils.js",
    "/libs/wcm/foundation/components/utils/Image.js",
     "/libs/sightly/js/3rd-party/q.js"], function (AuthoringUtils,Image, Q) {

    var section = {};
    var image = new Image(granite.resource);

    var textDeferred = Q.defer();
    var imageDeferred = Q.defer();

    var CONST = {
        PROP_ALIGNMENT: "alignment",
        PROP_TEXT: "text",
        PROP_TEXT_COLOR: "textColor",
        PROP_HEADING: "heading",
        PROP_BACKGROUND_COLOR: "backgroundColor",
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


    if (granite.resource.properties[CONST.PROP_TEXT] || granite.resource.properties[CONST.PROP_HEADING]) {
        var textComponent = {}

        // Heading
        textComponent[CONST.PROP_HEADING] = granite.resource.properties[CONST.PROP_HEADING]
                                                    || currentStyle.get(CONST.PROP_HEADING, "");

        // Text
        textComponent[CONST.PROP_TEXT] = granite.resource.properties[CONST.PROP_TEXT]
                         || currentStyle.get(CONST.PROP_TEXT, "");

        textDeferred.resolve(textComponent);
    }

    granite.resource.resolve(granite.resource.path + "/image").then(function (imageResource) {
        if (imageResource.properties["fileReference"]) {
             imageDeferred.resolve(true);
        } else {
            granite.resource.resolve(granite.resource.path + "/image/file").then(function (localImage) {
                 imageDeferred.resolve(true);
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