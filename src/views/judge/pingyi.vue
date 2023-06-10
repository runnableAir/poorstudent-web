<template>
  <div class="app-container">
    <el-table :data="list">
      <el-table-column prop="createTime" label="提交时间" />
      <el-table-column prop="studentId" label="学号" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="phone" label="手机号" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleDetail(scope.row)">详情</el-button>
          <el-dropdown v-if="!scope.row.voted " trigger="click">
            <span class="el-dropdown-link vote-btn">
              {{ scope.row.voteResult || '投票' }}
              <i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click="handleVote(scope.row, '赞成')">赞成</el-dropdown-item>
              <el-dropdown-item @click="handleVote(scope.row, '反对')">反对</el-dropdown-item>
              <el-dropdown-item @click="handleVote(scope.row, '弃权')">弃权</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button v-else type="text" size="small" :disabled="true" class="vote-btn">{{ scope.row.voteResult }}</el-button>
        </template>
      </el-table-column>
    </el-table>
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
          studentId: '20220101',
          name: '郑夏寒',
          phone: '13887898873',
          voted: false, // 是否已投票
          voteResult: '' // 投票结果
        },
        {
          id: 2,
          createTime: '2023-04-03 18:00:00',
          studentId: '20220102',
          name: '廖寻芳',
          phone: '13974648492',
          voted: false,
          voteResult: ''
        },
        {
          id: 3,
          createTime: '2023-05-06 18:00:00',
          studentId: '20220103',
          name: '夏美芳',
          phone: '13873645631',
          voted: true,
          voteResult: '赞成'
        },
        {
          id: 1,
          createTime: '2023-04-01 10:00:00',
          studentId: '20230001',
          name: '徐幻梅',
          phone: '13198537321',
          voted: false, // 是否已投票
          voteResult: '' // 投票结果
        },
        {
          id: 2,
          createTime: '2023-04-02 10:00:00',
          studentId: '20230002',
          name: '彭歌玲',
          phone: '13909746351',
          voted: false,
          voteResult: ''
        },
        {
          id: 3,
          createTime: '2023-04-03 10:00:00',
          studentId: '20230003',
          name: '张宁夏',
          phone: '13746452431',
          voted: true,
          voteResult: '赞成'
        },
        {
          id: 4,
          createTime: '2023-04-04 10:00:00',
          studentId: '20230004',
          name: '熊艺萍',
          phone: '13587589282',
          voted: true,
          voteResult: '反对'
        },
        {
          id: 5,
          createTime: '2023-04-05 10:00:00',
          studentId: '20230005',
          name: '邓悠柔',
          phone: '13792828391',
          voted: true,
          voteResult: '弃权'
        },
        {
          id: 6,
          createTime: '2023-05-01 10:00:00',
          studentId: '20230006',
          name: '董宵雨',
          phone: '13993837363',
          voted: false,
          voteResult: ''
        }
      ]
    }
  },
  methods: {
    handleDetail(row) {
      console.log('查看申请记录详情', row)
    },
    handleVote(row, result) {
      console.log('投票', row, result)
      this.$confirm(`是否确定选择${result}？`)
        .then(_ => {
          row.voted = true
          row.voteResult = result
        })
        .catch(_ => {})
    }
  }
}
</script>
<style>
.el-dropdown {
  margin-left: 10px;
}
.vote-btn {
  color: #409EFF;
  padding: 6px;
}
</style>
