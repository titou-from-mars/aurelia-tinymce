'use strict';

System.register(['tinymce/themes/modern/theme'], function (_export, _context) {
    "use strict";

    var ThemeModern;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_tinymceThemesModernTheme) {}],
        execute: function () {
            _export('ThemeModern', ThemeModern = function ThemeModern() {
                _classCallCheck(this, ThemeModern);

                console.log('modern theme loaded.');
            });

            _export('ThemeModern', ThemeModern);
        }
    };
});