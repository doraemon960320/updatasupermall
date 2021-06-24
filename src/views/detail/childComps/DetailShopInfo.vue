<template>
  <div v-if="Object.keys(shop).length!==0"
       class="detail-shop-info">
    <div class="shop-logo">
      <img :src="shop.logo" alt="">
      <span class="shop-name">{{shop.name}}</span>
    </div>
    <div class="detail-info">
      <div class="sell">
        {{shop.sells | showSell}}
        <div class="shop-detail">总销量</div>
      </div>
      <div class="good-count">
        {{shop.goodsCount}}
        <div class="shop-detail">全部宝贝</div>
      </div>
      <div class="good-score">
        <table>
          <tr v-for="item in shop.score">
            <td>{{item.name}}</td>
            <td>{{item.score}}</td>
            <td class="score-detail" :style="{backgroundColor : item.isBetter === true ? 'red' : 'green'}">{{item.isBetter | showBetter}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="come-shop">进店逛逛</div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    filters: {
      showSell(value){
        return (value/10000).toFixed(2) + '万';
      },
      showBetter(value){
        if(value === true){
          return '高'
        }else {
          return '低'
        }
      }
    }
  }
</script>

<style scoped>
  .shop-logo {
    margin: 10px 10px;
  }
 .shop-logo img {
   width: 50px;
   height: 50px;
   vertical-align: middle;
   margin-right: 10px;
 }
  .shop-logo span {
    font-weight: 700;
    font-size: 18px;
  }
  .score-detail {
    color: #fff;
  }
  .detail-info {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .shop-detail {
    font-weight: 700;
    font-size: 18px;
  }
  .shop-name {
    color: #333;
  }
  .come-shop {
    margin: 10px auto;
    width: 100px;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    text-align: center;
    background-color: #ccc;
    border-radius: 15px;
    color: #333;
  }
</style>
