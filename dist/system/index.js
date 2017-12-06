'use strict';

System.register(['./tiny-mce', './utilities/guid'], function (_export, _context) {
  "use strict";

  var TinyMce, Guid;
  function configure(config) {
    config.globalResources('./tiny-mce');
  }

  _export('configure', configure);

  return {
    setters: [function (_tinyMce) {
      TinyMce = _tinyMce.TinyMce;
    }, function (_utilitiesGuid) {
      Guid = _utilitiesGuid.Guid;
    }],
    execute: function () {}
  };
});