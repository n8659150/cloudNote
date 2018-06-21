import request from '@/helpers/request'
const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
}

export default {
  async register(username, password) {

    let res = await request(URL.REGISTER, 'POST', { username, password })
    return res

  },
  async login(username, password) {

    let res = await request(URL.LOGIN, 'POST', { username, password })
    return res

  },
  async logout() {

    let res = await request(URL.LOGOUT)
    return res

  },
  async isUserLogin() {

    let res = await request(URL.GET_INFO)
    return res

  }
}