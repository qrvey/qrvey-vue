<div align="center">
	<img alt="Qrvey Logo" src="https://s3.amazonaws.com/cdn.qrvey.com/images/qrvey-logo.svg" width="200" />
</div>

# Using Qrvey in Vue.js :evergreen_tree:

Qrvey is a Web Component-based analytics platform, using multiples technologies such as [stenciljs](https://github.com/ionic-team/stencil), [Angular](https://github.com/angular/angular) and [Vue.js](https://github.com/vuejs/vue).

In this repository we are giving instructions to use the **qrvey-end-user** component in Vue.js 2.6.

## Table of contents

* [Installation](#installation)
* [Creating End User Component](#creating-end-user-component)
* [Using End User](#using-end-user)
* [Demo](#demo)
* [Troubleshooting](#troubleshooting)

## Installation

Use a script tag linked to a CDN copy of your Qrvey loader distribution, for example:

    // index.html
    <script src="//421850935145sandboxqrveywidgets.s3.amazonaws.com/widgets-launcher/app.js" type="text/javascript">

Or you can load the script dynamically, in this example we are going to use this function:

	const importScript = (url) => {  
      document.body.appendChild(Object.assign(document.createElement('script'), {  
	      type: 'text/javascript',  
	      src: url  
      }));}
	
	importScript("//421850935145sandboxqrveywidgets.s3.amazonaws.com/widgets-launcher/app.js");

In order to use the custom element within the Vue app, inform the Vue compiler which elements to ignore during compilation. This can be done within the [main.js](https://github.com/qrvey/qrvey-vue/blob/master/src/main.js) file:

    // Tell Vue to ignore all Qrvey components.
    // The regex assumes all components names are prefixed 'qrvey'
    Vue.config.ignoredElements = [/qrvey-\w*/];

## Creating End User component

Now you are ready to use the **qrvey-end-user** tag. To avoid issues with non-scalar data (data that is not a string or number) **qrvey-end-user** element was designed to work with a string property called **settings**, and a variable in **window** which name should be the exact value of the **settings** property.
For this example we are going to wrap the web component in a Vue Component:

    // components/EndUser.vue
    <template>
        <qrvey-end-user :settings="'endUserConfig'"></qrvey-end-user>
    </template>
    
    <script lang="ts">
        export default {
          name: "EndUser",
          props: {
            config: Object,
          },
          beforeMount() {
            window['endUserConfig'] = {...this.config};
          },
        }
    </script>

## Using End User

The final step is the setup of a valid configuration object. For more details about **qrvey-end-user** configuration object, read [official docs](https://partners.qrvey.com/documentation/).


    <template>
      <div id="app">
        <EndUser :config="configObject"></EndUser>
      </div>
    </template>
    
    <script>
    
    import EndUser from "@/components/EndUser";
    import {importScript} from "@/importScript";
    
    importScript('//421850935145sandboxqrveywidgets.s3.amazonaws.com/widgets-launcher/app.js');
    
    export default {
      name: 'App',
      components: {
        EndUser
      },
      data() {
        return {
          configObject
        }
      }
    }
    </script>

## Demo

In the root directory, run:

    npm run serve

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

![Preview End User Demo](https://s3.amazonaws.com/cdn.qrvey.com/images/preview-end-user.png)

## Troubleshooting
If you are experiencing issues with **qrvey-end-user** element in your React app, please contact Qrvey team.
