<template>
  <div class="toast" v-show="show">
    <div class="toast-message">{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      message: '',
      show: false
    }
  }
</script>

<style scoped>
 .toast-message {
   position: fixed;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%);
   padding: 8px 10px;
   color: #fff;
   background-color: rgba(0,0,0,0.7);
   border-radius: 5px;
 }
</style>
