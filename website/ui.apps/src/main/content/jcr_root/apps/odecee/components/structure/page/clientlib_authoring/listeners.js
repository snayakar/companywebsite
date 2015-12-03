(function ($, $document) {
    "use strict";

   $(document).on("change", "form.cq-dialog .dialog-hide-navigation", function () {
       $('form.cq-dialog .dialog-more-navigation').toggle('hidden');
       $('form.cq-dialog .dialog-box-navigation').toggle('hidden');
    });

    $(document).on("dialog-ready", function() {
        if ($("form.cq-dialog .dialog-hide-navigation").prop('checked')) {
           $('form.cq-dialog .dialog-more-navigation').toggle('hidden');
           $('form.cq-dialog .dialog-box-navigation').toggle('hidden');
        }
    });


})($, $(document));