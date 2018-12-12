import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import hdNav from '../components/common/hdNav'
import bannerDetail from '../components/banner/bannerDetail'
import newList from '../components/newList/newList'
import newDetail from '../components/newList/newDetail'
import photoList from '../components/photoShare/photoShare'
import photo from '../components/photoShare/photo'
import shopList from '../components/shop/shopList'
import shopDetail from '../components/shop/detailShop'
import say from '../components/saySomething/say'
import weather from '../components/common/weather'
import map from '../components/map/map'
import shopCart from '../components/shopcart/shopCart'

Vue.use(Router);
Vue.component("hdNav",hdNav);

export default new Router({
  routes: [
    {
      path:'/index.html',
      redirect:{name:'index'}
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      name:"banner.detail",
      path:"/banner/detail",
      component:bannerDetail
    },
    {
      name:"newList",
      path:"/newList",
      component:newList
    },
    {
      name:"newList.detail",
      path:"/newList/detail",
      component:newDetail
    },
    {
      name:"photoShare.photoList",
      path:"/photoShare/List",
      component:photoList
    },
    {
      name:"photoList.detail",
      path:"/photo",
      component:photo
    },
    {
      name:"shopList",
      path:"/shopList",
      component:shopList
    },
    {
      name:"shopList.detail",
      path:"/shopList/detail",
      component:shopDetail
    },
    {
      name:"say",
      path:"/say",
      component:say
    },
    {
      name:"weather",
      path:"/weather",
      component:weather
    },
    {
      name:"map",
      path:"/map",
      component:map
    },
    {
      name:"shopCart",
      path:"/shopCart",
      component:shopCart
    }
  ]
})
