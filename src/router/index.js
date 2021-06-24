import Vue from 'vue'
import VueRouter from 'vue-router'

//路由懒加载方式引入对应的组件
const Home=()=>import('../views/home/Home')
const Category=()=>import('../views/category/Category')
const Cart =()=>import('../views/cart/Cart')
const Profile=()=>import('../views/profile/Profile')
const Detail=()=>import('../views/detail/Detail')
//1.安装路由对象
Vue.use(VueRouter)
const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },{
  path: '/profile',
    component: Profile
  },
  {
    //动态路由
    path: '/detail/:iid',
    component: Detail
  }
];

//2.创建路由实例，传入映射配置
const router = new VueRouter({
  routes,
  mode: 'history'
})

//3.导出路由对象
export default router
