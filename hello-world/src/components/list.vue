<!--
 * @Author: your name
 * @Date: 2021-11-12 15:13:12
 * @LastEditTime: 2021-11-12 17:13:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\list.vue
-->

<template>
  <div class="box">
     <div v-for="(item,index) in arr" :key="index">
         <span>{{item.title}}</span> &nbsp;&nbsp;&nbsp;&nbsp;
         <span>{{item.num}}</span>
     </div>
  </div>
</template>

<script>
import eventBus from '../EventBus'
// 目标 跨组件传值
// 1.引入空白vue对象（EventBus)
// 2.接收方 -  $on(监听事件)
export default {
    props: ['arr'],
    // 3. 组件创建完毕，监听send事件
    created(){
        eventBus.$on('send',(index,num)=>{
              this.arr[index].num>1&&(this.arr[index].num = (this.arr[index].num-num).toFixed(2))
        })
    }
}
</script>

<style lang="less" scoped>
    // .box{
    //     width: 30%;
    //     padding: 20px;
    //     margin: auto;
    //     margin-bottom: 10px;
    //     border: 10px solid rebeccapurple;
    // }
</style>