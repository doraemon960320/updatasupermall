import {request} from './request'

//1.请求网页多个数据
export function getMultiData(){
  return request({
    url:'/home/multidata'
  })
}
//2.获取商品首页数据，传入类别和页码
export function getHomeGoods(type,page){
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
