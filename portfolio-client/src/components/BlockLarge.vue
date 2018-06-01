<template>
  <div class="BlockLarge">
    <p class="BlockLarge__title"><i v-bind:class="titleIconClass" style="color: #2fa06d; margin-right: 15px;"></i>{{title}}</p>
    <div v-bind:key="block.id" class="ContentPartBlockSmall" v-for="(block) in subBlocks">
      <p class="ContentPartBlockSmall__element ContentPartBlockSmall__title">{{block.title}}</p>
      <p class="ContentPartBlockSmall__element ContentPartBlockSmall__date">
        <i class="far fa-calendar-alt date__icon"></i>
        <span class="date__dateString">{{block.date}}</span>
        <span class="date__current" v-if="block.current">Current</span>
      </p>
      <p class="ContentPartBlockSmall__element ContentPartBlockSmall__text">{{block.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlockLarge',
  props: {
    title: String,
    titleIconClass: String,
    subBlocks: Array
  }
}
</script>

<style scoped>
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
