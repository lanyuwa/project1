<template>
  <div id="content">
    <!--轮播-->
    <mt-swipe :auto="4000" class="banner">
      <mt-swipe-item v-for="(item,index) in bannerImg" :key="index">
        <router-link :to="{name:'banner.detail',query:{id:item.id,title:item.title}}">
          <img :src="item.picUrl" :alt="item.title" :title="item.title" width="100%" height="100%">
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
    <!--九宫格-->
    <div class="grids">
      <router-link :to="{name:'newList'}">
        <div class="center">
          <svg class="icon">
            <use xlink:href="#icon-news_icon"></use>
          </svg>
          <p>新闻资讯</p>
        </div>
      </router-link>
      <router-link :to="{name:'photoShare.photoList'}">
        <div class="center">
          <svg class="icon">
            <use xlink:href="#icon-plus-share"></use>
          </svg>
          <p>图文分享</p>
        </div>
      </router-link>
      <a href="">
        <div class="center">
          <svg class="icon">
            <use xlink:href="#icon-shangpinfenlei"></use>
          </svg>
          <p>商品展示</p>
        </div>
      </a>
      <a href="">
        <div class="center">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liuyanjianyi"></use>
          </svg>
          <p>留言反馈</p>
        </div>
      </a>
      <a href="">
        <div class="center">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-iconfontzhengzaidingwei"></use>
          </svg>
          <p>短信联系</p>
        </div>
      </a>
      <a href="">
        <div class="center">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-lianxiwomen"></use>
          </svg>
          <p>电话联系</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerImg:[]
    }
  },
  created(){
    {
      // this.axios.get("http://tanzhouweb.com/vueProject/vue.php?title=banner")
      this.axios.get(this.dataURL("vue.php","banner"))
        .then((res)=>{
          this.bannerImg = res.data;
        })
    }
  }
}
</script>

<style scoped lang="less">
  @rem:750/10rem;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    color:#26a2ff;
    font-size:42px;
  }
  #content{
    width:100%;
    .banner{
      height:300/@rem;
    }
    .grids{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap:wrap;
      width:100%;
      height:240px;
      background-color: #666;
      a{
        display: flex;
        align-items: center;
        justify-content: center;
        position:relative;
        width:33.33%;
        height:50%;
        background-color: #fff;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        p{
          margin-top:30/@rem;
          font-size:16/@rem;
          color:#000;
        }
      }
      a::after{
        content: "";
        position:absolute;
        top:0;
        left:0;
        width:200%;
        height:200%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-left:1px solid #ddd;
        border-bottom:1px solid #ddd;
        transform-origin: 0 0;
        transform:scale(.5);
      }
    }
  }
</style>
