import request from '@/utils/request'

export function fetchApplies() {
  return request({
    url: '/vue-admin-template/applies/index/list',
    method: 'get'
  })
}
