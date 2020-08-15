import axios from 'axios'
// import { resolve, reject } from 'core-js/fn/promise'

export default function request(confing){
    console.log(confing)
    return new Promise((resolve,reject)=>{

        // 封装请求地址
        const install = axios.create({
            baseURL:'https://api.naccl.top/vue/shop/api/private/v1/',
            // timeout:5000
        })
        // 请求拦截
        install.interceptors.request.use((confing)=>{
           return  confing
        })

        // 相应拦截
        install.interceptors.response.use((confing)=>{
           return confing.data
        })

        // 发送请求
        install(confing).then((res)=>{
            resolve(res)
        }).catch((error)=>{
            reject(error)
        })
    })
}
