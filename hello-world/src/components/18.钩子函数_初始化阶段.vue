<!--
 * @Author: your name
 * @Date: 2021-11-15 17:58:58
 * @LastEditTime: 2021-12-03 15:27:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\18.钩子函数_初始化阶段.vue
-->
<template>
  <div>
    <div>{{msg}}</div>
    <div id="myDiv"></div>
    <ul
      id="ul"
      v-if="ul"
    >
      <li
        v-for="(item,index) in list"
        :key="index"
      >{{item}}</li>
    </ul>
    <button @click="list.push('新加的')">按钮</button>
    <button @click="ul=false">销毁ul</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ul: true,
      msg: "hello",
      list: ["a", "b", "c"],
    };
  },
  // 1.初始化
  // new Vue()以后内部给实例对象添加了一些属性和方法  data和methods之前
  beforeCreate() {
    console.log("执行1");
    console.log(this.msg);
  },
  //data 和 methods 初始化以后
  created() {
    console.log("执行2");
    console.log(this.msg);
  },

  // 二.挂载
  // 真实dom挂载之前
  // 场景预处理data，不会触发updated钩子函数
  beforeMount() {
    console.log("beforeMount-------执行");
    console.log(document.getElementById("myDiv"));
  },
  // 真实dom挂载之后能拿到标签
  //  场景 ：挂载后的真实dom
  mounted() {
    console.log(document.getElementById("myDiv"));
  },

  // 三.更新
  //前提改变才更新
  //更新之前
  beforeUpdate() {
    console.log("beforeUpdate----执行");
    console.log(document.querySelectorAll("#ul>li")[3]);
  },
  //更新之后
  //获取更新之后的真实dom
  updated() {
    console.log("updated----执行");
    console.log(document.querySelectorAll("#ul>li")[3]);
  },
  // 四.销毁
  // 前提： v-if="false"  销毁Vue实例
  //场景:移除全局事件 ，移除当前组件，计时器，定时器，eventBus移出事件$off方法
  beforeDestroy() {
    console.log("beforeDestroy-----执行");
  },

  destroyed() {
    console.log("destroyed-----执行");
  },
};
</script>

<style>
</style>