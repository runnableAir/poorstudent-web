const indexList = [{
  id: 4,
  date: '2022-09-01 ~ 2022.10.10',
  year: '2022-2023',
  title: '家庭经济困难学生认定2022-2023',
  status: '进行中'
}, {
  id: 3,
  date: '2021-09-01 ~ 2021.10.10',
  year: '2021-2022',
  title: '家庭经济困难学生认定2021-2022',
  status: '结束'
}, {
  id: 2,
  date: '2020-09-01 ~ 2020.10.10',
  year: '2020-2021',
  title: '家庭经济困难学生认定2020-2021',
  status: '结束'
}, {
  id: 1,
  date: '2019-09-01 ~ 2019.10.10',
  year: '2019-2020',
  title: '家庭经济困难学生认定2019-2020',
  status: '结束'
}]

const applyDetails = {
  id: 4,
  title: '家庭经济困难学生认定2022-2023',
  content: '这是申请入口内容详情例子，这里是例子，xxxx家庭经济困难学生认定2022-2023，这是申请入口内容详情例子，这里是例子，这是申请入口内容详情例子，这里是例子，这是申请入口内容详情例子，这里是例子，这是申请入口内容详情例子，这里是例子，这是申请入口内容详情例子，这里是例子',
  year: '2022-2023',
  beginDate: '2022-09-01',
  endDate: '2022.10.10',
  status: '进行中'
}

module.exports = [
  {
    url: '/vue-admin-template/applies/index/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          items: indexList,
          total: indexList.length
        }
      }
    }
  },
  {
    url: '/vue-admin-template/applies/details/(\\d+)',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: applyDetails
      }
    }
  }
]
