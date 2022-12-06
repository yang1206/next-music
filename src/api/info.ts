import request from '@/service'

// 国家地区编码列表
export const getCountriesList = () => {
  return request({
    url: '/app/countries/code/list',
    method: 'GET',
  })
}
