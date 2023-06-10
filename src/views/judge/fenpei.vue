<template>
  <div class="app-container">
    <el-card>
      <div slot="header">
        <span>评议任务分配</span>
        <el-button style="float: right" type="primary" size="small" @click="handleAdd">新增评议小组</el-button>
      </div>
      <div class="search-bar" style="margin-bottom: 18px">
        <el-input v-model="searchText" style="width: 180px" placeholder="请输入搜索关键字" />
        <el-select v-model="searchType" style="width: 80px" placeholder="请选择搜索类型">
          <el-option label="姓名" value="name" />
          <el-option label="学号" value="studentId" />
          <el-option label="手机号" value="phone" />
        </el-select>
        <el-button type="primary">搜索</el-button>
        <el-select v-model="filter" style="margin-left: 8px" placeholder="请选择筛选条件">
          <el-option label="全部" value="" />
          <el-option label="已分配" value="assigned" />
          <el-option label="未分配" value="unassigned" />
        </el-select>
        <el-button>重置</el-button>
        <el-button type="primary">统一分配</el-button>
      </div>
      <el-table :data="list" style="width: 100%">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column prop="createTime" label="提交时间" />
        <el-table-column prop="studentId" label="学号" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="phone" label="手机号" />
        <el-table-column prop="groupName" label="所分配小组名称" min-width="130" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              v-if="!scope.row.groupName"
              type="primary"
              size="small"
              @click="handleAssign(scope.row)"
            >分配</el-button>
            <el-button v-else type="text" size="small">已分配</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="新增评议小组" :visible.sync="dialogVisible" :before-close="handleCloseDialog">
      <el-form :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="组长">
          <el-input v-model="form.leader" />
        </el-form-item>
        <el-form-item label="部门">
          <el-input v-model="form.department" />
        </el-form-item>
        <el-form-item label="小组成员">
          <el-table :data="form.members" style="width: 100%">
            <el-table-column prop="userId" label="用户ID" />
            <el-table-column prop="nickname" label="昵称" />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="danger" size="small" @click="handleDeleteMember(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button type="primary" size="small" @click="handleAddMember">新增成员</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSave">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { createTime: '2023-05-28', studentId: '1001', name: '胡涵涵', phone: '13812345678', userId: '111', department: '计科19-1', groupName: '2023-2024计科19-1' },
        { createTime: '2023-05-27', studentId: '1002', name: '易梧桐', phone: '13912345678', userId: '109', department: '大数据20-1', groupName: '2023-2024大数据20-1' },
        { createTime: '2023-05-26', studentId: '1003', name: '周柔静', phone: '13712345678', userId: '112', department: '土木19-1', groupName: '2023-2024土木19-1' },
        { createTime: '2023-05-25', studentId: '1004', name: '曹珍瑞', phone: '13612345678', userId: '167', department: '大数据19-4', groupName: '2023-2024大数据19-4' },
        { createTime: '2023-05-24', studentId: '1005', name: '刘端雅', phone: '13512345678', userId: '189', department: '计科19-5', groupName: '' }], searchType: 'studentId', searchText: '', filter: '', dialogVisible: false, form: { name: '', leader: '', department: '', members: [] }
    }
  },
  methods: {
    handleAssign(row) {
      console.log('分配评议小组', row)
      this.dialogVisible = true
    },
    handleCloseDialog(done) {
      this.$confirm('确认关闭？').then(_ => {
        done()
      }).catch(_ => {

      })
    },
    handleAddMember() {
      this.form.members.push({})
    },
    handleDeleteMember(index) {
      this.form.members.splice(index, 1)
    }, handleSave() {
      console.log('保存评议小组', this.form)
      this.dialogVisible = false
    }
  }
} </script>
