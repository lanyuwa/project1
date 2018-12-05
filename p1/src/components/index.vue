<template>
  <div id="content">
    <!--轮播-->
    <mt-swipe :auto="4000" class="banner">
      <mt-swipe-item>
        <a>
          <img src="" alt="">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created(){
    {
      this.axios.get("http://tanzhouweb.com/vueProject/vue.php?title=banner")
      .then((res)=>{
        console.log(res);
      })
    }
  }
}
</script>

<style scoped lang="less">
  @rem:750/10rem;
  #content{
    width:100%;
    .banner{
      height:300/@rem;
    }
  }

</style>
