<template>
  <div class="container">
    <Sidebar></Sidebar>
    <Contentpart></Contentpart>
  </div>
</template>
<script>
  import Sidebar from "./Sidebar";
  import Contentpart from "./Contentpart";


export default {
  name: 'PortfolioPage',
  components: {
    Sidebar,
    Contentpart
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
