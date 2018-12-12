<template>
  <div id="shopDetail">
    <hdNav></hdNav>
    <div class="detail">
      <div class="img">
        <img :src="msg.imgUrl" alt="">
      </div>
      <div class="text">
        <p class="title">{{msg.des}}</p>
        <p class="price">{{msg.symbol}}  {{msg.price}}</p>
        <div class="alreadyPaid">
          <span class="left">快递：包邮</span>
          <span class="right">{{msg.alreadyPaid}}</span>
        </div>
      </div>
      <div class="footer">
        <div class="num">
          <span>购买数量</span>
          <div>
            <p class="reduce" @click="reduce">-</p>
            <p>{{num}}</p>
            <p class="add" @click="add">+</p>
          </div>
        </div>
        <div class="btn">
          <p class="left" @click="commitCart">加入购物车</p>
          <p class="right">立即购买</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        num:1,
        msg:{},
        index:0
      }
    },
    created(){
      this.index = this.$route.query.id;
      this.axios.get(this.dataURL("vue.php","likeYou"))
        .then((res)=>{
          res.data["id"] = this.index+1;
          this.msg = res.data[this.index];
        })
    },
    methods:{
      reduce(){
          if(this.num<=1)return;
          this.num--;
          this.$store.commit("reduceCartNum");
      },
      add(){
          if(this.num>=20)return;
          this.num++;
          this.$store.commit("addCartNum");
      },
      commitCart(){

      }
    }
  }
</script>
<style scoped lang="less">
  @rem:750/10rem;
  #shopDetail{
    width:100%;
    background-color: #fff;
    margin-bottom: 130/@rem;
    .detail{
      width:100%;
      .img{
        width:100%;
        height:650/@rem;
        margin:0 auto;
        img{
          width:100%;
          height:100%;
        }
      }
      .text{
        width:100%;
        .title{
          padding:10/@rem;
          text-align:left;
          font-size:32/@rem;
          color:rgb(51, 51, 51);
        }
        .price{
          padding-left:10/@rem;
          text-align:left;
          font-size:36/@rem;
          color:red;
        }
        .alreadyPaid{
          position:relative;
          font-size:28/@rem;
          color:#666666;
          span{
            position:absolute;
            top:0;
          }
          .left{
            left:10/@rem;
          }
          .right{
            right:10/@rem;
          }
        }
      }
      .footer{
        width:730/@rem;
        border-top:1px solid #ddd;
        margin:50/@rem auto 0;
        .num{
          width:690/@rem;
          padding:20/@rem;
          span{
            display: block;
            float: left;
            font-size:40/@rem;
            color:#666;
          }
          div{
            float: right;
            display: flex;
            justify-content: space-between;
            width:185/@rem;
            p{
              width:55/@rem;
              height:55/@rem;
              background-color: #EDEDED;
              line-height:55/@rem;
              color:#666;
            }
          }
        }
        .btn{
          width:100%;
          height:100/@rem;
          margin:60/@rem auto 0;
          p{
            float:left;
            width:50%;
            height:100%;
            line-height:100/@rem;
            font-size:30/@rem;
            color:#fff;
          }
          .left{
            background-color: #ff9402;
          }
          .right{
            background-color: #ff5000;
          }
        }
      }
    }
  }
</style>
