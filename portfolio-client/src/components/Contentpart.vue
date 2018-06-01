<template>
  <div class="Contentpart">
    <!-- <h1>Contentpart</h1> -->
    <BlockLarge v-bind:title="'Education'" v-bind:titleIconClass="'fas fa-book'" v-bind:subBlocks="subBlocks"></BlockLarge>
  </div>
</template>

<script>
  import BlockLarge from "./BlockLarge";

export default {
  name: 'Contentpart',
  data () {
    return {
      subBlocks:[
        {
          title: 'Minsk Innovation University',
          date: '2016 - 2020',
          text: 'My first University - Minsk Innovation University. Very good place for everyone',
          current: true,
          id: Math.random()
        },
        {
          title: 'Minsk Innovation University',
          date: '2016 - 2020',
          text: 'My first University - Minsk Innovation University. Very good place for everyone',
          current: false,
          id: Math.random()
        },
      ]
    }
  },
  components: {
    BlockLarge
  }
}

</script>
<style scoped>
.Contentpart{
  width: 66.666%;
  /* padding: 0 10px; */
  padding-left: 20px;
  /* background: green; */
}
</style>

