<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
 .nav-bar {
   height: 49px;
   display: flex;
   box-shadow: 0 5px 10px rgba(0,0,0,0.3);
 }
 .left,.right {
   width: 20%;
 }
 .center {
   flex: 1;
 }
  .nav-bar div {
    line-height: 49px;
  }

</style>
