<template>
  <hdNav></hdNav>
  <!--<h2 class="title">{{content.title}}</h2>-->
  <!--<span>{{content.source}}</span>-->
  <!--<span>{{content.time}}</span>-->
</template>
<script>
  export default {
    data(){
      return{
        content:{}
      }
    },
    created(){
      this.axios.get("http://tanzhouweb.com/vueProject/vue.php?title=banner1")
        .then((res)=>{
          this.content = res.data;
          console.log(res.data);
        });
    },
    mounted(){
      setTimeout(function () {
        console.log(this.content);
      },1000)
    }
  }
</script>
<style>

</style>
