import request from 'src/service'
interface Param {
  keywords: string
  limit: number
  type: string
}
export const getSearch = (data: Param) => {
  return request({
    url: '/app/cloudsearch',
    method: 'GET',
    data,
  })
}
