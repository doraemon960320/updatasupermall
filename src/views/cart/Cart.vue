<template>
  <div class="cart">
     <!--购物车导航-->
    <nav-bar class="nav-bar">
      <div class="cart-title" slot="center">购物车({{$store.state.cartList.length}})</div>
    </nav-bar>
     <!--商品列表-->
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
     <!--底部工具栏封装-->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  //引入公共组件
  import NavBar from "../../components/common/navbar/NavBar"
  import Scroll from '../../components/common/scroll/Scroll'

  //引入子组件
  import CartList from './childComps/CartList'
  import CartBottomBar from "./childComps/CartBottomBar"
  export default {
    name: "Cart",
    components: {
      NavBar,
      Scroll,
      CartList,
      CartBottomBar
    },
    activated() {
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
  .nav-bar {
    background-color: var(--color-high-text);
    text-align: center;
    color: #fff;
    font-size: 18px;
  }
</style>
