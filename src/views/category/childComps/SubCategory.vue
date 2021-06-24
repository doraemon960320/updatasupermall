<template>
  <div class="sub-category">
    <div v-for="(item,index) in categoryList" :key="index">
      <div class="category-list">
        <div class="list-info">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imgLoad">
          </a>
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SubCategory",
    props: {
      categoryList:{
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      imgLoad(){
        this.$emit('imgLoad');
      }
    }
  }
</script>

<style scoped>
  .sub-category {
    margin-left: 100px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .category-list {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 80px;
    height: 80px;
  }
  .category-list img {
    width: 40px;
    height: 40px;
  }
</style>
