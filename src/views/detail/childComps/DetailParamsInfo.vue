<template>
  <div v-if="Object.keys(paramsInfo).length!==0"
       class="detail-params-info">
    <div class="params">产品参数</div>
      <table class="params-info">
        <tr v-for="item in paramsInfo.infos">
          <td class="item-value">{{item.key}}</td>
          <td>{{item.value}}</td>
        </tr>
      </table>
    <div class="rule-key">尺码说明</div>
    <table class="params-rule"
           v-for="(table,index) in paramsInfo.sizes"
           :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParamsInfo",
    props: {
      paramsInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
 .params {
   font-size: 18px;
   font-weight: 700;
   border-top: 3px solid #ccc;
   padding: 10px 10px;
 }
  .params-info,.params-rule {
    margin-top: 10px;
    border-collapse: collapse;
  }
  td {
    width: 200px;
    height: 50px;
    border-bottom: 1px solid #ccc;
    padding: 5px 5px;
  }
  .item-value {
    color: var(--color-high-text);
  }
  .rule-key {
    margin: 10px 5px;
    font-size: 18px;
    font-weight: 700;
  }
  .params-rule td {
    width: 100px;
  }
</style>
