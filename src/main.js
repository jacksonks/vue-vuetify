import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/router'
import {store} from './store/store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')