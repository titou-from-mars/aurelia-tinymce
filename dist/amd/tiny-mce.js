define(['exports', 'aurelia-framework', './utilities/guid', 'timers', 'tinymce/tinymce'], function (exports, _aureliaFramework, _guid, _timers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TinyMce = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  tinymce;

  var TinyMce = exports.TinyMce = (_dec = (0, _aureliaFramework.customElement)('tiny-mce'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = (_class2 = function () {
    function TinyMce(element) {
      _classCallCheck(this, TinyMce);

      _initDefineProp(this, 'theme', _descriptor, this);

      _initDefineProp(this, 'inline', _descriptor2, this);

      _initDefineProp(this, 'content', _descriptor3, this);

      _initDefineProp(this, 'options', _descriptor4, this);

      this.editorId = '';
      this.editorInstance = null;

      this.element = element;
    }

    TinyMce.prototype.bind = function bind() {
      this.setEditorId();
      if (this.inline !== false) this.inline = true;
      this.attachCount = 0;
    };

    TinyMce.prototype.attached = function attached() {
      var _this = this;

      window.setTimeout(function () {
        var el = document.getElementById(_this.editorId);
        if (!el && _this.attachCount < 100) {
          _this.attached();
          _this.attachCount += 1;
          return;
        }
        el.removeAttribute('style');
        el.removeAttribute('aria-hidden');

        _this.options.selector = '#' + _this.editorId;
        _this.options.theme = _this.theme;
        _this.options.inline = _this.inline;
        var save_init_instance_callback = _this.options.init_instance_callback;
        _this.options.init_instance_callback = function (editor) {
          editor.on('Change KeyUp', function (e) {
            _this.content = _this.editorInstance.getContent();
          });
          if (save_init_instance_callback) {
            save_init_instance_callback(editor);
          }
        };
        tinymce.init(_this.options);

        _this.editorInstance = tinymce.editors[_this.editorId];
        if (_this.editorInstance) {
          _this.editorInstance.setContent(_this.content);
        }
      }, 10);
    };

    TinyMce.prototype.detached = function detached() {
      if (this.editorInstance) {
        this.editorInstance.destroy();
      }
    };

    TinyMce.prototype.setEditorId = function setEditorId() {
      var guid = _guid.Guid.newGuid();
      var id = 'editor-' + guid.toString();
      this.editorId = id;
    };

    TinyMce.prototype.contentChanged = function contentChanged(value) {
      if (value !== this.editorInstance.getContent()) this.editorInstance.setContent(value);
    };

    TinyMce.prototype.setContent = function setContent(value) {
      if (this.editorInstance) {
        this.editorInstance.setContent(value);
      }
    };

    TinyMce.prototype.getContent = function getContent() {
      if (this.editorInstance) {
        return this.editorInstance.getContent();
      }
    };

    return TinyMce;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'theme', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'modern';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'inline', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'content', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return {};
    }
  })), _class2)) || _class) || _class);
});