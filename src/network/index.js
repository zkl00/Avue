import request from './request'

/***
 * 登录功能
 */
export const LoginData = (data)=>request({
    url:'login',
    params:data,
    methods:'post',
})

/**
 *左侧菜单
 */
 export const menus = ()=>request({
     url:'menus',
     methods:'post'
 })

 /***
  * 用户列表
  */

 export const userList = (data)=>request({
    url:'users',
    params:data,
    methods:'post'
 })