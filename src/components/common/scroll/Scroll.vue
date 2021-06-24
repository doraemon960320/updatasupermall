<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad:{
        type: Boolean,
        default: false
      }
    },
    mounted(){
      //1.创建Bscroll对象
      this.scroll = new Bscroll(this.$refs.wrapper,{
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true
      })
      //2.监听滚动位置，当probeType为2或为3时，才会监听滚动位置 当probeType为其他值时不需要监听
      if(this.probeType===2 || this.probeType===3){
        this.scroll.on('scroll',position=>{
          // console.log(position);
          this.$emit('scroll',position)
        })
      }
      //3.监听scroll滚动到底部
      if(this.pullUpLoad){
        //当pullUpLoad为真时，监听滚动到底部
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      //滚动中的方法
      scrollTo(x,y,time){
        // x 横轴坐标（单位 px） y 纵轴坐标 time 滚动动画执行的时长（单位 ms）
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        //重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
        this.scroll &&  this.scroll.refresh();
      },
      finishPullUp(){
        //结束上拉在家行为，每次触发pullingUp钩子之后，应该主动调用finishPullUp(),告诉better-scroll准备好下一次的pullingUp钩子
        this.scroll && this.scroll.finishPullUp();
      }
    }
  }
</script>

<style scoped>

</style>
