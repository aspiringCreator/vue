<!--
 * @Author: your name
 * @Date: 2021-11-11 10:53:05
 * @LastEditTime: 2021-11-11 12:02:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\4.过滤器案例.vue
-->

 <template>

    <div>
       <div>{{dataTime|formtData}}</div>
      <el-table
      :data="tableData"
      style="width: 50%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
        <template slot-scope="scope">
        {{scope.row.date|formtData}}
      </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        label="地址">
      <template slot-scope="scope">
        {{scope.row.address|reverse('|')}}
      </template>
      </el-table-column>

     <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
      </template>
     </el-table-column>
      </el-table>
      
      <el-row style="width: 50%">
        <el-input  style="width: 50%" v-model="input"  placeholder="请输入内容"></el-input>
        <el-button type="primary">主要按钮</el-button>
      </el-row>
    </div>
     <!-- 创建时间以yyyy-mm-dd格式显示 
      分析
      1.下载moment模块到当前工程
      2.定义过滤器，传入时间，用moment模块格式化，返回我们想要的格式
     -->
  </template>
<!-- 目标处理时间
      下载moment模块
      定义过滤器 编写内部代码 -->
  <script>
    import moment from 'moment'
    export default {
      
      data() {
        return {
          dataTime:new Date('2021-11-01'),
            input: '',
          tableData: [{
            date: new Date('2021-11-01'),
            name: '王小虎',
            address: '上海市普陀区金沙江路 1 518 弄'
          }, {
            date: new Date('2021-11-01'),
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: new Date('2021-11-01'),
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: new Date('2021-11-01'),
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    filters:{
      formtData(val){
        return moment(val).format('YYYY-MM-DD')
      },
      reverse(val,a){
        return val.split('').join(a)
      }
    }
    }
  </script>