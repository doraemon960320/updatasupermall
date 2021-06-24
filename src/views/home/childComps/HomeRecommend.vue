<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="recommend-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
       recommends: {
         type: Array,
         default(){
           return []
         }
       }
    }
  }
</script>

<style scoped>
.home-recommend {
  width: 100%;
  display: flex;
}
.recommend-item {
  flex: 1;
  text-align: center;
  font-size: 15px;
}
  .recommend-item img {
    width: 60px;
    height: 60px;
    vertical-align: middle;
  }
</style>
