<template>
  <div class="app-container">
    <el-table :data="applyList" style="width: 100%">
      <el-table-column prop="submitDate" label="提交日期" />
      <el-table-column prop="studentNum" label="学号" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="userId" label="提交用户ID" />
      <el-table-column label="证明材料">
        <template slot-scope="scope">
          <el-link :href="scope.row.attachmentUrl">
            <i class="el-icon-download" /> {{ scope.row.attachmentName }}
          </el-link>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleAudit(scope.row)">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      applyList: [
        {
          submitDate: '2023-04-05 14:48:19',
          studentNum: '53901',
          name: '桓玉泽',
          userId: '204',
          attachmentName: '45j-429j-9d.png',
          attachmentUrl: '/uploads/45j-429j-9d.png'
        }
      ]
    }
  },
  methods: {
    handleAudit() {

    },
    handleDetail() {

    }
  }
}
</script>
