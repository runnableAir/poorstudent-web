<template>
  <div class="apply-index-container">
    <h3 class="title">申请入口列表</h3>
    <div class="table-container">
      <el-table
        v-loading="listLoading"
        :data="tableData"
        style="width: 1050px"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="240"
        />
        <el-table-column
          prop="title"
          label="标题"
          width="315"
        />
        <el-table-column
          prop="year"
          label="学年"
          width="180"
        />
        <el-table-column
          label="状态"
          width="160"
          align="center"
        >
          <template slot-scope="{row}">
            <el-tag :type="row.status | statusFilter">
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          min-width="150"
        >
          <el-button type="primary" size="small">详情</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { fetchApplies } from '@/api/apply'

export default {
  name: 'Apply',
  filters: {
    statusFilter(status) {
      const statusMap = {
        '进行中': 'success',
        '结束': 'info'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      user: {},
      tableData: [],
      listLoading: false
    }
  },
  created() {
    this.fetchAppliesData()
  },
  methods: {
    fetchAppliesData() {
      this.listLoading = true
      fetchApplies().then(response => {
        this.tableData = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.apply-index-container {
  padding: 32px;
  position: relative;

  .table-container {
    width: fit-content;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    padding: 10px 8px 24px 8px;
  }
}
.title {
  font-weight: 400;
  color: #1f2f3d;
  font-size: 22px;
  font-weight: 400;
}
</style>
