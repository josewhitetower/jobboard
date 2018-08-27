// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase/app'
import firebaseConfig from './helpers/firebaseConfig'
import App from './App'
import Vuetify from 'vuetify'
import {sync} from 'vuex-router-sync'
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'
import router from './router'
import store from './store/store'
import Panel from './components/Panel.vue'
// index.js or main.js
import('vuetify/dist/vuetify.min.css') // Ensure you are using css-loader

Vue.use(Vuetify)
Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: 'AIzaSyAY7_AwOvVF1KgOEYF7bTqQGn3tyV-LeHo' // Can also be an object. E.g, for Google Maps Premium API, pass `{ client: <YOUR-CLIENT-ID> }`
})
// Bus event for global notifications
Vue.prototype.$bus = new Vue()

sync(store, router)
Vue.component('panel', Panel)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp(firebaseConfig)
  }
})
