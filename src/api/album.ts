import request from 'src/service'
export const getAlbumDetail = (id: number | string) => {
  return request({
    url: '/app/album',
    method: 'GET',
    data: {
      id,
    },
  })
}
