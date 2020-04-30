/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery'
], function ($) {
    'use strict';

    return function (data) {
        $(".toggle-password").click(function() {
            if ($("#pass").attr("type") == "password") {
                $("#pass").attr("type", "text");
            } else {
                $("#pass").attr("type", "password");
            }
        });
    };
});
