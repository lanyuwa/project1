// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入公共样式
import "../static/css/reset.css";
// 引入阿里图标
import "../static/fonts/iconfont";
// 安装mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
// 安装图片预览插件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview);

import axios from "axios"
axios.defaults.baseURL = "http://tanzhouweb.com/vueProject/";
Vue.prototype.axios = axios;
Vue.prototype.dataURL = function (file,title,id) {
  id = (id === undefined)?'':id;
  return file+'?title='+title+id;
};

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
