import axios from "axios";
//封装网络请求
export function request(config) {
  return new Promise((resolve, reject) => {
    //1.创建axios的实例
    const instance1 = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout: 5000
    })

    //2. axios拦截器 axios.interceptors全局拦截 此时为实例拦截
    // instance1.interceptors.request.use(俩个参数，成功时拦截，失败时拦截)  请求拦截
    instance1.interceptors.request.use(config => {
      console.log(config);  //请求成功时拦截
      return config         //拦截后需要返回出去，不然请求时会请求不到！！！
    }),err => {
      console.log(err);  //请求失败时拦截
      //为什么要拦截呢
      //1、比如请求到的res中的信息不符合服务器要求

      //2、比如每次发送网络请求时，都希望在界面中显示一个请求的图标
     // 比如请求的过程中有个圈再转 show出来 请求成功时在消失

      //3.某些网络请求(比如登录(token))，必须携带一些特殊信息

      //二. instance1.interceptors.response.use(俩个参数，) 响应拦截
      instance1.interceptors.response.use(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
    }

    //3.发送真正的网络请求
    instance1(config)
    .then(res => {
     resolve(res)
    })
    .catch(err => {
     reject(err)
    })
    //此时用then/catch是因为本身就是个Promise
  })
}


//第二个网络ip请求 最优雅的封装调用
// export function request1(config) {
//   const instance2 = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:10000
//   })
//   return instance2(config)  //直接返回时是因为后台为promise
// }
