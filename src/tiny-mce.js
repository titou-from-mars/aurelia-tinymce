import { customElement, bindable, inject } from "aurelia-framework";
import {Guid} from './utilities/guid';
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
import { setTimeout } from "timers";

tinymce;

@customElement('tiny-mce')
@inject(Element)
export class TinyMce
{
    @bindable theme = 'modern'; //modern, mobile, inlite  
    @bindable inline = false; 
    
    @bindable content = '';
    @bindable options ={};

    element;

    editorId = '';
    editorInstance = null;
    attachCount;
    
    

    constructor(element){
        this.element = element;        
    }

    bind(){
        this.setEditorId();       
        if(this.inline !== false) this.inline = true;
        this.attachCount = 0;
    }   
    

    attached(){
        window.setTimeout(() => {
            let el = document.getElementById(this.editorId);
            if(!el && this.attachCount < 100){
                this.attached();
                this.attachCount += 1;
                return;
            }
            el.removeAttribute('style');
            el.removeAttribute('aria-hidden')
            
            this.options.selector = `#${this.editorId}`;
            this.options.theme = this.theme;        
            this.options.inline = this.inline;
            this.options.content_css = this.getCss(this.options.content_css);
            this.options.init_instance_callback = (editor)=> {
              editor.on('Change KeyUp',  (e)=> {
                this.content = this.editorInstance.getContent();
              });
            };
            tinymce.init(this.options);
    
            this.editorInstance = tinymce.editors[this.editorId];
            if(this.editorInstance){
                this.editorInstance.setContent(this.content);
            }    
        }, 10);           
    }

    detached(){
        if(this.editorInstance){
            this.editorInstance.destroy();            
        }
    }
   

    setEditorId(){
        let guid = Guid.newGuid();
        let id = `editor-${guid.toString()}`;
        this.editorId = id;
    }

    contentChanged(value){         
      if(value !== this.editorInstance.getContent()) this.editorInstance.setContent(value);
    }

    getCss(css) {

      let cssBase = 'node_modules/tinymce/skins/lightgray/' ;
      if(this.theme === "mobile") cssBase += 'content.mobile.min.css';
      else if(this.inline) cssBase += 'content.inline.min.css';
      else cssBase += 'content.min.css';

      if (css && typeof css === "string")       
         cssBase = cssBase + ',' + css;

      else if (css && Array.isArray(css)) {
        css.unshift(cssBase);
        cssBase = css;
      }

      console.log("css calculé:",cssBase);
      return cssBase;

    }

    
    setContent (value){ 
        if(this.editorInstance){            
            this.editorInstance.setContent(value);
        } 
    }

    getContent(){        
        if(this.editorInstance){                     
           return this.editorInstance.getContent();
        } 
    }
}
