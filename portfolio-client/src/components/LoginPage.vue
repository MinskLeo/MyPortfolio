<template>
  <div class="LoginPage">
    <div class="form">
      <div class="form__container form__container-ID" v-if="!this.$store.state.key">
        <input type="text" placeholder="Key" v-bind:value="this.$store.state.key" class="form__element form__ID" spellcheck="false" ref="keyInput">
        <p class="form__paste"><i class="fas fa-paste"></i></p>
      </div>
      
      <button class="form__element form__submit" v-if="!this.$store.state.key" v-on:click="onSubmitClick">Submit</button>
      <button class="form__element form__submit" v-if="this.$store.state.key" v-on:click="onSignOutClick">Sign Out</button>
      <router-link to="/" class="form__element form__link">Go to Portfolio</router-link>
    </div>
  </div>
</template>

<script>
import CookieManager from "../cookieManager.js";
import ax from '../axios-common';

export default {
  name: 'LoginPage',
  methods: {
    checkKey (key) {
      ax.post('/checkKey', {
        key: key
      }).then((result) => {
        console.log("Successful!");
        this.$store.state.key = key;
        CookieManager.setCookie('key',key);
      }).catch((error) => {
        this.$store.state.ErrorLoger(error);
        CookieManager.deleteCookie('key');
      });
    },
    onSubmitClick () {
      if(this.$refs.keyInput.value!==""){
        this.checkKey(this.$refs.keyInput.value);
      }
    },
    onSignOutClick () {
      this.$store.state.key = null;
      CookieManager.deleteCookie('key');
      console.log("Successful Sign Out!");
    }
  },
  created () {
    if(!this.$store.state.key){
      let key = CookieManager.getCookie('key');
      if(key){
        this.checkKey(key);
      }
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.LoginPage{
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
}
.form{
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form__element{
  margin: 10px 0;
  font-size: 25px;
}
.form__container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.form__container-ID{
  position: relative;
  height: fit-content;
  width: fit-content;
  margin-bottom: 20px;
}
.form__paste{
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  height: 100%;
  background: #2fa06d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
}
.form__paste:active{
  background: #288b5f;
}
.form__paste i{
  color: #eee;
  font-size: 20px;
  cursor: pointer;
}
.form__ID{
  padding: 10px 20px;
  border: none;;
  cursor: text;
  text-align: left;
  width: 100%;
  margin: 0;
  padding-right: 60px;
  box-sizing: content-box;
}
.form__ID::placeholder{
  text-align: center;
}
.form__ID:focus{
  outline-color: #2fa06d;
}
.form__submit{
  padding: 10px 20px;
  background: #2fa06d;
  color: #eee;
  border: none;
  cursor: pointer;
  outline: none;
}
.form__submit:active{
  background: #288b5f;
}
.form__link{
  cursor: pointer;
  font-size: 18px;
}

.form__link,
.form__link:visited,
.form__link:active{
  color: #2fa06d; 
}
.form__link:hover{
  color: #21724d;
}
</style>

