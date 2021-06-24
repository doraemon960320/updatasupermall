<template>
  <div class="good-list-item" @click="itemClick">
    <img :src="goodList.image || goodList.show.img" alt="" @load="imgLoad">
    <div class="good-info">
      <p>{{goodList.title}}</p>
      <span class="price">{{goodList.price}}</span>
      <span class="collect">{{goodList.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props: {
      goodList:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      imgLoad(){
        this.$bus.$emit('imgLoad');
        // console.log('-----');
      },
      itemClick(){
        this.$router.push('/detail/'+this.goodList.iid)
      }
    }
  }
</script>

<style scoped>
.good-list-item {
  width: 50%;
  display: inline-block;
  text-align: center;
  padding: 5px 5px;
  font-size: 15px;
}
  .good-list-item img {
    width: 100%;
    vertical-align: middle;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .good-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price {
    color: var(--color-high-text);
    padding-right: 20px;
  }
  .collect {
    position: relative;
  }
  .collect::before {
    content:'';
    position: absolute;
    top: 1px;
    left: -14px;
    width: 14px;
    height: 14px;
    background: url(../../../assets/img/common/collect.svg) 0 0/14px 14px;
  }
</style>
