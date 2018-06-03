<template>
  <div class="Sidebar">
    <div class="Sidebar__imageContainer">
      <img v-bind:src="this.$store.state.contacts.image" alt="null">
      <p class="imageContainer__myname">{{this.$store.state.contacts.name}}</p>
    </div>
    <div class="ContactsBlock">
      <p class="ContactsBlock__element ContactsBlock__status">
        {{this.$store.state.contacts.status}}
      </p>

      <div class="hr"></div>

      <p class="ContactsBlock__element ContactsBlock__specialization">
        <i class="fas fa-briefcase"></i>
        {{this.$store.state.contacts.specialization}}
      </p>

      <p class="ContactsBlock__element ContactsBlock__address">
        <i class="far fa-building"></i>
        {{this.$store.state.contacts.address}}
      </p>

      <p class="ContactsBlock__element ContactsBlock__email">
        <i class="far fa-envelope"></i>
        {{this.$store.state.contacts.email}}
      </p>

      <p class="ContactsBlock__element ContactsBlock__phone">
        <i class="fas fa-phone-volume"></i>
        {{this.$store.state.contacts.phone}}
      </p>

    </div>
    <div class="hr"></div>
    <!--  -->



    <div class="SidebarBlock" v-bind:key="block._id" v-for="block in this.$store.state.sidebar_blocks">
      <p class="SidebarBlock__title">
        <i v-bind:class="block.titleIcon"></i>
        {{block.title}}
      </p>

      <div class="SidebarBlock__SubBlocks">

        <div class="SubBlock" v-bind:key="subblock._id" v-for="subblock in block.subBlocks">
          <p class="SubBlock__title">{{subblock.title}}</p>
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
  }
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
}
</style>

