<template>
  <div class="tab-control">
    <div class="control-item" v-for="(item,index) in titles"
         @click="itemClick(index)">
      <span :class="{active: currentIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default(){
          return [];
        }
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        // console.log('我点击了');
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
  }
  .control-item {
    flex: 1;
    text-align: center;
  }
  .active {
    border-bottom: 3px solid var(--color-high-text);
    padding: 5px 5px;
    color: var(--color-high-text);
  }
</style>
