<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control ref="tabControl1"
                 class="home-tab-control"
                 :titles="['流行','新款','精选']"
                 @tabClick="itemClick"
                 v-show="isFixed"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probeType="3"
            :pullUpLoad="true"
            @scroll="scrollPosition"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"
                   @imageLoad="imageLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view></feature-view>
      <tab-control ref="tabControl2"
                   :titles="['流行','新款','精选']"
                   @tabClick="itemClick"></tab-control>
      <good-list :goods="showList"></good-list>
    </scroll>
    <back-top class="back-top"
              v-show="isShow"
              @click.native="backClick"></back-top>
  </div>
</template>

<script>
  //引入公共组件
  import NavBar from "../../components/common/navbar/NavBar"
  import TabControl from "../../components/content/tabcontrol/TabControl"
  import GoodList from "../../components/content/goods/GoodList"
  import Scroll from "../../components/common/scroll/Scroll"
  import BackTop from "../../components/common/backtop/BackTop"
  //引入子组件
  import HomeSwiper from "./childComps/HomeSwiper"
  import HomeRecommend from "./childComps/HomeRecommend"
  import FeatureView from "./childComps/FeatureView"
  //引入方法
  import {getMultiData,getHomeGoods} from "../../network/home"

  export default {
    name: "Home",
     components: {
       NavBar,
       TabControl,
       GoodList,
       Scroll,
       BackTop,
       HomeSwiper,
       HomeRecommend,
       FeatureView
     },
    data(){
      return {
        banners: [],
        recommends: [],
        titles: [],
        goods: {
          'pop':{page:0,list:[]},
          'new':{page: 0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType: 'pop',
        isShow: false,
        tabOffset: 0,
        isFixed: false,

      }
    },
    created(){
      //组件一创建完就开始发送网络请求，所以在created()中调用网络请求相关方法
      //1.获取多个商品数据
      this.getMultiData();

      //2.获取不同商品类型数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    computed:{
      showList(){
        return this.goods[this.currentType].list;
      }
    },
    mounted(){
      this.$bus.$on('imgLoad',()=>{
        //作用：重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
        this.$refs.scroll.refresh();
      })
    },
    methods: {
      //1.监听事件
      //1.1 点击对应的tab-control 下面显示对应的good-list-item图片
      itemClick(index){
        switch(index){
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      //1.2 点击返回到顶部的图片，直接跳转到顶部
      backClick(){
        // console.log('返回顶部');
        this.$refs.scroll.scrollTo(0,0,500);
      },
      imageLoad(){
        this.tabOffset = this.$refs.tabControl2.$el.offsetTop;
      },
      scrollPosition(position){
        this.isShow = Math.abs(position.y) > 1000;
        this.isFixed = Math.abs(position.y) > this.tabOffset;
      },
      loadMore(){
        this.getHomeGoods(this.currentType);
      },
      //2.方法中的事件
      getMultiData(){
        getMultiData().then(res=>{
          //异步操作
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        })
      }
    }
  }
</script>

<style scoped>
 #home {
   position: relative;
   height: 100vh;
 }
 .nav-bar {
   position: relative;
   z-index: 1;
   color: #fff;
   font-size: 18px;
   text-align: center;
   background-color: var(--color-high-text);
 }
  .content {
    height: calc(100% - 49px);
    overflow: hidden;
  }
  .back-top {
    position: absolute;
    bottom: 50px;
    right: 20px;
  }
  .home-tab-control {
    position: relative;
    z-index: 1;
    background-color: #fff;
  }
</style>
