<template>
    <div class="main-tab-bar">
      <tab-bar>
        <tab-bar-item link="/home">
          <img src="../../../assets/img/tabbar/home.svg" alt="" slot="icon-img">
          <img src="../../../assets/img/tabbar/home_active.svg" alt="" slot="icon-img-active">
          <div slot="icon-text">首页</div>
        </tab-bar-item>
        <tab-bar-item link="/category">
          <img src="../../../assets/img/tabbar/category.svg" alt="" slot="icon-img">
          <img src="../../../assets/img/tabbar/category_active.svg" alt="" slot="icon-img-active">
          <div slot="icon-text">分类</div>
        </tab-bar-item>
        <tab-bar-item link="/cart">
          <img src="../../../assets/img/tabbar/cart.svg" alt="" slot="icon-img">
          <img src="../../../assets/img/tabbar/cart_active.svg" alt="" slot="icon-img-active">
          <div slot="icon-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item link="profile">
          <img src="../../../assets/img/tabbar/profile.svg" alt="" slot="icon-img">
          <img src="../../../assets/img/tabbar/profile_active.svg" alt="" slot="icon-img-active">
          <div slot="icon-text">我的</div>
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>
  import TabBar from "../tabbar/TabBar";
  import TabBarItem from "../tabbar/TabBarItem";
    export default {
        name: "MainTabBar",
      components: {
        TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
