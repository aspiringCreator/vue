<!--
 * @Author: your name
 * @Date: 2021-11-11 15:38:11
 * @LastEditTime: 2021-11-12 10:29:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\src\components\12.品牌管理_数据缓存.vue
-->
<template>
  <div>
      <el-table
    :data="tableData"
    style="width: 40%;margin:auto"
    max-height="1500px">
      <el-table-column
      prop="zip"
      label="id"
      width="120">
    </el-table-column>
    <el-table-column
     
      label="日期"
      width="150">
      <template slot-scope="scope">
        {{scope.row.date|formtData}}
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="年龄"
      width="120">
    </el-table-column>
    <el-table-column
     
      label="操作"
      >
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>

  </el-table>
  <div class="box" v-if="tableData.length!==0"><span>总和：{{total}}</span><span>平均值：{{mean}}</span></div>
 <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="姓名">
    <el-input v-model="formInline.user" placeholder="姓名"></el-input>
  </el-form-item>
  <el-form-item label="年龄">
     <el-input v-model.number="formInline.region" placeholder="年龄"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">添加</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
   //目标 过滤时间转成yyyy-mm-dd
   //添加数据
   //计算总和和平均值
   //监听list改变 同步到本地localStorage里
   //侦听器侦听list 
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        
        tableData: JSON.parse(localStorage.getItem('ptableData'))||[]
      }
    },
      methods: {
      onSubmit() {
       
        var arr={}
        arr.zip=this.tableData.length ==0?1:(this.tableData[this.tableData.length-1].zip)+1
        arr.name=this.formInline.user
        arr.province=this.formInline.region
        arr.data=new Date()
        if(this.formInline.user==''||this.formInline.region==''){
            alert('填写信息')
        }else{
        this.tableData.push(arr)
        this.formInline.user=''
        this.formInline.region=''
        }
      
      },
       deleteRow(index, rows) {
        rows.splice(index, 1);
      },
    
    },
      filters:{
           formtData(val){
        return moment(val).format('YYYY-MM-DD')
      },
        
      },
      computed: {
         total(){
            return this.tableData.reduce((sum,obj)=>sum+=obj.province,0 )
         },
        mean(){
            return this.total/this.tableData.length
        } 
      },
      watch: {
        tableData: {
            handler(){
                //数据改变存入到本地
                localStorage.setItem('ptableData',JSON.stringify(this.tableData))
            },
            deep:true
        } 
      }
  }
</script>
<style lang="less" scoped>
.box{
  background: red;
  width: 50%;
  margin: auto;
  span{
    background: #f2f;
  }
}
</style>