<!--
 * @Author: your name
 * @Date: 2021-11-12 12:25:20
 * @LastEditTime: 2021-12-03 19:05:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\myJiage.vue
-->
<template>
  <div class="box">
    <div>{{title}}</div>
    <div>价格：{{num}}</div>
    <div>{{intro}}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "num", "intro"], //简单声明接收
  mounted() {
    // console.log(this.list);
  },
  //接收同时对类型进行数据限定
  //   props:{
  //       title:String,
  //       num:Number,
  //       intro:String
  //   },
  //3.限制类型，限制必要性，指定必要值
  //   props:{
  //       title:{
  //           type:String,
  //           required:true,
  //           defauit:'老王'
  //       }
  //   }
  //备注：props是只读的若是业务需求需要修改，那么请复制props的内容到data中一份，然后修改data中的数据
};
</script>

<style lang="less" scoped>
.box {
  width: 30%;
  padding: 20px;
  margin: auto;
  margin-bottom: 10px;
  border: 10px solid rebeccapurple;
}
</style>