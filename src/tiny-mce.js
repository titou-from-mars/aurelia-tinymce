import { customElement, bindable, inject } from 'aurelia-framework';
import {Guid} from './utilities/guid';
import 'tinymce/tinymce';
import { setTimeout } from 'timers';

tinymce;

@customElement('tiny-mce')
@inject(Element)
export class TinyMce {
  @bindable theme = 'modern'; //modern, mobile, inlite
  @bindable inline = false;

  @bindable content = '';
  @bindable options = {};

  element;

  editorId = '';
  editorInstance = null;
  attachCount;

  constructor(element) {
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
      let save_init_instance_callback = this.options.init_instance_callback; //on le sauvegarde car il va être écrasé la ligne suivante
      this.options.init_instance_callback = (editor) => {
        editor.on('Change KeyUp', (e) => {
          this.content = this.editorInstance.getContent();
        });
        if (save_init_instance_callback) {
          save_init_instance_callback(editor);
        }
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
}
