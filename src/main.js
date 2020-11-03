import Vue from 'vue'
import App from './App.vue'
import router from './router'


import store from './store';
import axios from 'axios';


Vue.config.productionTip = false;

if(localStorage.getItem('accessToken') == null) {
  store.commit('setAuthenticated', false);
}


new Vue({  store,
  router,

  render: h => h(App)
}).$mount('#App')
