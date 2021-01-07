<template>
  <qrvey-builders :settings="'buildersConfig'"></qrvey-builders>
</template>

<script lang="ts">
export default {
  name: "Builders",
  props: {
    config: Object,
  },
  beforeMount() {
    window['buildersConfig'] = {...this.config};
  },
}
</script>
