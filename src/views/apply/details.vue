<template>
  <div class="app-container">
    <el-card style="width: fit-content">
      <div class="apply-details">
        <div class="header-block">
          <span class="apply-title">{{ apply.title }}</span>
          <span class="description">{{ apply.year }}学年 - {{ apply.status }} - 时间: {{ `${apply.beginDate}-${apply.endDate}` }}</span>
        </div>
        <p>
          {{ apply.content }}
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getApplyDetails } from '@/api/apply'

export default {
  name: 'ApplyDetails',
  data() {
    return {
      apply: {}
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    this.fetchApplyDetail(id)
  },
  methods: {
    fetchApplyDetail(id) {
      getApplyDetails(id).then(response => {
        this.apply = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.apply-details {

  .header-block {

    .apply-title,
    .description {
      display: block;
      padding: 4px 0;
    }

    .apply-title {
      font-size: 28px;
      color: #000;
    }

    :after {
      clear: both;
    }

    span {
      font-weight: 500;
      font-size: 18px;
    }
  }

  font-size: 16px;
  width: 987px;
  border-bottom: 1px solid #d2d6de;
  margin-bottom: 15px;
  padding-bottom: 15px;
  color: #666;
}
</style>

