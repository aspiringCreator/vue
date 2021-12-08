<!--
 * @Author: your name
 * @Date: 2021-11-15 10:33:54
 * @LastEditTime: 2021-11-15 15:00:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\todos\todo\todosFooter.vue
-->
<template>
  <footer class="footer">
      <!-- 5.0 数量计算 -->
    <span class="todo-count">剩余<strong>{{num}}</strong></span>
    <ul class="filters" @click="fn">
      <li>
          <!-- 6.1判断谁该有高亮
          6.2用户点击切换isAll里报错的值 -->
        <a :class="{selected:isAll==='all'}" href="javascript:;" @click="isAll='all'">全部</a>
      </li>
      <li>
        <a :class="{selected:isAll==='no'}" href="javascript:;" @click="isAll='no'">未完成</a>
      </li>
      <li>
        <a :class="{selected:isAll==='yes'}" href="javascript:;" @click="isAll='yes'">已完成</a>
      </li>
    </ul>
    <!-- 7.清除已完成 -->
    <button class="clear-completed" @click="clearFn">清除已完成</button>
  </footer>
</template>

<script>
export default {
    props: ['sum'],
    // 5.1 复习计算属性 
    computed:{
        num(){
            return this.sum.length
        }
    },
    // 6.目标点亮
    // 6.0 变量isAll
    data () {
        return {
            isAll:'all'
        }
    },
    methods: {
        fn(){//切换筛选条件
            //6.3子传父 把类型传给父亲
            this.$emit('changType',this.isAll)
        },
        clearFn(){
            //7.1触发父组件的clear事件
            this.$emit('clear')
        }
    }
}
</script>