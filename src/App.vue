<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/login">Login</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        created() {
            /*axios.post(
                "http://localhost:8017/verifyToken",{},
                {
                    headers: {
                        'x-access-token' : `${localStorage.getItem('accessToken')}`
                    } })
                .then((res) => {
                    if(res.data) {
                        console.log(res.data);
                        this.$store.commit('setAuthenticated', true);
                    }
                    else {
                        this.$store.commit('setAuthenticated', false);
                    }
                })
                .catch(e=>this.$store.commit('setAuthenticated', false));*/
        }
    }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

