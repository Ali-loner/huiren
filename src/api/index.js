import request from '@/request'

export function fetchConfigDify(params) {
  return request({
    url: '/api/config/dify',
    method: 'get',
    params
  })
}
// 发消息
export function chatMessages(data) {
  return request({
    url: '/v1/chat-messages',
    method: 'post',
    data
  })
}

// 图表数据
export function sortedSubYitu(params) {
  return request({
    url: '/api/thoughts/dialogue/sortedSubYitu',
    method: 'get',
    params
  })
}

export function fetchOldUserProfile(params) {
  return request({
    url: '/api/user-profile/oldUserProfile',
    method: 'get',
    params
  })
}
export function fetchUser(params) {
  return request({
    url: '/api/user-profile/user',
    method: 'get',
    params
  })
}
