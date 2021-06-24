<template>
  <div class="detail-bottom-bar">
    <div class="bottom-left">
      <div class="left-info">
        <i class="icon icon1"></i>
        <div>客服</div>
      </div>
      <div class="left-info">
        <i class="icon icon2"></i>
        <div>店铺</div>
      </div>
      <div class="left-info">
        <i class="icon icon3"></i>
        <div>收藏</div>
      </div>
    </div>
    <div class="bottom-cart" @click="cartClick">加入购物车</div>
    <div class="bottom-buy">购买</div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      cartClick(){
        //利用事件总线发送点击事件
        this.$emit('addToCart');
      }
    }
  }
</script>

<style scoped>
  .detail-bottom-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 15px;
  }
  .bottom-left {
    flex: 1;
    display: flex;
    background-color: #fff;
  }
  .left-info {
    flex: 1;
  }
  .icon {
    display: block;
    width: 22px;
    height: 22px;
    /*精灵图进行缩放操作，一半缩放2倍，宽度高度设置为原来精灵图尺寸大小的1/2，为了不让精灵图变形，高度应该设置为自适应auto  默认background-position为0 0  后面需要修改时在对应地方进行修改*/
    background: url(../../../assets/img/detail/detail_bottom.png) 0 0/22px auto;
    margin: 5px auto -15px;
  }
  .icon1 {
    background-position: 0 -54px;
  }
  .icon2 {
    background-position: 0 -100px;
  }
  .bottom-cart {
    width: 25%;
    background-color: yellow;
  }
  .bottom-buy {
    width: 25%;
    color: #fff;
    background-color: var(--color-tint);
  }
</style>
