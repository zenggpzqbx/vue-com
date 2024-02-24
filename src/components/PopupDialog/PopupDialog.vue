<script setup>
  defineProps({
    title:{
      type:String,
      default:''
    },
    cstyle:{
      type:Object,
      default(){
        return {parent:'', header:'background-color:blue;', content:''}
      }
    }
  })
  defineOptions({
    name:'PopupDialog'
  })
</script>
<template>
  <div id="container" v-drag :style="cstyle.parent">
    <div class="header" :style="cstyle.header">
      <div>{{ title }}</div>
<!--      <img src="../../assets/popupClose.svg" alt="关闭" @click="$emit('close')">-->
    </div>
    <div class="content" :style="cstyle.content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#container {
  width: 200px;
  height: 200px;
  position: fixed;
  z-index: 3000;
  left: 100px;
  top: 100px;
  background-color: rgba(136, 136, 136, 0.1);

  .header {
    height: 30px;
    background-color: #979ef6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: move;
    color: #000;

    & > div {
      padding: 0 5px;
    }

    & img {
      width: 25px;
      cursor: pointer;
    }
  }
  .content{
    width: 100%;

  }
}
</style>