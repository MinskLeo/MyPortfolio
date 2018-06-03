<template>
  <div class="Sidebar">
    <div class="Sidebar__imageContainer">
      <img v-bind:src="this.$store.state.contacts.image" alt="null">
      <div class="imageContainer__mask" v-if="isLoggedIn">
        <label>
          <i class="fas fa-pencil-alt"></i>
          <input type="file" style="display: none">
        </label>
        
      </div>
      <p class="imageContainer__myname">{{this.$store.state.contacts.name}}</p>
    </div>
    <div class="ContactsBlock">
      <div class="ContactsBlock__element ContactsBlock__status">
        {{this.$store.state.contacts.status}}
        <div class="editModePen" v-if="isLoggedIn">
              <i class="fas fa-pencil-alt editModePen__tool"></i>
            </div>
      </div>

      <div class="hr"></div>

      <div class="ContactsBlock__element ContactsBlock__specialization">
        <i class="fas fa-briefcase"></i>
        {{this.$store.state.contacts.specialization}}
        <div class="editModePen" v-if="isLoggedIn">
              <i class="fas fa-pencil-alt editModePen__tool"></i>
            </div>
      </div>

      <div class="ContactsBlock__element ContactsBlock__address">
        <i class="far fa-building"></i>
        {{this.$store.state.contacts.address}}
        <div class="editModePen" v-if="isLoggedIn">
              <i class="fas fa-pencil-alt editModePen__tool"></i>
            </div>
      </div>

      <div class="ContactsBlock__element ContactsBlock__email">
        <i class="far fa-envelope"></i>
        {{this.$store.state.contacts.email}}
        <div class="editModePen" v-if="isLoggedIn">
              <i class="fas fa-pencil-alt editModePen__tool"></i>
            </div>
      </div>

      <div class="ContactsBlock__element ContactsBlock__phone">
        <i class="fas fa-phone-volume"></i>
        {{this.$store.state.contacts.phone}}
        <div class="editModePen" v-if="isLoggedIn">
          <i class="fas fa-pencil-alt editModePen__tool"></i>
        </div>
      </div>

    </div>
    <div class="hr"></div>
    <!--  -->



    <div class="SidebarBlock" v-bind:key="block._id" v-for="block in this.$store.state.sidebar_blocks">
      <div class="SidebarBlock__title">
        <i v-bind:class="block.titleIcon"></i>
        {{block.title}}
        <div class="editModePen" v-if="isLoggedIn">
          <i class="fas fa-pencil-alt editModePen__tool"></i>
          <i class="fas fa-times editModePen__tool editModePen__tool-cross"></i>
        </div>
      </div>

      <div class="SidebarBlock__SubBlocks">

        <div class="SubBlock" v-bind:key="subblock._id" v-for="subblock in block.subBlocks">
          <div class="SubBlock__title">
            {{subblock.title}}
            <div class="editModePen" v-if="isLoggedIn">
              <i class="fas fa-pencil-alt editModePen__tool"></i>
            </div>
          </div>
          <div class="SubBlock__progressBar">
            <div class="progressBar__filler" v-bind:style="{ width: subblock.progress }">
              {{subblock.progress}}
            </div>
          </div>
        </div>

      </div>
    </div>




  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {

    }
  },
    computed:{
      isLoggedIn: function () {
        return this.$store.state.key;
      }
  },
}
</script>

<style scoped>
.Sidebar{
  width: 33.333%;
  box-shadow: 0px 0px 30px 5px rgb(199, 199, 199);
}
.Sidebar__imageContainer{
  position: relative;
  background-color: #fff;
  max-width: 100%;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.Sidebar__imageContainer img{
  max-width: 100%;
  max-height: 100%;
}
.Sidebar__imageContainer:hover .imageContainer__mask{
  opacity: 1;
}
.imageContainer__mask{
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  background: #2fa06d33;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 200ms ease-in-out 0s;
}
.imageContainer__mask i{
  font-size: 40px;
  color: #eee;
  cursor: pointer;
  transition: transform 100ms linear 0s;
}
.imageContainer__mask i:hover{
  transform: scale(1.2);
}
.imageContainer__myname{
  font-size: 32px;
  position: absolute;
  color: #eee;
  bottom: 10%;
  left: 10%;
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: italic;
}
.ContactsBlock{
  width: 100%;
}
.ContactsBlock__element{
  font-size: 20px;
  padding: 5px;
  margin: 10px 0;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.editModePen{
  opacity: 0;
  transition: opacity 100ms linear 0s;
  cursor: pointer;
  margin-left: 5px;
  border-bottom: 2px solid #2fa06d;
  padding: 2px 0;
}
.editModePen .editModePen__tool{
  cursor: pointer;
}
.editModePen__tool:hover{
  transform: scale(1.1);
}
.editModePen .editModePen__tool-cross{
  color: red;
  margin-left: 1px;
  font-size: 25px;
}
.SubBlock__title:hover .editModePen,
.SidebarBlock__title:hover .editModePen,
.ContactsBlock__element:hover .editModePen{
  opacity: 1;
}
.SidebarBlock__title i,
.ContactsBlock__element i{
  display: inline-block;
  margin: 0 15px;
  font-size: 25px;
  color: #2fa06d;
}
.ContactsBlock__status{
  padding: 20px 25px;
  font-style: italic;
  font-weight: 700;
  text-align: center;
}
.hr{
  width: 90%;
  margin: auto;
  height: 1px;
  box-shadow: 0px 4px 2px rgba(51, 51, 51, 0.397);
  margin-top: 10px;
  margin-bottom: 30px;
}


.SidebarBlock{
  width: 100%;
  padding-top: 20px;
  margin-bottom: 30px;
}
.SidebarBlock__title{
  width: 100%;
  padding-left: 30px;
  text-align: left;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title__icon{
  margin-left: 10px;
  margin-right: 20px;
  font-size: 30px;
}
.SidebarBlock__SubBlocks{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.SubBlock{
  width: 100%;
  padding: 15px;
}
.SubBlock__title{
  font-size: 20px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.SubBlock__title i{
  display: inline-block;
  margin-left: 10px;
  font-size: 25px;
  color: #2fa06d;
}
.SubBlock__progressBar{
  width: 90%;
  margin: auto;
  background: rgb(184, 184, 184);
  border-radius: 25px;
}
.progressBar__filler{
  font-size: 18px;
  max-width: 100%;
  background: #2fa06d;
  color: #eee;
  border-radius: 25px;
  height: 100%;
  padding: 5px 0;

  animation-name: FillerOnPageLoad;
  animation-duration: 600ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
}
@keyframes FillerOnPageLoad {
  0%{
    opacity: 0;
    width: 0;
  }
  50%{
    opacity: 0.3;
  }
  100%{
    opacity: 1;
  }
}
</style>

