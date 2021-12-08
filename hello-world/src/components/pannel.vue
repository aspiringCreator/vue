<!--
 * @Author: your name
 * @Date: 2021-11-12 10:42:40
 * @LastEditTime: 2021-11-12 10:56:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\pannel.vue
-->
<template>
  <div >
      
     <div class="box">
          <div class="title">芙蓉楼送新件</div>
      <span class="btn" @click="flag=!flag">{{flag?'收起':'展开'}}</span>
     </div>
      <div class="container" v-if="flag">
          <p>寒雨连江夜入吴</p>
          <p>寒雨连江夜入吴</p>
          <p>寒雨连江夜入吴</p>
          <p>寒雨连江夜入吴</p>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            flag:false
        }
    }
}
</script>

<style  scoped>

    .box{
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
    }
    .container{
        width: 100%;
        border: 1px solid #ccc;
    }
    
</style>>

