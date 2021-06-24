<template>
  <div v-if="Object.keys(comment).length!==0" class="detail-comment-info">
    <div class="comment-info">
      <p class="user-comment">用户评价</p>
      <p class="rate-count">总评价数: {{comment.cRate}}</p>
    </div>
    <div class="comment-detail">
      <span class="user-info">
        <img :src="comment.list[0].user.avatar" alt=""
             v-if="comment.list[0].user.avatar">
        {{comment.list[0].user.uname}}
      </span>
    </div>
    <div class="detail-info">
      <div>时间:{{comment.list[0].created | showTime }}</div>
      <div class="extraInfo" >
        <div v-for="item in comment.list[0].extraInfo">{{item}}</div>
      </div>
      <div class="message">商品评论</div>
      <div class="comment-content">{{comment.list[0].content}}</div>
      <div class="comment-img" v-for="item in comment.list[0].images">
        <div class="message" v-if="comment.list[0].images">商品图片</div>
        <img :src="item" alt="" v-if="comment.list[0].images">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from '../../../common/utils'
  export default {
    name: "DetailCommentInfo",
    props: {
      comment: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    filters: {
      showTime(value){
        let date = new Date(value*1000);
        return formatDate(date)
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    padding-top: 10px;
  }
  .user-comment {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .rate-count {
    color: var(--color-tint);
    font-size: 15px;
  }
  .comment-detail {
    margin: 10px 10px;
  }
  .user-info img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .message {
    margin: 10px 5px;
    color: var(--color-high-text);
    font-size: 15px;
  }
  .extraInfo {
    display: flex;
    justify-content: space-around;
  }
  .comment-content {
    padding: 5px 5px;
  }
  .comment-img {
    display: inline-block;
  }
  .comment-img img {
    width: 80px;
    height: 100px;
  }
</style>
