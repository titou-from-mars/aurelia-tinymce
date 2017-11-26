'use strict';

System.register(['tinymce/themes/inlite/theme'], function (_export, _context) {
    "use strict";

    var ThemeInline;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_tinymceThemesInliteTheme) {}],
        execute: function () {
            _export('ThemeInline', ThemeInline = function ThemeInline() {
                _classCallCheck(this, ThemeInline);

                console.log('inline theme loaded.');
            });

            _export('ThemeInline', ThemeInline);
        }
    };
});