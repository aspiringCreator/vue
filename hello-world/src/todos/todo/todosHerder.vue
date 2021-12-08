<!--
 * @Author: your name
 * @Date: 2021-11-15 10:33:32
 * @LastEditTime: 2021-11-15 16:16:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\todos\todo\todosHerder.vue
-->
<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" >
    <label for="toggle-all"></label>

    <input
      v-model="tesk"
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="downfn"
    />
  </header>
</template>

<script>
// * 需求: 输入任务敲击回车, 新增待办任务
// 分析： 
// ​	①: TodoHeader.vue – 输入框 – 键盘事件 – 回车按键
// ​	②: 子传父, 把待办任务 – App.vue中 – 加入数组list里
// ​	③: 原数组改变, 所有用到的地方都会更新
// ​	④: 输入框为空, 提示用户必须输入内容

// 3.目标 新增任务
//3.1输入框绑定v-model
export default {
    data () {
        return {
            tesk:''      
        }
    },
    methods: {
        downfn(){
            //3.2（重要）-当前任务名字要加到list数组里
            //子传父技术
           if(this.tesk=="") return
           this.$emit("creat",this.tesk)
           this.tesk=""
        },
        
    },
    // 9.1定义计算属性
    computed: {
            isAll:{ //只有true 和false
            // 9.3影响数组里每个小选框绑定的isDone属性
                set(val){
                    this.list.forEach(obj=> obj.isDone=val );
                },
                get(){
                // 9.4小选框统计状态-》 全选矿
                 //every口诀 查找数组里面不符合条件 直接原地返回false
                  return this.list.length!==0 && this.list.every(obj=>obj.isDone===true)
                }
            }
            
        },
        // 9.2父=》子 list数组
        props: ["list"]
}
</script>