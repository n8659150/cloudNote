import request from '@/helpers/request'
const URL = {
    REGISTER:'/auth/register',
    LOGIN:'/auth/login',
    LOGOUT:'/auth/logout',
    GET_INFO:'/auth'
}

export default {
    async register(username,password){
        try {
            let res = await request(URL.REGISTER,'POST',{username,password})
            return res
          } 
          catch(e) {
            console.log(e)
          }
    },
    async login(username,password){
        try {
            let res = await request(URL.LOGIN,'POST',{username,password})
            return res
          } 
          catch(e) {
            console.log(e)
          }
    },
    async logout(){
        try {
            let res = await request(URL.LOGOUT)
            return res
          } 
          catch(e) {
            console.log(e)
          }
    },
    async isUserLogin(){
        try {
            let res = await request(URL.GET_INFO)
            return res
          } 
          catch(e) {
            console.log(e)
          }
    }
}