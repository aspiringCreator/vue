<!--
 * @Author: your name
 * @Date: 2021-11-15 10:32:57
 * @LastEditTime: 2021-11-15 15:53:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\todos\todos.vue
-->
<template>
 <div class="todoapp">
      <todosHeader :list="list" @creat="cretefn"></todosHeader>
      <todosMain :arr="showArr" @del="deletefn" ></todosMain>
      <todosFooter :sum="showArr" @changType="typeFn" @clear="clearF"></todosFooter>
 </div>
</template>

<script>
//  * 1.创建工程-准备相关组件文件-标签-样式（静态）
//  * 1.0样式引入
import "../style/base.css";
import "../style/index.css";
//    1.1组件引入
import todosHeader from './todo/todosHerder';
import todosMain from './todo/todosMain';
import todosFooter from './todo/todosFooter'
export default {
    // 1.2组件注册
    components: {
        todosHeader,
        todosMain,
        todosFooter
    },
    // 2.0 准备数据
    data () {
        return {
            list: JSON.parse(localStorage.getItem('todoList'))||[],
        //   6.4先中转接收字符串
        getSel:'all'
        
        }
    },
    methods: {
        //添加任务
        cretefn(tesk){
            //3.3 push到数组
            let id = this.list.length==0?100:this.list[this.list.length-1].id+1
            this.list.push({
                id:id,
                name:tesk,
                isDone:false
            })

        },
        //删除任务
        deletefn(id){
            // this.list=this.list.filter(function (item) { //去掉state为2的数据
            //      return item.id !== id;
            // })
            let index = this.list.findIndex(obj=>obj.id===id)
            // console.log(index);
            this.list.splice(index,1)
        },
        //筛选
        typeFn(str){
            this.getSel=str
        },
        clearF(){
           this.list=this.list.filter(obj=>obj.isDone!=true)
        },
      
    },
    // 定义showArr数组，通过list配合筛选数组
    computed: {
        showArr(){
            if(this.getSel==='yes'){
                return this.list.filter(obj=>obj.isDone===true)
            }else if(this.getSel==='no'){
                 return this.list.filter(obj=>obj.isDone===false)
            }else{
                return this.list
            }
        }
    },
    //8.目标 数据缓存
     watch: {
        //newVal最新值
        //oldVal上一刻的值
        list:{
            handler(){
            //    8.0只要list变化-覆盖式保存到localStorage里
            localStorage.setItem('todoList',JSON.stringify(this.list))
            },
            deep:true,
            
        }
    }

}
</script>