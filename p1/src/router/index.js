import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import hdNav from '../components/common/hdNav'
import bannerDetail from '../components/banner/bannerDetail'

Vue.use(Router);
Vue.component("hdNav",hdNav);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      name:"banner.detail",
      path:'/banner/detail',
      component:bannerDetail
    }
  ]
})
