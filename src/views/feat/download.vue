<template>
  <div class="container">
    <div class="handle-box">
      <el-button type="primary" @click="exportXlsx">导出Excel表格</el-button>
    </div>
    <el-table class="table" border :data="tableData">
      <el-table-column
        prop="id"
        label="ID"
        width="55"
        align="center"
      ></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="sno" label="学号"></el-table-column>
      <el-table-column prop="class" label="班级"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import * as XLSX from 'xlsx'
import { ref } from 'vue'

interface TableItem {
  id: number
  name: string
  sno: string
  class: string
  age: string
  sex: string
}

const tableData = ref<TableItem[]>([])

const getData = () => {
  tableData.value = [
    {
      id: 1,
      name: '小明',
      sno: 'S001',
      class: '一班',
      age: '10',
      sex: '男',
    },
    {
      id: 2,
      name: '小红',
      sno: 'S002',
      class: '一班',
      age: '9',
      sex: '女',
    },
    {
      id: 3,
      name: '小北',
      sno: 'S003',
      class: '一班',
      age: '9',
      sex: '女',
    },
    {
      id: 4,
      name: '小红',
      sno: 'S004',
      class: '一班',
      age: '9',
      sex: '女',
    },
    {
      id: 5,
      name: '小红',
      sno: 'S005',
      class: '一班',
      age: '9',
      sex: '女',
    },
  ]
}
getData()

// 表头
const list = [['序号', '姓名', '学号', '班级', '年龄', '性别']]
const exportXlsx = () => {
  tableData.value.map((item: any, index: number) => {
    const arr: any[] = [index + 1]
    arr.push(...[item.name, item.sno, item.class, item.age, item.sex]) //拼接成一行数据
    list.push(arr)
  })

  // 生成工作表：aoa_to_sheet按行主序遍历“数组的数组”
  const WorkSheet = XLSX.utils.aoa_to_sheet(list)
  // 生成工作簿
  const new_workbook = XLSX.utils.book_new()
  // 将工作表放入工作簿当中，并命名工作表为'第一页'
  XLSX.utils.book_append_sheet(new_workbook, WorkSheet, '第一页')
  // 提示用户下载文件
  XLSX.writeFile(new_workbook, `表格.xlsx`)
}
</script>

<style lang="scss">
.container {
  .handle-box {
  }
  .table {
    margin-top: 20px;
  }
}
</style>
