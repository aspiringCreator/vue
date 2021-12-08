/*
 * @Author: your name
 * @Date: 2021-11-01 22:05:55
 * @LastEditTime: 2021-12-01 12:24:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\main.js
 */
import { valHooks } from 'jquery'
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import axios from 'axios'
// step2：把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
// 不需要每次都 import一下 axios了，直接使用 $axios 即可
Vue.prototype.$axios = axios

// step3：使每次请求都会带一个 /api 前缀 
axios.defaults.baseURL = '/api'

// Vue.config.productionTip = false
// Vue.prototype.HOST='/api'
// 方式1 全局 过滤器
// 任意.vue文件内直接使用
//  语法 Vue.filter('过滤器名'，'值' => 处理后的结果)
Vue.filter('reverse',val => val.split('').reverse().join(''))

Vue.filter('reverse2',(val,a )=> val.split('').reverse().join(a))
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app') 

// import Vue from 'vue' //引入vue对象 类似<script src='script.js'>
// import App from './App.vue' //App.vue 文件里对象引入过来(vue项目入口)

// Vue.config.productionTip = false //在控制台有一句提示消息

// new Vue({//开始实例化Vue
//   render: h => h(App),//准备渲染App页面
// }).$mount('#app')// 渲染到index.htnl文件里面id叫app的标签中