// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import {sync} from 'vuex-router-sync'
import router from './router'
import store from './store/store'
import Panel from './components/Panel.vue'
// index.js or main.js
import('vuetify/dist/vuetify.min.css') // Ensure you are using css-loader

Vue.use(Vuetify)

sync(store, router)
Vue.component('panel', Panel)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
