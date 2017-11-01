// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import Notify from 'vue2-notify'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

/* ...there may be other imports here */
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
/* components styles... */
import './assets/css/components.min.css'

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(Notify)
// globally (in your main .js file)
Vue.component('icon', Icon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
