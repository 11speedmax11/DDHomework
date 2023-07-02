import Vue from 'vue'
import App from './App.vue'
import vClickOutside from 'v-click-outside';
import router from './router';

Vue.use(vClickOutside);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
