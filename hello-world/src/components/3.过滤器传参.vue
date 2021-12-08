<!--
 * @Author: your name
 * @Date: 2021-11-11 10:35:56
 * @LastEditTime: 2021-11-11 10:50:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE 
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\3.过滤器传参.vue
-->

<template>
  <div>
      <p>原来的样子{{msg}}</p>
      <!-- 1.
      给过滤器传值
      语法： vue变量|过滤器(实参) -->
      <p>过滤之后的样子：{{msg|reverse2('|')}}</p>
      <p>局部定义过滤器：{{msg | toUp }}</p>

      <!-- 2.
      多个过滤器使用
      语法：vue变量|过滤器 |过滤器 -->
      <p>局部定义多个过滤器：{{msg | toUp | reverse2('|')}}</p>
  </div>
</template>

<script>
export default {
    data () {
        return {
            msg:'Hello word'
        }
    },
    // 方式2
    // 局部过滤器
    // 只能在当前vue文件中使用

    // 过滤器的作用：处理一个值 返回一个结果

    // 过滤器用法：动态属性 插值表达式
    filters:{
        //把字符转成大写
        toUp(val){
            return val.toUpperCase()
        }
    }
}
</script>

<style>

</style>