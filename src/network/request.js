import axios from 'axios'

export function request(config){
  //1.创建实例，设置配置默认值
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  //2.拦截器，拦截上面的instance
  //2.1请求拦截
  instance.interceptors.request.use(config=>{
    return config;
  },err=>{
    console.log(err);
  })
  //2.2 响应拦截
  instance.interceptors.response.use(res=>{
    return res.data;
  },error=>{
    console.log(error);
  })

  //3.发送真正的网络请求
  return instance(config)
}

