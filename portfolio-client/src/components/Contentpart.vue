<template>
  <div class="Contentpart">
    <div class="BlockLarge" v-bind:key="block._id" v-for="block in this.$store.state.contentpart_blocks">

      <p class="BlockLarge__title"><i v-bind:class="block.titleIcon"></i>{{block.title}}</p>
      <div v-bind:key="subblock._id" class="ContentPartBlockSmall" v-for="(subblock) in block.subBlocks">
        <p class="ContentPartBlockSmall__element ContentPartBlockSmall__title">{{subblock.title}}</p>
        <p class="ContentPartBlockSmall__element ContentPartBlockSmall__date">
          <i class="far fa-calendar-alt date__icon"></i>
          <span class="date__dateString">{{subblock.date}}</span>
          <span class="date__current" v-if="subblock.current">Current</span>
        </p>
        <p class="ContentPartBlockSmall__element ContentPartBlockSmall__text">{{subblock.text}}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Contentpart',
  data () {
    return {

    }
  }
}

</script>
<style scoped>
.Contentpart{
  width: 66.666%;
  /* padding: 0 10px; */
  padding-left: 20px;
}

.BlockLarge{
  width: 100%;
  padding: 20px;
  padding-left: 50px;
  background: #fff;
  box-shadow: 0 0 2px rgb(199, 199, 199);
  margin: 20px 0;
}
.BlockLarge:first-child{
  margin-top: 0;
}
.BlockLarge__title{
  font-size: 30px;
  text-align: left;
  margin: 20px 0;
  
}
.BlockLarge__title i{
  color: #2fa06d;
  margin-right: 15px;
}
.ContentPartBlockSmall{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px 0;
  margin-left: 20px;
}
.ContentPartBlockSmall__element{
  margin: 8px 0;
}
.ContentPartBlockSmall__title{
  font-size: 20px;
  font-weight: bold;
}
.ContentPartBlockSmall__date{
  margin-bottom: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.date__dateString{
  text-decoration: underline;
}
.date__icon{
  font-size: 25px;
  margin-right: 10px;
  color: #2fa06d;
}
.date__current{
  padding: 5px 12px;
  background: #2fa06d;
  color: #eee;
  border-radius: 4px;
  margin-left: 20px;
}
.ContentPartBlockSmall__text{
  font-size: 1.1rem;
  font-weight: 300;
}
</style>

