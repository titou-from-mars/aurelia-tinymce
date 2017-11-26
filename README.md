# aurelia TinyMCE
Aurelia TinyMCE HTML Editor Plugin

# Installation
1. npm install aurelia-tinymce-wrapper tinymce timers --save
2. (aurelia-cli) add package to the dependencies in the aurelia.json file.
```javascript
{
            "name": "aurelia-tinymce-wrapper",
            "path": "../node_modules/aurelia-tinymce-wrapper/dist/amd",
            "main": "index",
            "deps": [
              "./tinymce/tinymce"
            ],            
            "resources": [
              "**/*.{css,html}"
            ]
},
{
            "name": "tinymce",
            "path": "../node_modules/tinymce",
            "main": "tinymce"
          },
"timers"
```
3. create a `fonts` and `img` directory in the root of your project (if you dont already have them).
4. copy the contents of `node_modules/tinymce/skins/lightgray/fonts` to the `fonts` folder you created.
5. copy the contents of `node_modules/tinymce/skins/lightgray/img` to the `img` folder you created.

# Usage

1. add the plugin to your main.ts file.
```javascript
import {Aurelia} from 'aurelia-framework'
import environment from './environment';

export function configure(aurelia: Aurelia) {
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
  <tiny-mce theme="mobile" menubar="false" content="hello world"></tiny-mce> <!--This line-->
</template>
```
2.b the same, inline version
```html
<template>
  <h1>My Html Editor</h1>
  <tiny-mce inline theme="mobile" menubar="false" content="hello world"></tiny-mce> <!--This line-->
</template>
```

