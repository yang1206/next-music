import type { SongList } from './interface'
import request from '@/service'
export const getSongListDetail = (data: SongList.SongListDetail) => {
  return request({
    url: '/api/playlist/detail',
    method: 'GET',
    data,
  })
}

// TODO上面的歌单接口只能获取十首，这个接口登陆后可以获取全部接口
export const getSongListAll = (data: SongList.SongListDetail) => {
  return request({
    url: '/api/playlist/track/all',
    method: 'GET',
    data,
  })
}

export function getSongCategory() {
  return request({
    url: '/api/playlist/catlist',
    method: 'GET',
  })
}

export function getSongCategoryList(cat = '全部', offset = 0, limit = 35) {
  return request({
    url: '/api/top/playlist',
    method: 'GET',
    data: {
      cat,
      limit,
      offset,
    },
  })
}
