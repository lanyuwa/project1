<template>
  <div id="app">
    <header>lanyuwa测试项目</header>
    <router-view/>
    <footer>
      <a href="">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouye"></use>
        </svg>
        <p>首页</p>
      </a>
      <a href="">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ditu"></use>
        </svg>
        <p>地图</p>
      </a>
      <a href="">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tianqi"></use>
        </svg>
        <p>天气</p>
      </a>
      <a href="">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
        <p>购物</p>
      </a>
    </footer>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  created(){
    this.remChange();
    window.addEventListener("resize",this.remChange)
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
    background-color: #f5f5f5;
    max-width:750px;
    height:100%;
    margin:auto;
    text-align:center;
  }
  header{
    width:100%;
    height:75/@rem;
    background-color: #26a2ff;
    line-height:75/@rem;
    color:#fff;
  }
  footer{
    display: flex;
    z-index: 9;
    width:100%;
    height:130/@rem;
    position:fixed;
    bottom:0;
    left:0;
    background-color: #fff;
    border-top:1px solid #ddd;
    box-shadow: 0 0 5px #ddd;
    a{
      width:25%;
      height:100%;
      svg{
        margin-top:10/@rem;
      }
      p{
        font-size:24/@rem;
        color:#26a2ff;
      }
    }
  }
</style>
