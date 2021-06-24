export default {
  //mutations中执行的方法比较唯一
  addCounter(state,payload){
    payload.count++;
  },
  addToCart(state,payload){
    payload.checked = true;
    state.cartList.push(payload);
  }
}
