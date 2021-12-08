 <!--
 * @Author: your name
 * @Date: 2021-11-01 22:05:55
 * @LastEditTime: 2021-11-12 10:27:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\HelloWorld.vue
-->
<template>
<div>
      <span @click="revers" v-for="(item,index) in list" :key="index">{{item}}</span>
      <div @click="spliceBtn">数组截取</div>
      <div @click="sliceBtn">数组截取不会更新</div>
      <div @click="set">更新一个值</div>
</div>
 
</template>

<script>
export default {
  data () {
    return {
      list:[5,7,5,2,4]
    }
  },
  methods: {
    revers:function(){
      //数组方法reverse 会导致v-for更新
      this.list.reverse()
      console.log(1);
    },
    sliceBtn:function(){
      // 数组slice方法不会造成for更新
      // slice不会改变原数组
      // 解决：加个变量接收
      // this.list.slice(0,3)
      this.list=this.list.slice(1,3)//在本例中，我们将提取从位置 1到位置 3 的所有字符：
    },
    spliceBtn:function(){
     
      this.list.splice(0,3)//第几个开始截取  截取几个
    },
    set:function(){
       //更新某个值的时候 v-for是监听不到的
      //this.list[0]=1000

      //解决-this.$set()
      //参数1 更新目标结果
      //参数2 更新位置
      //参数3 更新值
      this.$set(this.list,0,100)
    }
    // push()
    // pop()
    // shift()
    // unshift()
    // splice()
    // sort()
    // reverse() 会造成数组更新
    
    // map()
    // forEach()
    // filter()
    // concat()
    // slice()   不会造成
  }
}
</script>

<style lang="less">
  
</style>