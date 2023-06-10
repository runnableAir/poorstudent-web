<template>
  <div class="app-container">
    <el-card>
      <div slot="header">
        <span>评议投票结果</span>
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
        <el-button type="primary" @click="showModal">一键设定等级</el-button>
      </div>
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="createTime" label="提交时间" width="200" />
        <el-table-column prop="studentId" label="学号" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="phone" label="手机号" />
        <el-table-column prop="votes" label="票数" />
        <el-table-column prop="level" label="评定等级" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              v-if="!scope.row.level"
              type="primary"
              size="small"
              @click="handleAssign(scope.row)"
            >设定等级</el-button>
            <el-button v-else type="text" size="small">已设定</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog :visible.sync="dialogVisible" title="设定候选人数">
      <el-form :model="form" label-width="80px">
        <el-form-item label="特困">
          <el-input-number v-model="form.extreme" :min="0" />
        </el-form-item>
        <el-form-item label="困难">
          <el-input-number v-model="form.hardship" :min="0" />
        </el-form-item>
        <el-form-item label="一般">
          <el-input-number v-model="form.general" :min="0" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="cancelForm">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          createTime: '2023-04-05 10:45:23',
          studentId: '1000',
          name: '郑夏寒',
          phone: '13887898873',
          votes: 8,
          level: '特困'
        },
        {
          id: 2,
          createTime: '2023-04-03 18:00:00',
          studentId: '1001',
          name: '廖寻芳',
          phone: '13974648492',
          votes: 8,
          level: '特困'
        },
        {
          id: 3,
          createTime: '2023-05-06 18:00:00',
          studentId: '1002',
          name: '夏美芳',
          phone: '13873645631',
          votes: 6,
          level: '一般'
        },
        {
          id: 1,
          createTime: '2023-04-01 10:00:00',
          studentId: '1003',
          name: '徐幻梅',
          phone: '13198537321',
          votes: 6,
          level: '一般'
        },
        {
          id: 2,
          createTime: '2023-04-02 10:00:00',
          studentId: '1004',
          name: '彭歌玲',
          phone: '13909746351',
          votes: 6,
          level: '一般'
        },
        {
          id: 3,
          createTime: '2023-04-03 10:00:00',
          studentId: '1005',
          name: '张宁夏',
          phone: '13746452431',
          votes: 6,
          level: '一般'
        },
        {
          id: 4,
          createTime: '2023-04-04 10:00:00',
          studentId: '1006',
          name: '熊艺萍',
          phone: '13587589282',
          votes: 6,
          level: '一般'
        },
        {
          id: 5,
          createTime: '2023-04-05 10:00:00',
          studentId: '1007',
          name: '邓悠柔',
          phone: '13792828391',
          votes: 6,
          level: '一般'
        },
        {
          id: 6,
          createTime: '2023-05-01 10:00:00',
          studentId: '1008',
          name: '董宵雨',
          phone: '13993837363',
          votes: 6,
          level: '一般'
        }
      ],
      form: {
        extreme: 0,
        hardship: 0,
        general: 0
      },
      dialogVisible: false
    }
  },
  methods: {
    showModal() {
      this.dialogVisible = true
    },
    hideModal() {
      this.dialogVisible = false
    },
    submitForm() {
      console.log(`特困：${this.form.extreme}，困难：${this.form.hardship}，一般：${this.form.general}`)
      this.hideModal()
    },
    cancelForm() {
      this.hideModal()
    },
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
