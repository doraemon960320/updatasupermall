<template>
  <div class="profile">
    <div class="profile-title">
      <div class="title-img">
        <img src="../../assets/img/profile/my.svg" alt="">
      </div>
      <div class="title-text">
        <div class="login">登录/注册</div>
        <img src="../../assets/img/profile/phone.svg" alt="">
        <span class="phone-number">暂无绑定手机号</span>
      </div>
      <div class="more-than">&gt;</div>
    </div>
    <div class="profile-detail">
      <div class="detail">
      <div><span class="number">0.00</span>元</div>
      <div>我的余额</div>
      </div>
      <div class="detail">
        <div><span class="number">0</span>个</div>
        <div>我的优惠</div>
      </div>
      <div class="detail">
        <div><span class="number">0</span>分</div>
        <div>我的积分</div>
      </div>
    </div>
    <div class="profile-list">
      <div class="list-item">
        <img src="../../assets/img/profile/message.svg" alt="">
        我的消息
      </div>
      <div class="list-item">
        <img src="../../assets/img/profile/jifen.svg" alt="">
        我的积分
      </div>
      <div class="list-item">
        <img src="../../assets/img/profile/huiyuan.svg" alt="">
        会员卡
      </div>
      <div class="list-item">
        <img src="../../assets/img/profile/cart.svg" alt="">
        我的购物车
      </div>
      <div class="list-item">
        <img src="../../assets/img/profile/download.svg" alt="">
        下载购物APP
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>
  .profile {
    background-color: #eee;
  }
 .profile-title {
   position: relative;
   height: 150px;
   background-color: var(--color-high-text);
   box-shadow: 0 10px 10px rgba(0,0,0,0.1);
   display: flex;
   color: #fff;
 }
 .title-img {
   position: absolute;
   top: 60px;
   left: 20px;
   width: 50px;
   height: 50px;
   line-height: 50px;
   background-color: #ccc;
   border-radius: 50%;

 }
 .title-img img {
   width: 50px;
   height: 50px;
   vertical-align: middle;
 }
 .title-text {
   position: absolute;
   top: 65px;
   left: 100px;
 }
 .title-text img {
   width: 20px;
   height: 20px;
   vertical-align: middle;
 }
 .login {
   font-size: 20px;
   margin-bottom: 10px;
 }
 .phone-number {
   font-size: 15px;
   margin-left: 5px;
 }
 .more-than {
   position: absolute;
   right: 10px;
   top: 80px;
   font-size: 30px;
 }
  .profile-detail {
    height: 100px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: #333;
    background-color: #fff;
  }
  .number {
    color: red;
    font-size: 25px;
    font-weight: 700;
  }
  .detail {
   align-items: center;
    margin-top: 25px;
  }
  .profile-list {
    margin-top: 10px;
    height: 300px;
    background-color: #fff;
  }
  .list-item {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    padding: 0 10px;
    color: #333;
  }
  .list-item img {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
</style>
