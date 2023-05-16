<template>
  <div class="apply-index-container">
    <h3 class="title">申请列表</h3>
    <div class="table-container">
      <el-table
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
          <template slot-scope="{row}">
            <el-button :type="row.hasApply ? 'info' : 'primary'" size="mini">
              {{ row.hasApply ? '已申请' : '申请' }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
      tableData: [{
        date: '2019-05-01 ~ 2019.06.01',
        year: '2019-2020',
        title: '家庭经济困难学生认定2019-2020',
        status: '进行中',
        hasApply: false
      }, {
        date: '2019-05-01 ~ 2019.06.01',
        year: '2019-2020',
        title: '家庭经济困难学生认定2019-2020',
        status: '结束',
        hasApply: false
      }, {
        date: '2019-05-01 ~ 2019.06.01',
        year: '2019-2020',
        title: '家庭经济困难学生认定2019-2020',
        status: '结束',
        hasApply: true
      }, {
        date: '2019-05-01 ~ 2019.06.01',
        year: '2019-2020',
        title: '家庭经济困难学生认定2019-2020',
        status: '结束',
        hasApply: true
      }]
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        role: this.roles.join(' | '),
        email: 'admin@test.com',
        avatar: this.avatar
      }
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
