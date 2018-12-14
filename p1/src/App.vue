<template>
  <div id="app">
    <header></header>
    <header class="fixed">lanyuwa测试项目</header>
    <router-view/>
    <footer>
      <router-link :to="{name:'index'}">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouye"></use>
        </svg>
        <p>首页</p>
      </router-link>
      <router-link :to="{name:'map'}">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ditu"></use>
        </svg>
        <p>地图</p>
      </router-link>
      <router-link :to="{name:'weather'}">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tianqi"></use>
        </svg>
        <p>天气</p>
      </router-link>
      <router-link :to="{name:'shopCart'}">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
        <p>购物车</p>
        <span class="showNum" v-show="pickNum">{{pickNum}}</span>
      </router-link>
    </footer>
  </div>
</template>
<script>
  import connect from './components/common/connect'
export default {
  data(){
    return{
      pickNum:0
    }
  },
  computed:{
    // num(){
    //     return this.$store.state.num;
    // }
  },
  created(){
    this.remChange();
    window.addEventListener("resize",this.remChange);

    connect.$on('addCart', (num)=>{
      this.pickNum += num
    })
  },
  methods:{
    remChange:function () {
      let html = document.getElementsByTagName("html")[0];
      let width = html.getBoundingClientRect().width;
      if(width>750){
          width=750;
      }
      html.style.fontSize = width/10 +"px";
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
    font-size:70/@rem;
  }
  #app{
    position: relative;
    max-width:750px;
    margin:auto;
    text-align:center;
    header{
      width:100%;
      height:75/@rem;
      background-color: #26a2ff;
      line-height:75/@rem;
      color:#fff;
    }
    header.fixed{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 100%;
      z-index: 999;
    }
    footer{
      position:fixed;
      bottom:0;
      left:0;
      z-index: 9;
      width:100%;
      height:130/@rem;
      display: flex;
      background-color: #fff;
      border-top:1px solid #ddd;
      box-shadow: 0 0 5px #ddd;
      a{
        position:relative;
        width:25%;
        height:100%;
        svg{
          margin-top:10/@rem;
        }
        p{
          font-size:24/@rem;
          color:#26a2ff;
        }
        .showNum{
          position:absolute;
          top:10/@rem;
          right:30/@rem;
          width:40/@rem;
          height:40/@rem;
          text-align: center;
          line-height:40/@rem;
          background-color: red;
          border-radius: 100%;
          font-size:16/@rem;
          color:#fff;
        }
      }
    }
  }
</style>
