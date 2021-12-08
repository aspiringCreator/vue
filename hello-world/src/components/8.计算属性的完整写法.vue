<!--
 * @Author: your name
 * @Date: 2021-11-11 13:16:31
 * @LastEditTime: 2021-11-11 14:05:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\8.计算属性的完整写法.vue
-->
<template>
  <div>
      <span>姓名</span>
      <input type="text" v-model="full">
  </div>
</template>

<script>
export default {
    //问题：给计算属性赋值  - 需要setter
    // 解决： 完整写法
    /**
     *计算属性名:(){}
     计算属性名：(){
         set(值){

         },
         get(){
             return 值
         }
     }
     *  **/
    computed: {
        full:{
            set(val){
                console.log(val);
            },
            get(){
                return '无名氏'
            }
        }
    }
}
</script>

<style>

</style>