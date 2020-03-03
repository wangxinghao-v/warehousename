import Vue from 'vue'
import Router from 'vue-router'

//主页
import HelloWorld from '@/components/HelloWorld'
//循环产生电影信息
import ranking from '../components/ranking.vue'
//广告
import advertising from '../components/advertising/advertising.vue'
//广告1定位广告
import advertising1 from '../components/advertising/advertising1.vue'
//广告2
import advertising2 from '../components/advertising/advertising2.vue'
import advertising3 from '../components/advertising/advertising3.vue'
//旧经典
import Oldclassic from '../components/Oldclassic.vue'
//电影详情页
import Mparticulars from '../components/Mparticulars.vue'
Vue.use(Router)
//1首页
import HomePageone from '../components/HomePageone.vue'
//首页的详情页二级页面
import HomePagetwo from '../components/HomePagetwo.vue'
//1首页的主题部分
import HomePageonecontent from '../components/themecontent/HomePageonecontent.vue'
//1首页的头部
import HomePageonehander from '../components/themecontent/HomePageonehander.vue'
//1首页置顶
import HomePageoneoverhead from '../components/themecontent/HomePageoneoverhead.vue'

// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// };
//评论循环页
import Comment from '../components/Comment.vue'
// import Comment1 from '../components/Comment1.vue'
import sasssass from '../components/sasssass.vue'
import sassesass1 from '../components/sassesass1.vue'
export default new Router({
  routes: [
    //父子组件传参传函数路由传参实验
    //父
    {path:'/sasssass',component:sasssass},
    //子
    {path:'/sassesass1',component:sassesass1},
    
    {path:'/',component:HomePageone},
    //评论的两个部分
    {path:"/Comment",component:Comment,},
    // {path:"/Comment1",component:Comment1,},
    {path:"/Mparticulars",component:Mparticulars},
    {path:"/Oldclassic",component:Oldclassic},
    {path:'/ranking',component:ranking},
    {path:'/Helloworld',name:HelloWorld,component:HelloWorld},
    //首页的部分
    {path:'/HomePagetwo',component:HomePagetwo},
    {path:'/HomePageonecontent',component:HomePageonecontent},
    {path:'/HomePageonehander',component:HomePageonehander},
    {path:'/HomePageoneoverhead',component:HomePageoneoverhead},
    //广告部分
    {path:'/advertising',component:advertising},
    {path:'/advertising2',component:advertising2},
    {path:'/advertising1',component:advertising1},
    {path:'/advertising3',component:advertising3},
  ]
})
