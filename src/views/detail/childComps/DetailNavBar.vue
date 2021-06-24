<template>
  <div class="detail-bav-bar">
    <nav-bar class="nav-bar">
      <div class="nav-bar-left" slot="left" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div class="nav-bar-center" slot="center">
        <div class="nav-bar-item"
             v-for="(item,index) in titles"
             @click="itemClick(index)"
             :class="{active: currentIndex === index}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar'
  export default {
    name: "DetailNavBar",
    data(){
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      backClick(){
        this.$router.go(-1);
      },
      itemClick(index){
        this.currentIndex = index;
        this.$emit('itemClick',index);
      }
    }
  }
</script>

<style scoped>
 .nav-bar {
   background-color: #fff;
   color: #333;
 }
  .nav-bar-left img {
    vertical-align: middle;
  }
  .nav-bar-center {
    display: flex;
  }
 .nav-bar-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text)
  }
</style>
