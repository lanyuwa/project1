<template>
  <div id="shopList">
    <hdNav></hdNav>
    <ul class="shopList">
      <li v-for="(item,index) in msg" :key="index">
        <router-link :to="{name:'shopList.detail',query:{id:index}}">
          <img :src="item.imgUrl" alt="">
          <p>{{item.des}}</p>
          <div>
            <span class="left">{{item.symbol}}{{item.price}}</span>
            <span class="right">{{item.alreadyPaid}}</span>
          </div>
        </router-link>
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
      this.axios.get(this.dataURL("vue.php","likeYou"))
        .then((res)=>{
          this.msg = res.data;
          //console.log(this.msg);
        })
    }
  }
</script>
<style scoped lang="less">
  @rem:750/10rem;
  #shopList{
    width:100%;
    margin-bottom: 130/@rem;
    .shopList{
      display: flex;
      width:100%;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
        position:relative;
        width: 360/@rem;
        height: 528/@rem;
        margin-top:20/@rem;
        background-color: #fff;
        a{
          display: block;
          width:100%;
          height:100%;
          img{
            width:100%;
            height: 369/@rem;
          }
          p{
            width:95%;
            height:64/@rem;
            margin:10/@rem auto 0;
            line-height:32/@rem;
            font-size:16/@rem;
            overflow: hidden;
            color:rgb(51, 51, 51);
          }
          div{
            position:absolute;
            left:0;
            bottom:5/@rem;
            width:100%;
            span{
              position:absolute;
              bottom:0;
              font-size:12/@rem;
            }
            .left{
              left:10/@rem;
              color:red;
            }
            .right{
              right:10/@rem;
              color:#666;
            }
          }
        }
      }
    }
  }
</style>
