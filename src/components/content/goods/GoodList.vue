<template>
  <div class="good-list">
      <good-list-item v-for="item in goods" :goodList="item"></good-list-item>
  </div>
</template>
<script>
  import GoodListItem from "./GoodListItem"
  export default {
    name: "GoodList",
    props: {
      goods: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      GoodListItem
    }
  }
</script>

<style scoped>

</style>
