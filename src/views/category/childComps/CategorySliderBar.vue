<template>
  <div class="slider-bar">
      <div class="slider-list"
           v-for="(item,index) in sliderBarList"
           :key="index">
        <div class="slider-list-item"
             @click="itemClick(item,index)"
             :class="currentIndex === index ? 'active':''">{{item.title}}</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "CategorySliderBar",
    props: {
      sliderBarList:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(item,index){
        const obj ={
          maitKey : item.maitKey,
          index
        }
        this.currentIndex = index;
        this.$emit('itemClick',obj);
      }
    }
  }
</script>

<style scoped>
  .slider-bar {
    float: left;
  }
  .slider-list {
    background-color: #eee;
    width: 100px;
  }
  .slider-list-item {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .active {
    color: var(--color-high-text);
    border-left: 3px solid var(--color-high-text);
    font-weight: 700;
    background-color: #fff;
  }
</style>
