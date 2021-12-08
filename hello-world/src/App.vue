<!--
 * @Author: your name
 * @Date: 2021-11-01 22:05:55
 * @LastEditTime: 2021-12-03 18:36:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\App.vue
-->
<template>
  <div id="app">

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/15.组件通信-配合循环.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
