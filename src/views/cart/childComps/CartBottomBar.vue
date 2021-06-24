<template>
  <div class="cart-bottom-bar">
    <div class="check-content" @click="checkClick">
      <img src="../../../assets/img/cart/tick.svg" alt=""
           :class="{isCheck:isChecked}">
      <span>全选</span>
    </div>
    <div class="total-price">
      合计:{{totalPrice}}
    </div>
    <div class="calculate">去计算({{checkLength}})</div>
  </div>
</template>

<script>
  export default {
    name: "CartBottomBar",
    methods: {
      checkClick(){
        if(this.isChecked){
          //如果是全选状态，点击下面的全选按钮，就取反，变成全部不选中
          this.$store.state.cartList.forEach(item=>{
            item.checked = false
          })
        }else {
          //如果不是全选状态，点击下面的全选按钮，变成全部选中
          this.$store.state.cartList.forEach(item=>{
            item.checked = true;
          })
        }
      }
    },
    computed:{
      totalPrice(){
        return '￥'+this.$store.state.cartList.filter(item=>{
          return item.checked
        }).reduce((preValue,item)=>{
          return preValue + item.price*item.count;
        },0)
      },
      checkLength(){
        return this.$store.state.cartList.filter(item=>{
          return item.checked
        }).length;
      },
      isChecked(){
        //这里是通过上面是否全部选中控制下面全选按钮，如果上面全部选中，下面全选按钮就选中，如果上面按钮没有全部选中，下面的全选按钮就不选中
        return this.$store.state.cartList.every(item=>{
          return item.checked
        })
      }
    }
  }
</script>

<style scoped>
.cart-bottom-bar {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #333;
}
  .check-content {
    width: 90px;
    margin: 0 10px;
  }
  img {
    border: 2px solid #aaa;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px;
  }
  .total-price {
    flex: 1;
  }
  .calculate {
    width: 90px;
    background-color: orangered;
    color: #fff;
  }
  .isCheck {
    background-color: var(--color-tint);
    border: 2px solid var(--color-tint);
  }
</style>
