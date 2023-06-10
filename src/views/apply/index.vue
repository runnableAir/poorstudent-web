<template>
  <div class="apply-index-container">
    <h3 class="title">申请入口列表</h3>
    <el-table
      v-loading="listLoading"
      :data="tableData"
    >
      <el-table-column
        prop="opTime"
        label="开放时间"
        width="180"
      />
      <el-table-column
        prop="edTime"
        label="截止时间"
        width="180"
      />
      <el-table-column
        prop="title"
        label="标题"
      />
      <el-table-column
        prop="createUser"
        label="创建人"
        width="150"
      />
      <el-table-column
        label="状态"
        align="center"
        width="130"
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
          <el-button type="primary" size="small" @click="openDetail(row)">详情</el-button>
          <el-button type="primary" size="small" @click="openApplyForm">申请</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :visible="detailDialogVisible"
      :title="openTitle"
      :before-close="handleClose"
    >
      <div class="detailContent">
        通 知<br>
        请各位同学注意，为配合学校贫困生的认定工作，切实把我院贫困生的工作落实到位，如有意向申请下年度贫困生的同学，请在暑假放假回家的时候按要求准备好相关材料。<br>

        申请贫困生所需准备的材料：<br>

        一、家庭所在地乡（镇）或街道办事处民政部门加盖公章的《经济．．．．<br>

        困难家庭学生情况调查表》注：<br>

        （1）所交表格为一式两份，必须要原件<br>

        （2）所需表格在学院网可下载且用黑笔填写，信息要填写完整<br>

        （3）所盖得章上必须为民政局的章或者社会事务办的章，有民．政两个字，人民政府的签章一律不合格 ．<br>

        二、如家中还有以下特殊情况，请按要求准备好相关材料（以下材

        料均一式两份）：

        （1）农村特困户和城镇低保户

        印证材料：特困证或低保证复印件

        （2）孤儿、残疾人及单亲家庭

        印证材料：乡镇政府或街道办事处出具的孤儿、残疾证明或相关复印件

        （3）家庭成员患有重大疾病或受灾的家庭

        印证材料：医院的诊断证明或病历复印件及家庭受灾后的相关证明复印件

      </div>
    </el-dialog>

    <el-dialog
      :visible="applyFormDialogVisible"
      title="申请表单"
      :before-close="() => applyFormDialogVisible = false"
    >
      <div class="apply-form">
        <el-form ref="form" :model="form" label-width="100px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="学校" :rules="[{ required: true, message: '请输入学校名称', trigger: 'blur' }]">
                <el-input v-model="form.school" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="学院" :rules="[{ required: true, message: '请输入学院名称', trigger: 'blur' }]">
                <el-input v-model="form.college" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="班级" :rules="[{ required: true, message: '请输入班级名称', trigger: 'blur' }]">
            <el-input v-model="form.class" />
          </el-form-item>
          <el-form-item label="学号" :rules="[{ required: true, message: '请输入学号名称', trigger: 'blur' }]">
            <el-input v-model="form.studentId" />
          </el-form-item>
          <el-form-item label="姓名" :rules="[{ required: true, message: '请输入姓名名称', trigger: 'blur' }]">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.gender">
              <el-radio label="男">男</el-radio>
              <el-radio label="女">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.phone" />
          </el-form-item>
          <el-form-item label="证明材料">
            <el-upload
              class="upload-demo"
              action="/upload"
              :on-success="handleSuccess"
              :file-list="fileList"
              :before-upload="beforeUpload"
              :on-exceed="handleExceed"
              :limit="1"
              :show-file-list="false"
            >
              <el-button slot="trigger" size="small" type="primary">上传文件</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2M</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">提交申请</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>

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
      tableData: [
        {
          opTime: '2023-04-01 10:00:00',
          edTime: '2023-05-01 24:00:00',
          title: '2023-2024学年test贫困生申请test',
          createUser: 'test',
          status: '进行中'
        },
        {
          opTime: '2022-09-01 10:00:00',
          edTime: '2022-11-01 24:00:00',
          title: '2022-2023学年贫困生申请',
          createUser: 'admin',
          status: '结束'
        }
      ],
      listLoading: false,
      detailDialogVisible: false,
      applyFormDialogVisible: false,
      openTitle: '',
      form: {
        school: '',
        college: '',
        class: '',
        studentId: '',
        name: '',
        gender: '男',
        phone: ''
      }
    }
  },
  created() {
  },
  methods: {
    handleClose() {
      this.detailDialogVisible = false
    },
    openDetail(row) {
      this.detailDialogVisible = true
      this.openTitle = row.title
    },
    openApplyForm() {
      this.applyFormDialogVisible = true
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传文件只能是 JPG/PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传文件大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleSuccess(response, file, fileList) {
      this.$message.success('上传成功')
      this.fileList = fileList.slice(-1)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`只能上传一个文件`)
    },
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 提交表单
        } else {
          this.$message.error('表单验证失败')
        }
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
