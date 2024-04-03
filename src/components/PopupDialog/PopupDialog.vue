<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  left:{
    type:Number,
    default:0
  },
  top:{
    type:Number,
    default:0
  },
  header:{
    type:Object,
    default:() => ({})
  },
  content:{
    type:Object,
    default:() => ({})
  }
})
defineOptions({
  name: 'PopupDialog'
})
</script>
<template>
  <div id="container" v-drag :style="{left:`${left}px`, top: `${top}px`}">
    <div class="header" :style="header">
      <div>{{ title }}</div>
      <img src="../../assets/close.svg" alt="关闭" @click="$emit('close')">
    </div>
    <div class="content" :style="content">
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
  width: 300px;
  height: 500px;
  position: fixed;
  z-index: 3000;
  left: 100px;
  top: 100px;
  background-color: rgba(136, 136, 136, 0.1);

  .header {
    width: 100%;
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

  .content {
    width: 100%;
    height: 500px;
  }
}
</style>