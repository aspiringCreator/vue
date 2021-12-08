<!--
 * @Author: your name
 * @Date: 2021-11-11 10:12:13
 * @LastEditTime: 2021-11-11 10:33:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\过滤器.vue
-->
<template>
  <div>
      <p>原来的样子{{msg}}</p>
      <!-- 过滤器的使用 -->
      <!-- 语法：{{值 | 过滤器名字}}  |   管道符 -->
      <p>过滤之后的样子：{{msg|reverse}}</p>
      <p>局部定义过滤器：{{msg | toUp }}</p>
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