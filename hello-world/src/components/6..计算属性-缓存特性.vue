<!--
 * @Author: your name
 * @Date: 2021-11-11 12:25:50
 * @LastEditTime: 2021-11-11 12:37:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\6..计算属性-缓存过程.vue
-->
<template>
<div>
  <div>{{ reverseMeg }}</div>
  <div>{{ reverseMeg }}</div>
  <div>{{ reverseMeg }}</div>
  <div>{{ msgs() }}</div>
  <div>{{ msgs() }}</div>
  <div>{{ msgs() }}</div>
</div>


 
</template>

<script>
export default {
    data () {
        return {
            msg:'hello word'      
        }
    },
    /*
        计算属性的优势
        带缓冲
        计算属性对应函数执行后，就会return值缓存起来
        依赖不变。多次调用都是从缓存取值

        依赖项改变，函数就会“自动”重新执行-并缓存新的值
    */ 
    computed:{
        reverseMeg(){
            console.log('计算属性执行了');
            return this.msg.split('').reverse().join('.')
        }
    },
    methods: {
        msgs(){
            console.log('函数执行了');
             return this.msg.split('').reverse().join('.')
        }
    }
}
</script>

<style>

</style>