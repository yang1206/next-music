import type { SongList } from './interface'
import request from 'src/service'
export const getSongListDetail = (data: SongList.SongListDetail) => {
  return request({
    url: '/app/playlist/detail',
    method: 'GET',
    data,
  })
}

// TODO上面的歌单接口只能获取十首，这个接口登陆后可以获取全部接口
export const getSongListAll = (data: SongList.SongListDetail) => {
  return request({
    url: '/app/playlist/track/all',
    method: 'GET',
    data,
  })
}

export function getSongCategory() {
  return request({
    url: '/app/playlist/catlist',
    method: 'GET',
  })
}

export function getSongCategoryList(cat = '全部', offset = 0, limit = 35) {
  return request({
    url: '/app/top/playlist',
    method: 'GET',
    data: {
      cat,
      limit,
      offset,
    },
  })
}
