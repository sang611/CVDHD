import Vue from 'vue'
import App from './App.vue'
import router from './router'


import store from './store';
import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';

Vue.use(VueFileAgent);


Vue.config.productionTip = false;

if(localStorage.getItem('accessToken') == null) {
  store.commit('setAuthenticated', false);
}


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#App')
