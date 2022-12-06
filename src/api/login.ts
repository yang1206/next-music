import request from '../service'
import type { Login } from './interface'
// 手机号登录
export const gotoPhoneLogin = (data: Login.goPhoneLogin) => {
  return request({
    url: '/app/login/cellphone',
    method: 'GET',
    data,
  })
}

// 邮箱登录
export const gotoEmailLogin = (data: Login.goEmailLogin) => {
  return request({
    url: '/app/login',
    method: 'GET',
    data,
  })
}

// 发送验证码
export const sendRegisterCode = (phone: number) => {
  return request({
    url: '/app/login',
    method: 'GET',
    params: {
      phone,
    },
  })
}

export const sendRegister = (data: Login.Register) => {
  return request({
    url: '/app/login',
    method: 'GET',
    data,
  })
}
