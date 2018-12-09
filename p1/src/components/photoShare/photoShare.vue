<template>
  <div id="photoList">
    <hdNav></hdNav>
    <div class="tabItem">
      <a href="javascript:;" v-for="(item,index) in tabItem" :key="index">{{item.title}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        tabItem:[]
      }
    },
    created(){
      this.axios.get(this.dataURL("vue.php","shareNav"))
        .then((res)=>{
          this.tabItem = res.data;
          console.log(this.tabItem);
        })
    }
  }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  #photoList{
    width:100%;
    .tabItem{
      display: flex;
      width:100%;
      a{
        width: 33.33%;
        height:100/@rem;
        border-bottom:3px solid #26a2ff;
        color:#26a2ff;
        line-height:100/@rem;
      }
    }
  }
</style>
