<!--
 * @Author: your name
 * @Date: 2021-11-11 12:41:40
 * @LastEditTime: 2021-11-11 13:09:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\7.案例-总价和均价的显示结果.vue
-->
<template>
  <div>
       <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
        
      </el-table-column>
       <el-table-column
        prop="price"
        label="价格">
        
      </el-table-column>
        <el-table-column
        label="操作">
         <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
      </el-table-column>
      
    </el-table>
   <div style="margin-top: 20px">
    <el-button>总价为：{{prices}}</el-button>
    <el-button>平均价为：{{mean}}</el-button>
  </div>
  </div>
  
</template>

<script>
export default {
    data () {
        return {
        input:'',
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            price:99,
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
             price:99,
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
             price:99,
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
             price:99,
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
    },
    //目标 显示总价 和均价
    computed: {
        prices(){
            //求总价
           return this.tableData.reduce((sum,obj)=>sum+=obj.price,0 )
        },
        mean(){
            //求平均值
            return this.prices/this.tableData.length
        }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
       handleClick(row) {
        console.log(row);
      }
    },
}
</script>

<style>

</style>