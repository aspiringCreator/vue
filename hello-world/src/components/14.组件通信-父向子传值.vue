<!--
 * @Author: your name
 * @Date: 2021-11-12 12:25:01
 * @LastEditTime: 2021-11-12 12:49:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\14.组件的使用.vue
-->
<template>
  <div>
       <myJiage title="口水鸡1" num="20" intro="开业大酬宾1"></myJiage>
       <myJiage title="口水鸡2" num="200" intro="开业大酬宾2"></myJiage>
       <myJiage title="口水鸡3" num="2" :intro="num"></myJiage>
  </div>
</template>

<script>
import myJiage from './myJiage.vue'
export default {
  data () {
    return {
      num:'开业大酬宾哈哈哈哈哈哈哈'  
    }
  },
  // 目标 父组件向子组件传值
  // 需求：每次组件显示不同信息
  // 步骤（口诀）
  // 1. 子组件 - props  - 变量  - 准备接收
  //2.  父组件 - 传值进去
    components: {
        myJiage:myJiage
    }
}
</script>

<style>

</style>