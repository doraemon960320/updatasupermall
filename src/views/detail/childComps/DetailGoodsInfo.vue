<template>
  <div v-if="Object.keys(detailInfo).length!==0"
       class="detail-goods-info">
    <div class="goods-info">
      <div class="desc desc-left"></div>
      <div class="desc-info">{{detailInfo.desc}}</div>
      <div class="desc desc-right"></div>
    </div>
    <div class="detail-info">{{detailInfo.detailImage[0].key}}</div>
    <div class="detail-img" v-for="item in detailInfo.detailImage[0].list">
      <img :src="item" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      imageLoad(){
        this.$emit('imgLoad')
      }
    }
  }
</script>

<style scoped>
  .desc-left,.desc-right {
    position: relative;
    width: 200px;
    height: 1px;
    border-bottom: 1px solid #000;
  }
  .desc-left {
   margin: 10px 10px 15px 10px;
  }
  .desc-left::before,.desc-right::after {
    content:'';
    width: 10px;
    height: 10px;
    background-color: #000;
    display: inline-block;
  }
  .desc-left::before {
    position: absolute;
    top: 0;
    left: 0;
  }
  .desc-right {
    margin: 10px 110px 10px;
  }
  .desc-right::after {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .desc-info {
    padding: 0 15px;
  }
  .detail-info {
    margin-bottom: 10px;
  }
 .detail-img img{
    width:100%;
 }
</style>
