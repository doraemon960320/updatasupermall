<template>
  <div v-if="Object.keys(goods).length!==0"
       class="detail-base-info" >
    <div class="info-title">{{goods.title}}</div>
    <div class="price">
      <span class="new">{{goods.newPrice}}</span>
      <span class="old">{{goods.oldPrice}}</span>
      <span v-if="goods.discountDesc"
            class="discount">{{goods.discountDesc}}</span>
    </div>
    <div class="goods-info">
      <div class="columns">{{goods.columns[0]}}</div>
      <div class="columns">{{goods.columns[1]}}</div>
      <div class="columns">{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="other-info">
      <div class="info-content" v-for="index in goods.services.length-1">
        <img :src="goods.services[index-1].icon" alt=""
             v-if="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.info-title {
  font-size: 20px;
  font-weight: 700;
  margin: 10px 5px 5px;
}
  .price {
    font-size: 15px;
    height: 25px;
    line-height: 25px;
  }
  .price .new {
    font-size: 20px;
    color: var(--color-high-text);
    font-weight: 700;
    margin-right: 5px;
  }
  .old {
    margin-right: 5px;
    text-decoration-line: line-through;
  }
  .discount {
    background-color: var(--color-high-text);
    color: #fff;
    font-size: 10px;
    padding: 2px;
    border-radius: 5px;
  }
  .goods-info {
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
  }
  .columns {
    font-size: 13px;
  }
  .other-info {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    width: 100%;
    color: #333;
    padding: 10px 5px;
    border-bottom: 5px solid #ccc;
  }
  .other-info img {
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }
  /*.info-content>span {*/
  /*  flex: 1;*/
  /*}*/
</style>
