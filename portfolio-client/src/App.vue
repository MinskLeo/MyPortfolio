<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import CookieManager from "./cookieManager.js";
import ax from './axios-common';

export default {
  name: 'App',
  methods : {
    checkKey (key) {
      ax.post('/checkKey', {
        key: key
      }).then((result) => {
        this.$store.state.key = key;
      }).catch((error) => {
        this.$store.state.ErrorLoger(error);
      });
    }
  },
  created() {
    let key = CookieManager.getCookie('key');
    if(key){
      this.checkKey(key);
    }
  }
}
</script>


<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  cursor: default;
}
body{
  background: rgb(248, 248, 248);
}
#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
