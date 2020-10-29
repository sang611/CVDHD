import Vue from 'vue'
import App from './App.vue'
import router from './router'

import AxiosPlugin from 'vue-axios-cors';
import store from './store';
import axios from 'axios';

Vue.use(AxiosPlugin)

Vue.config.productionTip = false;
if(localStorage.getItem('accessToken') == null) {
  store.commit('setAuthenticated', false);
}
else
  axios.post(
    "http://localhost:8017/verifyToken",{},
    {
      headers: {
        'x-access-token' : `${localStorage.getItem('accessToken')}`
      } })
    .then((res) => {
      if(res.data) {
        console.log(res.data);
        store.commit('setAuthenticated', true);
      }
      else {
        store.commit('setAuthenticated', false);
      }
    })
    .catch(e=>store.commit('setAuthenticated', false));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
