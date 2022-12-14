import request from '../service'
// 登陆后可调用的接口

// 获取用户信息
export const getUserInfo = () => {
  return request({
    url: '/app/user/subcount',
    method: 'GET',
  })
}

// 获取用户等级信息
export const getUserLevel = () => {
  return request({
    url: '/app/user/level',
    method: 'GET',
  })
}
// 获取用户歌单
export const gotoUserSongList = (data: { uid: string }) => {
  return request({
    url: '/app/user/playlist',
    method: 'GET',
    data,
  })
}

// 创建歌单
export const CreateSongList = (data: { name: string }) => {
  return request({
    url: '/app/playlist/create',
    method: 'GET',
    data,
  })
}
// 订阅/取消订阅歌单
export const subscribeSongList = (data: { id: string | number; t: number }) => {
  return request({
    url: '/app/playlist/subscribe',
    method: 'GET',
    data,
  })
}

// 删除歌单
export const deleteSongList = (data: { id: string | number }) => {
  return request({
    url: '/app/playlist/delete',
    method: 'GET',
    data,
  })
}

// 获取vip信息
export const getVipInfo = () => {
  return request({
    url: '/app/vip/info',
    method: 'GET',
  })
}

// 喜欢歌曲
export const likeSong = (data: { id: string | number; like?: boolean }) => {
  return request({
    url: '/app/like',
    method: 'GET',
    data,
  })
}

// 日推歌曲
export const getRecommendSongs = () => {
  return request({
    url: '/app/recommend/songs',
    method: 'GET',
  })
}

// 最近播放的歌曲
export const getRecentdSong = () => {
  return request({
    url: '/app/record/recent/song',
    method: 'GET',
  })
}
