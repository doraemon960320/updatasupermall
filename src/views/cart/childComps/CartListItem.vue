<template>
  <div class="cart-list-item">
    <div class="check-button"
         :class="{check:product.checked}"
         @click="checkClick">
      <img src="../../../assets/img/cart/tick.svg" alt="">
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-info">
      <div class="info-detail">
        <div class="title">{{product.title}}</div>
        <div class="desc">{{product.desc}}</div>
      </div>
      <div class="item-detail">
        <div class="price">￥{{product.price}}</div>
        <div class="count">x{{product.count}}</div>
      </div>
    </div>
    </div>
</template>

<script>
  export default {
    name: "CartListItem",
    props: {
      product:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      checkClick(){
        this.product.checked = !this.product.checked;
      }
    }
  }
</script>

<style scoped>
  .cart-list-item {
    display: flex;
    padding: 10px 5px;
    border-bottom: 1px solid #ccc;
  }
  .check-button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 40px;
    border: 2px solid #aaa;
  }
  .check-button img {
    vertical-align: center;
  }
 .item-img img {
   display: block;
   width: 80px;
   height: 100px;
   border-radius: 5px;
}
 .item-info {
   overflow: hidden;
   margin-left: 10px;
 }
 .info-detail {
   margin-top: 15px;
 }
  .title,.desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 5px;
  }
  .title {
    font-weight: 700;
    font-size: 20px;
  }
  .desc {
    font-size: 16px;
  }
  .item-detail {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .price {
    color: var(--color-tint);
    font-size: 18px;
  }
  .check {
    border: 2px solid var(--color-tint);
    background-color: var(--color-tint);
  }
</style>
