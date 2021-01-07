import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Tell Vue to ignore all Qrvey components.
// The regex assumes all components names are prefixed 'qrvey'
Vue.config.ignoredElements = [/qrvey-\w*/];

new Vue({
  render: h => h(App),
}).$mount('#app')
