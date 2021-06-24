import {request} from './request'

//1.1 获取详情页数据，获取传入的iid
export function getDetail(iid){
  return request({
    url:'/detail/',
    params: {
      iid
    }
  })
}
//1.2 请求推荐数据
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

//2.1 把详情页的东西封装成一个类，方便存取，组件开发的过程中面向这一个对象就可以了
export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns=columns;
    this.services = services;
  }
}

//2.2 店铺详情也封装到一个类里面
export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.sells = shopInfo.cSells;
    this.goodsCount = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}

//2.3 把店铺参数信息封装成一个类
export class GoodsParam {
  constructor(info,rule){
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
