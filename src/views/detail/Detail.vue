<template>
  <div class="detail">
    <detail-nav-bar @itemClick="itemClick" ref="nav"></detail-nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="scrollPosition">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"
                         @imgLoad="imgLoad"></detail-goods-info>
      <detail-params-info :params-info="paramsInfo"
                          ref="params"></detail-params-info>
      <detail-comment-info :comment="comment"
                           ref="comment"></detail-comment-info>
      <good-list :goods="recommend"
                 ref="recommend"></good-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top class="back-top"
              v-show="isShow"
              @click.native="backClick"></back-top>
    <toast :message="message" :show="show"></toast>
  </div>
</template>

<script>
  //引入公共组件
  import Scroll from '../../components/common/scroll/Scroll'
  import GoodList from "../../components/content/goods/GoodList"
  import BackTop from "../../components/common/backtop/BackTop"
  import Toast from "../../components/common/toast/Toast"
  //引入子组件
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from "./childComps/DetailSwiper"
  import DetailBaseInfo from "./childComps/DetailBaseInfo"
  import DetailShopInfo from "./childComps/DetailShopInfo"
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
  import DetailParamsInfo from "./childComps/DetailParamsInfo"
  import DetailCommentInfo from "./childComps/DetailCommentInfo"
  import DetailBottomBar from "./childComps/DetailBottomBar"
  //引入方法
  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from '../../network/detail'
  import {debounce} from '../../common/utils'
  export default {
    name: "Detail",
    data(){
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo:{},
        paramsInfo: {},
        comment:{},
        recommend: [],
        isShow: false,
        themeTopY: [],
        getThemeTopY: null,
        currentIndex: 0,
        message: '',
        show: false
      }
    },
    components: {
      Scroll,
      GoodList,
      BackTop,
      Toast,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      DetailBottomBar
    },
    created(){
      //1.获取详情页的轮播图,保存传入的iid
      this.iid = this.$route.params.iid;
      //2.根据传入的iid，请求详情页数据
      getDetail(this.iid).then(res=>{
        console.log(res);
        const data = res.result;
        //1.1 得到详情页轮播图
        this.topImages = data.itemInfo.topImages;
        //1.2 得到详情页商品的一些具体信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        //1.3 得到详情页店铺的一些具体信息
        this.shop = new Shop(data.shopInfo);
        //1.4 得到详情页店铺商品的具体信息
        this.detailInfo = data.detailInfo;
        //1.5 得到店铺商品详情信息
        this.paramsInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);
        //1.6 获取用户评论信息
        this.comment = data.rate;
      })
      //3.请求推荐数据
      getRecommend().then(res=>{
        console.log(res);
        this.recommend = res.data.list;
        //为了防止频繁调用，这里需要添加防抖操作
        this.getThemeTopY = debounce(()=>{
          this.themeTopY=[];
          this.themeTopY.push(0);
          this.themeTopY.push(this.$refs.params.$el.offsetTop);
          this.themeTopY.push(this.$refs.comment.$el.offsetTop);
          this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
          // console.log(this.themeTopY);
        },100)
      })
    },
    methods: {
      //1.图片加载完之后刷新
      imgLoad(){
        this.$refs.scroll.refresh();
        //图片都加载完之后调用距离顶部的距离，这样返回的值才正确
        this.getThemeTopY();
      },
      //2.监听滚动的位置，
      scrollPosition(position){
        //2.1 当滚动位置大于1000时，返回顶部按钮显示出来
        this.isShow = Math.abs(position.y) > 1000;
        //2.2 positionY=[0,13742,15337,15566]
        //滚动到对应位置，上面的导航栏跟着变化
        let positionY = Math.abs(position.y) + 49;
        for(let i = 0;i<this.themeTopY.length;i++){
          if(positionY>this.themeTopY[i]){
            // console.log(i);
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
      },
      //3. 当点击返回顶部按钮时，返回到顶部
      backClick(){
        this.$refs.scroll.scrollTo(0,0,500);
      },
      //4. 点击上面导航栏，点击对应的导航栏滚动到对应位置
      itemClick(index){
        //这里加49是因为顶部nav-bar的高度为49px，所以这里加上顶部的距离后返回的值就是正确的值
        this.$refs.scroll.scrollTo(0,-this.themeTopY[index] + 49,500);
      },
      addToCart(){
        //1.获取商品信息
        const product = {};
        product.image = this.topImages[0];
        product.desc = this.goods.desc;
        product.title = this.goods.title;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        //2.将商品加入购物车
        this.$store.dispatch('addCart',product).then(res=>{
          // console.log(res);
          this.message = res;
          this.show = true;
          setTimeout(()=>{
            this.message = '';
            this.show = false;
          },2000)
        })
      }
    }
  }
</script>

<style scoped>
 .detail {
   height: 100vh;
   position: relative;
   z-index: 9;
   background-color: #fff;
 }
  .content {
    height: calc(100% - 49px);
    overflow: hidden;
  }
  .back-top {
    position: absolute;
    right: 20px;
    bottom: 50px;
  }
</style>
