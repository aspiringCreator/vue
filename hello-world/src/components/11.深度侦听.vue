<!--
 * @Author: your name
 * @Date: 2021-11-11 15:00:12
 * @LastEditTime: 2021-11-11 15:08:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\11.深度侦听.vue
-->

<template>
    <div>
        <input type="text" v-model="num.name">
    <input type="text" v-model="num.age">
    </div>
</template>

<script>
export default {
    data () {
        return {
            num:{'name':'张三','age':'0'}
        }
    },
    //目标 监听num属性的改变
    /*
        语法
        wacth:{
            变量名(newVal,oldVal){
                
            }
        }


    深度侦听
        语法
        wacth：{
            变量名:{
                handler(newVal,oldVal){

                },
                deep：true //深度侦听（对象里面的值改变）
                immediate:true //立即侦听
            }
        }
    */
    // watch: {
    //     //newVal最新值
    //     //oldVal上一刻的值
    //     num(newVal,oldVal){
    //         console.log(newVal,oldVal);
    //     }
    // }
      watch: {
        //newVal最新值
        //oldVal上一刻的值
        num:{
            handler(newVal,oldVal){
                console.log(newVal,oldVal);
            },
            deep:true,
            immediate:true
        }
    }
}
</script>

<style>

</style>