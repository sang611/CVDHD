import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authStatus:
        axios.post(
        "http://localhost:8017/verifyToken",{},
        {
          headers: {
            'x-access-token' : `${localStorage.getItem('accessToken')}`
          } })
        .then((res) => {
            store.commit('setAuthenticated', true);
        })
            .catch((e) => console.log(e)),
    isAuthenticated: false
  },
  mutations: {
    setAuthenticated(state, status){
      state.isAuthenticated = status;
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store;
