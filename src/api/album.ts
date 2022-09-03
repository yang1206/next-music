import request from '@/service'
export const getAlbumDetail = (id: number | string) => {
  return request({
    url: '/api/album',
    method: 'GET',
    data: {
      id
    }
  })
}
