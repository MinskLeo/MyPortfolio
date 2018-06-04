<template>
  <div class="ChangeDataWindow" v-bind:class="{ ChangeDataWindowHided: this.$store.state.isChangeWindowHided }">
    <div class="ChangeDataWindow__openerContainer">
      <div class="windowOpener" v-bind:class="{ windowOpenerFlexRight: this.$store.state.formPhase===1}">
        <button class="windowOpener__button" v-if="this.$store.state.formPhase>1" v-on:click="ChangePhasePrev"><i class="fas fa-arrow-left"></i></button>
        <button class="windowOpener__button" v-on:click="OpenerClick">{{ this.$store.state.isChangeWindowHided ? 'Panel' : 'Close' }}</button>
      </div>
    </div>
    <!-- First Stage -->
    <div class="ChangeDataWindow__form" v-if="this.$store.state.formPhase===1">
      <div class="form__title">
        1. Choose Action
      </div>
      <div class="form__actions">
        <button class="actions__actionBlock" v-on:click="ChangeSelectedAction('create')">
          Create
        </button>
        <button class="actions__actionBlock" v-on:click="ChangeSelectedAction('change')">
          Change
        </button>
        <button class="actions__actionBlock" v-on:click="ChangeSelectedAction('delete')">
          Delete
        </button>
      </div>
    </div>

    <!-- Second stage (Create)-->
    <div class="ChangeDataWindow__form" v-if="this.$store.state.formPhase===2">
      <div class="form__title">
        2. What do you want to create?
      </div>
      <div class="form__actions">
        <button class="actions__actionBlock" v-on:click="ChangeSelectedType('contacts')">
          Contacts info
        </button>
        <button class="actions__actionBlock" v-on:click="ChangeSelectedType('sidebar')">
          Sidebar block
        </button>
        <button class="actions__actionBlock" v-on:click="ChangeSelectedType('contentpart')">
          Contentpart block
        </button>
      </div>
    </div>
    <!-- Variable fillied up with TYPE -->
    
    <!-- Third stage (filling up) -->
    <div class="ChangeDataWindow__form" v-if="this.$store.state.formPhase===3">
      <div class="form__title">
        3. Fill it up now
      </div>
      <div class="form__filling">
        <div class="filling__element filling__textContainer">
          <input class="filling__text" placeholder="Title" v-on:change="ChangeSelectedTitle"/>
        </div>
        <button class="filling__element filling__selectedIcon" v-on:click="IconsBarOpen">
          <i v-if="this.$store.state.selectedIcon" v-bind:class="this.$store.state.selectedIcon"></i>
          <p v-else>icon</p>
        </button>
        <div class="filling__element filling__icons" v-if="this.$store.state.isIconBarOpened">
          <div class="icons__icon" v-bind:key="icon" v-for="icon in this.$store.state.icons" v-on:click="IconClick(icon)">
            <i v-bind:class="icon"></i>
          </div>
        </div>
        <button class="filling__element filling__button">
          Next
        </button>
      </div>
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
    },
    IconsBarOpen () {
      let iconBarState = this.$store.state.isIconBarOpened;
      this.$store.commit('updateIsIconBarOpened',!iconBarState);
    },
    IconClick (icon) {
      this.$store.commit('updateSelectedIcon',icon);
      this.$store.commit('updateIsIconBarOpened',false);
    },
    ChangePhaseNext () {
      let currentPhase = this.$store.state.formPhase;
      this.$store.commit('updateFormPhase',(currentPhase+1) );
    },
    ChangePhasePrev () {
      let currentPhase = this.$store.state.formPhase;
      this.$store.commit('updateFormPhase',(currentPhase-1) );
    },
    ChangeSelectedAction (action) {
      this.$store.commit('updateSelectedAction',action);
      this.ChangePhaseNext();
    },
    ChangeSelectedType (type) {
      this.$store.commit('updateSelectedType',type);
      this.ChangePhaseNext();
    },
    ChangeSelectedTitle (e) {
      this.$store.commit('updateSelectedTitle',e.target.value);
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
  justify-content: space-between;
  align-items: center;
  color: #eee;
  font-size: 28px;
  border: none;
  outline: none;
  padding-right: 50px;
  padding-left: 20px;
  transition: all 100ms linear 0s;
}
.windowOpenerFlexRight{
  justify-content: flex-end;
}
.windowOpener__button{
  background: #21724d;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #eee;
}
.windowOpener__button:active{
  color: rgb(219, 219, 219);
}
.windowOpener:active{
  background: #21724d;
}

.ChangeDataWindow__form{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.ChangeDataWindow__form::-webkit-scrollbar-thumb{
  background: #21724d;
}
.ChangeDataWindow__form::-webkit-scrollbar{
  width: 8px;
}
.form__title{
  width: 100%;
  font-size: 25px;
  padding: 40px 0;
  /* background: red; */
}
.form__filling,
.form__actions{
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
}
.actions__actionBlock{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2fa06d;
  padding: 20px;
  border-radius: 4px;
  color: #eee;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: 0 0 2px #21724d;
  transition: all 60ms linear 0s;
}
.filling__selectedIcon:active,
.icons__icon:active,
.actions__actionBlock:active{
  background: #21724d;
}
.filling__textContainer{
  width: 100%;
}
.form__filling{
  justify-content: center;
  align-items: flex-start;
}
.filling__text{
  width: 90%;
  height: 100%;
  font-size: 20px;
  padding: 5px 20px;
  cursor: text;
  text-align: left;
}
.filling__text::placeholder{
  text-align: center;
}
.filling__text:focus{
  outline-color: #21724d;
}
.filling__element{
  margin: 10px 0;
  /* width: 100%; */
  display: block;
}
.filling__icons{
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
}
.icons__icon{
  width: 30px;
  height: 30px;
  padding: 20px;
  background: #2fa06d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 5px;
  transition: all 70ms linear 0s;
}
.icons__icon:hover{
  transform: scale(1.05);
}
.windowOpener i,
.filling__selectedIcon i,
.filling__selectedIcon p,
.icons__icon i{
  color: #eee;
  cursor: pointer;
}
.filling__selectedIcon{
  font-size: 25px;
  height: 70px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2fa06d;
  color: #eee;
  border-radius: 2px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 70ms linear 0s;
}
.filling__button{
  width: 50%;
  width: 80%;
  padding: 20px;
  font-size: 25px;
  background: #2fa06d;
  color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  outline: none;
}
.filling__button:active{
  background: #21724d;
}
</style>

