<!--
 * @Author: your name
 * @Date: 2021-11-11 12:18:08
 * @LastEditTime: 2021-11-11 12:24:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\5.计算属性.vue
-->
<template>
  <div>{{num}}</div>
</template>

<script>
export default {
    data () {
        return {
            a:10,
            b:20
        }
    },
    //计算属性场景：
    // 当一个变量的值需要用另外的变量计算得来
    // 语法computed:{
    //     计算属性名(){
    //         return 值
    //     }
    // }
    //注意 计算属性和data属性都是变量名  不能重名

    //计算属性特点 函数内使用变量改变，重新计算结果返回
    computed: {
        num(){
            return this.a+this.b
        }
    }
}
</script>

<style>

</style>