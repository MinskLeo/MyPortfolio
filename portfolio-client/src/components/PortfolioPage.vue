<template>
  <div class="container">
    <router-link to="/admin">Go to Login</router-link>
    <Sidebar></Sidebar>
    <Contentpart></Contentpart>
  </div>
</template>
<script>
  import Sidebar from "./Sidebar";
  import Contentpart from "./Contentpart";
  import ax from '../axios-common'


export default {
  name: 'PortfolioPage',
  data(){
    return {
      contacts: null,
      sidebarBlocks: null,
      contentpartBlocks: null
    }
  },
  components: {
    Sidebar,
    Contentpart
  },
  methods: {
    getContactsInfo () {
      ax.get('/contactsInfo', { })
      .then( (result) => {
        if(result.data){
          this.$store.commit('updateContactsInfo',result.data);
        }
      })
      .catch( (error) => {
        this.$store.state.methods.ErrorLoger(error);
      });
    },
    getSidebarBlocks () {
      ax.get('/sidebarBlocks', { })
      .then( (result) => {
        if(result.data){
          this.$store.commit('updateSidebarBlocks',result.data);
        }
      })
      .catch( (error) => {
        this.$store.state.methods.ErrorLoger(error);
      });
    },
    getContentpartBlocks () {
      ax.get('/contentpartBlocks', { })
      .then( (result) => {
        if(result.data){
          this.$store.commit('updateContentpartBlocks',result.data);
        }
      })
      .catch( (error) => {
        this.$store.state.methods.ErrorLoger(error);
      });
    }
  },
  created() {
    this.getContactsInfo();
    this.getSidebarBlocks();
    this.getContentpartBlocks();
  }
}
</script>

<style>
.container{
  width: 1300px;
  min-height: 100px;
  margin-top: 20px;
  /* background: rgb(216, 216, 216); */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 100px;
}
</style>
