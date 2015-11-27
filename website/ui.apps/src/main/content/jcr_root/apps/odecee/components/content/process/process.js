use(["/libs/wcm/foundation/components/utils/AuthoringUtils.js",
    "/libs/wcm/foundation/components/utils/Image.js",
     "/libs/sightly/js/3rd-party/q.js"], function (AuthoringUtils, Image, Q) {

    "use strict";
    
    var process = {},
        imageDeferred = Q.defer(), image = {};

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


    process.isTouch = AuthoringUtils.isTouch;

    process.imageContent = imageDeferred.promise;

    return process;

});