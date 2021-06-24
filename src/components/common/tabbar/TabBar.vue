<template>
    <div class="tab-bar">
     <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
 .tab-bar {
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   height: 44px;
   border-top: 1px solid #ccc;
   box-shadow: 0 10px 10px rgba(0,0,0,0.3);
   display: flex;
   background-color: #fff;
 }

</style>
