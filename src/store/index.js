import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state={
   cartList: []
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store

/*
Vuex状态管理模式
vuex是一个专门为vue.js应用程序开发的状态管理模式，它采用集中式存储管理应用的所有组件状态，并以相应的规则保证状态以一种可预测的方式发生变化。
state:单一状态树，用一个对象就包含了全部的应用层级状态，至此它便作为一个“唯一数据源”而存在
getters: (可以认为是计算属性)，就像是计算属性一样，getters的返回值会根据它的依赖缓存起来，且只有当他的以来至发生了改变才会重新计算。
 我们需要从store中获取一些state变化之后的状态，给别人使用，将变化的东西都放在getters中，调用的时候比较方便
 mutations:状态更新（在组件中提交mutations,this.$store.commit('xxx')）
 vuex的store状态更新的唯一方式：提交mutations
 mutations主要包括两个部分
 字符串事件类型（type）
 一个回调函数（handler）,该回调函数的第一个参数就是state,
 mutations:同步函数
 通常情况下，vuex要求我们mutations中的方法必须是同步的方法
 actions: 我们强调，不要再mutations中进行异步操作，但是某些情况下，我们确实希望vuex中进行一些异步操作。比如网络请求，必然是异步操作，这个时候怎么处理呢？
 actions类似mutations,但是用来代替mutations进行一步操作的
 actions提交的是mutations,而不是直接变更状态调用contetx.commit提交一个mutation
 action通过store.dispatch()方法触发


 每一个vuex应用的核心就是store(仓库)，store基本上就是一个容器，它包含着应用中的大部分状态(state),vuex和单纯的全局对象有以下两点不同：
  1.vuex的状态存储是响应式的，当vue组件从store中读取状态的时候，若store中的状态发生变化那么相应的组件也会相应的高效更新

  2.不能直接改变state中的状态，改变state中的状态唯一途径就是显示的提交mutation,这样使得我们方便的跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好了解我们的应用
*/
