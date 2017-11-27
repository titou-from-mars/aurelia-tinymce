var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
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

import { customElement, bindable, inject } from "aurelia-framework";
import { Guid } from './utilities/guid';
import 'tinymce/tinymce';
import 'tinymce/plugins/link/plugin';
import 'tinymce/plugins/paste/plugin';
import 'tinymce/plugins/hr/plugin';
import 'tinymce/plugins/save/plugin';
import 'tinymce/plugins/textcolor/plugin';
import 'tinymce/plugins/image/plugin';
import 'tinymce/plugins/media/plugin';
import 'tinymce/plugins/code/plugin';
import 'tinymce/plugins/advlist/plugin';
import 'tinymce/plugins/lists/plugin';
import 'tinymce/themes/modern/theme';
import 'tinymce/themes/mobile/theme';
import 'tinymce/themes/inlite/theme';

import { setTimeout } from "timers";

tinymce;

export let TinyMce = (_dec = customElement('tiny-mce'), _dec2 = inject(Element), _dec(_class = _dec2(_class = (_class2 = class TinyMce {

    constructor(element) {
        _initDefineProp(this, 'theme', _descriptor, this);

        _initDefineProp(this, 'inline', _descriptor2, this);

        _initDefineProp(this, 'content', _descriptor3, this);

        _initDefineProp(this, 'options', _descriptor4, this);

        this.editorId = '';
        this.editorInstance = null;

        this.element = element;
    }

    bind() {
        this.setEditorId();
        if (this.inline !== false) this.inline = true;
        this.attachCount = 0;
    }

    attached() {
        window.setTimeout(() => {
            let el = document.getElementById(this.editorId);
            if (!el && this.attachCount < 100) {
                this.attached();
                this.attachCount += 1;
                return;
            }
            el.removeAttribute('style');
            el.removeAttribute('aria-hidden');

            this.options.selector = `#${this.editorId}`;
            this.options.theme = this.theme;
            this.options.inline = this.inline;
            this.options.init_instance_callback = editor => {
                editor.on('Change KeyUp', e => {
                    this.content = this.editorInstance.getContent();
                });
            };
            tinymce.init(this.options);

            this.editorInstance = tinymce.editors[this.editorId];
            if (this.editorInstance) {
                this.editorInstance.setContent(this.content);
            }
        }, 10);
    }

    detached() {
        if (this.editorInstance) {
            this.editorInstance.destroy();
        }
    }

    setEditorId() {
        let guid = Guid.newGuid();
        let id = `editor-${guid.toString()}`;
        this.editorId = id;
    }

    contentChanged(value) {
        if (value !== this.editorInstance.getContent()) this.editorInstance.setContent(value);
    }

    setContent(value) {
        if (this.editorInstance) {
            this.editorInstance.setContent(value);
        }
    }

    getContent() {
        if (this.editorInstance) {
            return this.editorInstance.getContent();
        }
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'theme', [bindable], {
    enumerable: true,
    initializer: function () {
        return 'modern';
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'inline', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'content', [bindable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'options', [bindable], {
    enumerable: true,
    initializer: function () {
        return {};
    }
})), _class2)) || _class) || _class);