<!--
 * @Author: your name
 * @Date: 2021-11-11 14:10:29
 * @LastEditTime: 2021-11-11 14:36:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\9.小选框影响全选.vue
-->
<template>
    <div>
        <span>全选</span>
        <input type="checkbox" v-model="isAll">
        <button @click="fn">反选</button>
        <div v-for="(item,index) in list" :key="index">
            <input type="checkbox" v-model="item.flag">
            <span>{{item.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
            //目标小选框--》全选
            list:[
                {"name":'张安',"flag":false},
                {"name":'张安',"flag":false},
                {"name":'张安',"flag":false},
            ]
        }
    },
    computed: {
        isAll:{
            set(val){
                this.list.forEach(obj=> obj.flag=val );
            },
            get(){
            //every口诀 查找数组里面不符合条件 直接原地返回false
            return  this.list.every(obj=>obj.flag===true)
            }
        }
    },
    methods: {
        fn(){
            this.list.forEach(obj=>obj.flag=!obj.flag)
        }
    }
}
</script>

<style>

</style>