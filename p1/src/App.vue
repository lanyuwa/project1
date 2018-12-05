<template>
  <div id="app">
    <header>lanyuwa测试项目</header>
    <router-view/>
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
  #app{
    max-width:750px;
    height:100%;
    margin:auto;
    background-color: pink;
    text-align:center;
  }
  header{
    width:100%;
    height:80/@rem;
    background-color: #26a2ff;
    line-height:80/@rem;
    color:#fff;
  }
</style>
