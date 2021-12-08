<!--
 * @Author: your name
 * @Date: 2021-12-01 11:23:42
 * @LastEditTime: 2021-12-08 10:34:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\19.axios使用.vue
-->
<template>
  <div>
    <h3> 1.获取信息</h3>
    <button @click="fn">获取数据</button>

  </div>
</template>

<script>
import axios from "axios";
// 全局配置
// axios.defaults.baseURL='http://....'
export default {
  data() {
    return {};
  },
  methods: {
    fn() {
      axios({
        url: "api/getbooks",
        methods: "GET", //默认get方式可以不传参
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      //   this.$axios.get('/getbooks').then(response => {
      //         console.log(response);
      //     }).catch(err => {
      //         alert('请求失败')
      //     })
    },
  },
};
</script>

<style>
</style>