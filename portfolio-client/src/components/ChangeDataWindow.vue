<template>
  <div class="ChangeDataWindow" v-bind:class="{ ChangeDataWindowHided: this.$store.state.isChangeWindowHided }">
    <div class="ChangeDataWindow__openerContainer">
      <button class="windowOpener" v-on:click="OpenerClick">
        {{ this.$store.state.isChangeWindowHided ? 'Panel' : 'Close' }}
      </button>
    </div>
    <div class="ChangeDataWindow__form">

    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangeDataWindow',
  methods: {
    OpenerClick () {
      let windowState = this.$store.state.isChangeWindowHided;
      this.$store.commit('updateIsChangeWindowHided',!windowState);
    }
  }
}
</script>

<style scoped>
.ChangeDataWindow{
  left: 0;
  bottom: 0;
  height: 60%;
  width: 19%;
  background: #fff;
  position: fixed;
  transition: all 350ms ease 0s;
}
.ChangeDataWindowHided{
  bottom: -60%;
  left: -10%;
}
.windowOpener{
  position: absolute;
  top: 0;
  left: 0;
  background: #2fa06d;
  width: 100%;
  height: 40px;
  margin-top: -40px;
  border-top-right-radius: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #eee;
  font-size: 28px;
  cursor: pointer;
  border: none;
  outline: none;
  padding-right: 50px;
  transition: all 100ms linear 0s;
}
.windowOpener:active{
  background: #21724d;
}
</style>

