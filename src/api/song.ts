import type { Song } from './interface'
import request from '@/service'
export const getSongDetail = (data: Song.SongDetail) => {
  return request({
    url: '/api/song/detail',
    method: 'GET',
    data,
  })
}

export const getLyricData = (data: { id: number }) => {
  return request({
    url: '/api/lyric',
    method: 'GET',
    data,
  })
}

// 相似歌曲
export const getSongSimi = (data: { id: number }) => {
  return request({
    url: '/api/simi/song',
    method: 'GET',
    data,
  })
}

// 检查音乐是否可用
export const checkMusic = (data: { id: number }) => {
  return request({
    url: '/api/check/music',
    method: 'GET',
    data,
  })
}

// 获取热门评论
export const getHotCommentData = (data: { id: number; type: number }) => {
  return request({
    url: '/api/comment/hot',
    method: 'GET',
    data,
  })
}

// 获取歌曲评论
export const getSongComment = (id: number, limit = 20, offset: number) => {
  return request({
    url: '/api/comment/music',
    method: 'GET',
    data: { id, limit, offset, timestamp: new Date().getTime() },
  })
}
// 点赞
/* cid : 评论 id
t : 是否点赞 ,1 为点赞 ,0 为取消点赞 */
export function sendLikeComment(id: number, cid: number, t: number) {
  return request({
    url: '/api/comment/like',
    data: {
      id,
      cid,
      t,
      type: 0,
    },
  })
}

// 评论歌曲
export function sendSongComment(id: any, content: any) {
  return request({
    url: '/api/comment',
    data: {
      t: 1, // 发送
      type: 0, // 歌曲类型
      id,
      content,
      timestamp: new Date().getTime(),
    },
  })
}
