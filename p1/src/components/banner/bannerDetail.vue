<template>
  <div id="banDetail">
    <hdNav></hdNav>
    <div class="con">
      <h2 class="title">{{content.title}}</h2>
      <p>{{content.source}}     {{content.time}}</p>
      <img :src="content.picUrl" alt="">
      <div class="txt" v-html="content.des"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        content:{},
        id:1
      }
    },
    created(){
      // this.axios.get("http://tanzhouweb.com/vueProject/vue.php?title=banner1")
      this.id = this.$route.query.id;
      this.axios.get(this.dataURL("vue.php","banner",this.id))
        .then((res)=>{
          this.content = res.data;
        });
    }
  }
</script>
<style scoped lang="less">
  @rem:750/10rem;
  #banDetail{
    width:100%;
    margin-bottom:150/@rem;
    .con{
      padding:0 40/@rem;
      h2{
        margin-top:10/@rem;
        text-align: left;
        font-size:36/@rem;
      }
      p{
        margin:30/@rem 0;
        font-size:16/@rem;
      }
      img{
        width:98%;
        text-align:center;
      }
      .txt{
        margin-top:10/@rem;
        font-size:32/@rem;
        text-align: left;
        text-indent: 2em;
        color: #1f2d40;
      }
    }
  }
</style>
