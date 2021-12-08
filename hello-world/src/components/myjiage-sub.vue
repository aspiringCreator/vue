<!--
 * @Author: your name
 * @Date: 2021-11-12 13:24:42
 * @LastEditTime: 2021-11-12 14:15:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\myjiage-sub.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-11-12 12:25:20
 * @LastEditTime: 2021-11-12 13:16:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\myJiage.vue
-->
<template>
  <div class="box">
      <div>{{title}}</div>
      <div>价格：{{num}}</div>
      <div>{{intro}}</div>
      <button @click="subBtn">砍价一元</button>
  </div>
</template>

<script>
export default {
    props: ['index','title','num','intro'],
    methods: {
        //错误：
        //1.子组件改父传入的数据不通知父。数据不一致性
        //2.vue里props 规定”本身“只读的（不允许重新赋值）

        //问 那怎样子组件才能修改父组件里面的数据
        // 1.父组件，@自定义函数名="父methods函数名"
        // 2. 子组件内，恰当的时机触发父给我绑定的自定义事件，导致methods里事件处理函数执行
        // 3.this.$emit()规定方法-主动触发事件
        subBtn:function(){
            //this.num=this.num-1
           this.$emit('subNum',this.index,1)

        }
    }
}
</script>

<style lang="less" scoped>
    .box{
        width: 30%;
        padding: 20px;
        margin: auto;
        margin-bottom: 10px;
        border: 10px solid rebeccapurple;
    }
</style>