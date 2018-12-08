import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import hdNav from '../components/common/hdNav'
import bannerDetail from '../components/banner/bannerDetail'
import newList from '../components/newList/newList'
import newDetail from '../components/newList/newDetail'

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
    }
  ]
})
