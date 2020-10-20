import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faEraser, faSave, faTrash, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faEdit, faTrash, faSave)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
