<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="icon-img"></slot></div>
      <div v-else><slot name="icon-img-active"></slot></div>
      <div :class="{active:isActive}"><slot name="icon-text"></slot></div>
    </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props: {
        link: String
      },
      data(){
         return {

         }
      },
      methods: {
        itemClick(){
        //this.$router.push()方法实现路由跳转到不同的URL
          this.$router.push(this.link);
        }
      },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.link) !== -1;
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 13px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 2px;
  }
  .active {
    color: var(--color-high-text);
  }
</style>
