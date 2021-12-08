<!--
 * @Author: your name
 * @Date: 2021-11-11 14:46:23
 * @LastEditTime: 2021-11-11 14:51:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\10.侦听器_watch.vue
-->
<template>
    <input type="text" v-model="num">
</template>

<script>
export default {
    data () {
        return {
            num:''
        }
    },
    //目标 监听num属性的改变
    /*
        语法
        wacth:{
            变量名(newVal,oldVal){
                
            }
        }
    */
    watch: {
        //newVal最新值
        //oldVal上一刻的值
        num(newVal,oldVal){
            console.log(newVal,oldVal);
        }
    }
}
</script>

<style>

</style>