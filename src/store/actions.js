export default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      //payload是新添加的商品
      // this.state.cartList.push(payload);
      //oldProduct是指购物车中已经存在的商品
      let oldProduct = null;
      //1.循环遍历判断购物车中是否添加了已经存在的商品
      for(let item of context.state.cartList){
        //如果购物车中存在新添加的商品
        if(item.iid === payload.iid){
          //那么就将其视为旧商品
          oldProduct = item;
        }
      }
      //2.判断购物车中是否添加已经存在的商品，如果购物车中只有新添加的商品(payload),那么就将payload的数量设置为1,并且将新商品添加到cartList中，如果添加的是购物车中已经存在的商品，那么就将已经存在的商品数量加1
      if(oldProduct){
        context.commit('addCounter',oldProduct);
        resolve('当前商品数量+1');
      }else {
        payload.count = 1;
        context.commit('addToCart',payload);
        resolve('添加新的商品');
      }
    })
  }
}
