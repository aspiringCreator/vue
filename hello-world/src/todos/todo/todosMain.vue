<!--
 * @Author: your name
 * @Date: 2021-11-15 10:33:44
 * @LastEditTime: 2021-11-15 15:35:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\todos\todo\todosMain.vue
-->
<template>
  <ul class="todo-list">
    <!-- 循环数据 关联选中状态 铺设数据 -->
    <!-- completed: 完成的类名 -->
    <li :class={completed:item.isDone} v-for="item in arr" :key="item.id">
      <div class="view" >
        <input class="toggle" type="checkbox" v-model="item.isDone"/>
        <label>{{item.name}}</label>
        <!-- //4.0 注册点击事件 -->
        <button class="destroy" @click="delite(item.id)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
export default {
    //2.1定义props
    props: ['arr'],
    methods: {
        // 删除任务
        // 4.1子传父 
        delite(id){
            this.$emit("del",id)
            // this.arr.splice(id, 1);
        },
       
         
    }
}
</script>