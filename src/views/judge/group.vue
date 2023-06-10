<template>
  <div class="app-container">
    <el-row>
      <el-col :span="8">
        <el-input v-model="searchText" placeholder="请输入搜索内容" />
      </el-col>
      <el-col :span="8">
        <el-select v-model="searchType" placeholder="请选择搜索类型">
          <el-option label="创建人" value="creator" />
          <el-option label="名称" value="name" />
        </el-select>
        <el-button type="primary" style="margin-left: 5px">搜索</el-button>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" @click="handleAdd">新增</el-button>
        <el-button type="danger" @click="handleDeleteBatch">批量删除</el-button>
      </el-col>
    </el-row>
    <el-table :data="list" style="margin-top: 20px">
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="creator" label="创建人" />
      <el-table-column prop="leader" label="组长" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="department" label="部门" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增弹窗 -->
    <el-dialog title="新增评议小组" :visible.sync="dialogVisible" :before-close="handleCloseDialog">
      <el-form :model="form" label-width="100px">
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
        { createTime: '2023-05-28', creator: 'admin', leader: '丁俊美', name: '评议小组1', department: '土木20-1' },
        { createTime: '2023-05-27', creator: 'admin', leader: '谷鸿博', name: '评议小组2', department: '计科19-1' },
        { createTime: '2023-05-26', creator: 'admin', leader: '禄博文', name: '评议小组3', department: '大数据20-1' }
      ],
      searchText: '',
      searchType: 'creator',
      dialogVisible: false,
      form: {
        name: '',
        leader: '',
        department: '',
        members: []
      }
    }
  },
  methods: {
    handleAdd() {
      this.dialogVisible = true
    },
    handleCloseDialog(done) {
      if (done) {
        // 处理表单验证和保存逻辑
      } else {
        this.form = {
          name: '',
          leader: '',
          department: '',
          members: []
        }
      }
    },
    handleAddMember() {
      this.form.members.push({
        userId: '',
        nickname: ''
      })
    },
    handleDeleteMember(index) {
      this.form.members.splice(index, 1)
    },
    handleSave() {
      // 处理保存逻辑
      this.dialogVisible = false
    },
    handleEdit(row) {
      // 处理编辑逻辑
    },
    handleDelete(row) {
      // 处理删除逻辑
    },
    handleDeleteBatch() {
      // 处理批量删除逻辑
    }
  }
}
</script>
