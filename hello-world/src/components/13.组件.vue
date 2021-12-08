
<!--
 * @Author: your name
 * @Date: 2021-11-12 10:42:40
 * @LastEditTime: 2021-11-12 11:30:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\pannel.vue
-->
<template>
  <div id="app">
      <h1>案例折叠面板</h1>
     <pannel></pannel>
     <pannel></pannel>
     <pannel></pannel>
  </div>
</template>

<script>
import pannel from './pannel.vue'
export default {
  components: {
      pannel:pannel
  }
}
// 遇到重复标签想复用
//     封装成组件
// 组建的好处
//     各自独立 复用
// 组件是什么
//     可复用的vue实例 封装标签，样式，js
//什么时候封装组件？
//      遇到重复标签，可复用的时候
//组件的好处
//      各自独立，互不影响 

// 注册全局组件  - main.js中  语法
// import 组件对象 from 'vue文件路径'
// Vue.component('组件名',组件对象)
</script>

<style lang="less" scoped>
    #app{
        width: 30%;
        margin: auto;
        border: 10px solid springgreen;
  
    }
</style>>

