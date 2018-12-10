<template>
  <div id="photo">
    <hdNav></hdNav>
    <ul>
      <li v-for="(item,index) in msg" :key="index">
        <img :src="item.picUrl" alt="" v-lazy="item.picUrl" class="preview-img" @click="$preview.open(index, msg)">
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        msg:{}
      }
    },
    created(){
      let id = this.$route.query.id;
      let tip = this.$route.query.tip;
      this.axios.get(this.dataURL("vue.php",tip,id))
        .then((res)=>{
          res.data.forEach((item,index)=>{
            item.src = item.picUrl;
            item.w = 300;
            item.h = 200;
          });
          this.msg = res.data;
        })
    }
  }
</script>
<style scoped lang="less">
  @rem:750/10rem;
  #photo{
    width:100%;
    margin-bottom: 150/@rem;
    ul{
      width:100%;
      li{
        width:96%;
        height:560/@rem;
        margin:10/@rem auto;
        img{
          display: block;
          width:100%;
          height:100%;
        }
      }
    }
  }
</style>
