<!--
 * @Author: your name
 * @Date: 2021-11-12 13:26:40
 * @LastEditTime: 2021-11-12 17:25:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\16.组件通信-单项数据流.vue
-->

<template>
  <div>
    <myJiage
      v-for="(obj,index) in list"
      :key="obj.id"
      :title="obj.title"
      :num="obj.num"
      :intro="obj.intro"
      :index="index"
      @subNum="fn"
    ></myJiage>
    <!-- 每次循环，变量和组件，都是独立的 -->
    <list1 :arr="list"></list1>
  </div>
</template>

<script>
import myJiage from "./myjiage-sub1";
import list from "./list";
export default {
  // 组件通信-EventBus 常常用于跨组件通信时候使用
  //语法：
  //  src/eventBus/index.js - 创建空白Vue对象并导出
  //  要在接收值的组件（list.vue）        eventBus.$on('事件名'，函数体)
  //  在要传递值得组件（myjiage-sub1）    eventBus.$emit('事件名',值)

  data() {
    return {
      list: [
        {
          id: 1,
          title: "口水鸡1",
          num: 31,
          intro: "开业大酬宾1",
        },
        {
          id: 2,
          title: "口水鸡2",
          num: 32,
          intro: "开业大酬宾2",
        },
        {
          id: 3,
          title: "口水鸡3",
          num: 33,
          intro: "开业大酬宾3",
        },
      ],
    };
  },
  components: {
    myJiage: myJiage,
    list1: list,
  },
  methods: {
    fn(index, num) {
      this.list[index].num > 1 &&
        (this.list[index].num = (this.list[index].num - num).toFixed(2));
    },
  },
};
</script>

<style>
</style>