import request from './request'

export const LoginData = (data)=>request({
    url:'login',
    params:data,
    methods:'post',

})