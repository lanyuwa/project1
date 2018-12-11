<template>
  <div id="say">
    <hdNav></hdNav>
    <p>你点击的页面不存在，请返回。</p>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>
<style scoped lang="less">
  #say{
    @rem:750/10rem;
    background-color: #fff;
    font-size:48/@rem;
    p{
      padding-top:100/@rem;
    }
  }
</style>
