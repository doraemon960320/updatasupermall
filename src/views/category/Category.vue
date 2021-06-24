<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <category-slider-bar ref="categorySliderBar" :slider-bar-list="sliderBarList"
                           @itemClick="itemClick"></category-slider-bar>
      <sub-category :category-list="categoryList"
                    @imgLoad="imgLoad"></sub-category>
    </scroll>
  </div>
</template>

<script>
  //引入公共组件
  import NavBar from "../../components/common/navbar/NavBar"
  import Scroll from '../../components/common/scroll/Scroll'
  //引入子组件
  import CategorySliderBar from "./childComps/CategorySliderBar"
  import SubCategory from "./childComps/SubCategory"
  //引入公共的方法
  import {category,getSubCategory,getCategoryDetail} from '../../network/category'
  export default {
    name: "Category",
    data(){
      return {
        //获取商品数据
        //侧边栏数据
        sliderBarList:[],
        //侧边栏对应的右边显示的数据
        categoryList:[],
        //传递的参数
        maitKey: 3627,
        currentIndex: 0,
        miniWallkey:10062603
      }
    },
    components: {
      NavBar,
      Scroll,
      CategorySliderBar,
      SubCategory
    },
    created(){
      //1.获取数据
     this.category();
     this.getSubCategory(this.maitKey);
    this.getCategoryDetail(this.miniWallkey,'pop')
    },
    methods: {
      //1.注册事件
      itemClick({maitKey,index}){
        this.currentIndex = index;
        this.getSubCategory(maitKey);
      },
      //图片加载完成刷新
      imgLoad(){
        this.$refs.scroll.refresh();
      },
      category(){
        category().then(res=>{
          console.log(res);
          this.sliderBarList=res.data.category.list;
          this.maitKey = res.data.category.list[this.currentIndex].maitKey;
        })
      },
      getSubCategory(key){
        getSubCategory(key).then(res=>{
          console.log(res);
          this.categoryList = res.data.list;
        })
      },
      getCategoryDetail(key,type){
        getCategoryDetail(key, type).then(res=>{
          console.log(res);
        })
      }

    }
  }
</script>

<style scoped>
  .category {
    height: 100vh;
  }
 .nav-bar {
   background-color: var(--color-high-text);
   color: #fff;
   text-align: center;
   font-size: 16px;
 }
  .content {
    height: calc(100% - 49px - 44px);
    overflow: hidden;
  }


</style>
