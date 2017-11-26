'use strict';

System.register(['tinymce/themes/mobile/theme'], function (_export, _context) {
    "use strict";

    var ThemeMobile;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_tinymceThemesMobileTheme) {}],
        execute: function () {
            _export('ThemeMobile', ThemeMobile = function ThemeMobile() {
                _classCallCheck(this, ThemeMobile);

                console.log('mobile theme loaded.');
            });

            _export('ThemeMobile', ThemeMobile);
        }
    };
});