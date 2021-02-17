<template>
  <div id="app">
    <EndUser :config="configObject"></EndUser>
  </div>
</template>

<script>

import EndUser from "@/components/EndUser";
import {importScript} from "@/importScript";

const configObject = {
  domain: 'https://sandbox.qrveyapp.com',
  appid: 'H2UuWJeIp',
  apikey: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0',
};

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

<style>
  body {
    margin: 0;
  }
</style>
