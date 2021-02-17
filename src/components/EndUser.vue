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
