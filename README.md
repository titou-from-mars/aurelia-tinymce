# aurelia TinyMCE
Aurelia TinyMCE HTML Rich Text Editor Plugin

# Installation
1. npm install aurelia-tinymce-wrapper --save
2. (aurelia-cli) add package to the dependencies in the aurelia.json file.
```javascript
{
  "name": "aurelia-tinymce-wrapper",
  "path": "../node_modules/aurelia-tinymce-wrapper/dist/amd",
  "main": "index"            
},
{
  "name": "tinymce",
  "path": "../node_modules/tinymce",
  "main": "tinymce"
},
"timers"
```
3. copy the directory  `node_modules/tinymce/skins` to the `script` folder.

# Usage

1. add the plugin to your main.js file.
```javascript
import environment from './environment';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-tinymce-wrapper') //<-- This line
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
```

2. add the element to the view where you want to editor to go.
```html
<template>
  <h1>My Html Editor</h1>
  <tiny-mce theme="modern" menubar="false" content="hello world"></tiny-mce> <!--This line-->
</template>
```
3. the same, inline version
```html
<template>
  <h1>My Html Editor</h1>
  <tiny-mce inline theme="modern" menubar="false" content="hello world"></tiny-mce> <!--This line-->
</template>
```
# Bindable attribute

## content {string}
You can bind the content attribute, even with a two-way binding, like this :
```html
<template>  
  <tiny-mce content.two-way="content"></tiny-mce>
  <div>${content}</div>
</template>
```
## options {object}
One of the most important attributes. It gives you access to Tincymce configuration options. You can find these options in the documentation on Tinymce's website.Here is an example:
- app.js :
```javascript
export class App {
  constructor() {
    this.options = {
      toolbar:"formatselect bold italic | bullist numlist | link unlink | image media | code",
      menubar:false,
      plugins: ['link', 'paste', 'code', 'save', 'media','image','lists','advlist'],
      branding: false,      
      hidden_input:true,
      browser_spellcheck: true
    };
  }
}
```
- app.html :
```html
<template>  
  <tiny-mce content.two-way="content" options.bind="options"></tiny-mce>
  <div>${content}</div>
</template>
```

## theme {string} - "modern"|"inlite"|"mobile"

Allows you to choose between the 3 available themes:"modern","inlite" and "mobile". If you choose the theme "inlite", you must also activate the attribute "inline". Conversely, the "mobile" theme cannot work with the "inline"attribute. 
At the moment, it is not possible to change the theme on the fly.

## inline

If present, activate inline mode. The inline mode only works with the themes "modern" and "inlite".
```html
<template>  
  <tiny-mce content.two-way="content" inline></tiny-mce>
  <div>${content}</div>
</template>
```

# Localization

First you need to go to Tinymce's website to retrieve the language package file and the corresponding code :
https://www.tinymce.com/download/language-packages/

Then you must import this file and activate the language selected in the configuration. Here is an example with french :

```javascript
import './fr_FR';
export class App {
  constructor() {
    this.options = {
      language :'fr_FR'
    };
  }
}
```
- app.html :
```html
<template>  
  <tiny-mce content.two-way="content" options.bind="options"></tiny-mce>
  <div>${content}</div>
</template>
```

