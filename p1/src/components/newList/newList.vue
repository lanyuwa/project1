<template>
  <div id="newList">
    <hdNav></hdNav>
    <router-link v-for="(item,index) in msg" :key="index" :to="{name:'newList.detail',query:{id:item.id}}">
      <img :src="item.picUrl" alt="">
      <div>
        <p>{{item.title}}</p>
        <span>{{item.time}}</span>
        <span>{{item.source}}</span>
      </div>
    </router-link>
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
      this.axios.get(this.dataURL("vue.php","newsList"))
        .then((res)=>{
          this.msg = res.data;
          console.log(this.msg);
        })
    }
  }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  #newList {
    width:100%;
    margin-bottom: 130/@rem;
    a{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width:100%;
      height:150/@rem;
      border-bottom:1px solid #ddd;
      img{
        width:110/@rem;
        height:110/@rem;
        margin-left:30/@rem;
      }
      div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content:space-between;
        width:600/@rem;
        height:110/@rem;
        margin:0 30/@rem;
        overflow: hidden;
        p{
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          text-align: left;
          font-size:30/@rem;
          color:#666;
        }
        span{
          font-size:18/@rem;
          color:#999;
        }
      }
    }
  }
</style>
