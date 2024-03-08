<script setup>
import PopupDialog from "./PopupDialog/index.js";
import {ref} from "vue";
let show1 = ref(false)
let show2 = ref(false)
let show3 = ref(false)

function handleShowEvent1(){
  show1.value = !show1.value
}
function handleShowEvent2(){
  show2.value = !show2.value
}
function handleShowEvent3(){
  show3.value = !show3.value
}
</script>

<template>
  <button @click.stop="handleShowEvent1">第一个</button>
  <button @click.stop="handleShowEvent2">第二个</button>
  <button @click.stop="handleShowEvent3">第三个</button>
  <PopupDialog v-if="show1">
    <div style="background-color: blue">1111111111</div>
  </PopupDialog>
  <PopupDialog v-if="show2">
    <div style="background-color: red">222222222222222222222</div>
  </PopupDialog>
  <PopupDialog v-if="show3">
    <div style="background-color: antiquewhite">3333333333333333333333333333</div>
  </PopupDialog>
</template>

<style scoped>
</style>
