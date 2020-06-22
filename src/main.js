import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App)}
  
}).$mount('#app')
