<template>
  <div id="app">
    <Builders :config="configObject"></Builders>
  </div>
</template>

<script>
import Builders from "@/components/Builders";

const importScript = (url) => {
  document.body.appendChild(Object.assign(document.createElement('script'), {
    type: 'text/javascript',
    defer: true,
    src: url
  }));
}

const configObject = {
  domain: 'https://manualqastg.qrvey.com',
  appid: 'L4NjFnKXK',
  userid: 'pwWErgJ',
  apikey: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0',
};

importScript('https://580703004664postdev1qrveywidgets.s3.amazonaws.com/widgets-launcher/app.js');

export default {
  name: 'App',
  components: {
    Builders
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
