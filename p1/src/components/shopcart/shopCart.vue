<template>
  <div id="shopCart">
    <hdNav></hdNav>
    <div class="cart-show">
      <ul>
        <li v-for="(item,index) in shopList" :key="index">
          <div class="msg">
            <img class="cartImg" :src="item.imgUrl" alt="">
            <span class="cartText">{{item.des}}</span>
          </div>
          <div class="cart-btn">
            <div class="cart-price">{{item.symbol}}{{item.price}}</div>
            <div class="cart-btn">
              <p class="cart-reduce" @click="reduce(index)">-</p>
              <p class="cart-num">{{item.num}}</p>
              <p class="cart-add" @click="add(index)">+</p>
            </div>
            <div class="del" @click="del(index)">删除</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="txt">
        <div class="txt-wrap">
          <p class="txt-up">总计：<span>￥{{totalPrice.sum}}</span></p>
          <p class="txt-down">总金额￥<span>{{totalPrice.sum}}</span>  优惠￥0.00</p>
        </div>
      </div>
      <div class="btn">
        去结算(<span>{{totalPrice.num}}件</span>)
      </div>
    </div>
  </div>
</template>
<script>
  import shopTools from '../common/shopTools'
  import connet from '../common/connect'
  export default {
    data(){
      return{
        shopList:[],
      }
    },
    computed:{
      totalPrice(){   // 总价格
        let num = 0;
        let sum = 0;
        this.shopList.forEach((item)=>{
          sum += item.num * item.price;
          num += item.num
        });

        return {
          sum:sum,
          num:num
        }
      }
    },
    created(){
      let shop = shopTools.getShop();
      let idArr = Object.keys(shop);
      idArr.forEach((item,index)=>{
        this.axios.get(this.dataURL("vue.php","likeYou",item))
          .then((res)=>{
            this.shopList.push(res.data);
            this.shopList.forEach((item,index)=>{
              if(shop[item.id]){
                this.$set(item,"num",shop[item.id])
              }
            })
          })
      });
    },
    methods:{
      add(i){
        if(this.shopList[i].num<20){
          this.shopList[i].num++;
          connet.$emit('addCart',1);
          shopTools.addUpdate({
            id:this.shopList[i].id,
            num:1
          })
        }
      },
      reduce(i){
        if(this.shopList[i].num>1){
          this.shopList[i].num--;
          connet.$emit('addCart',-1);
          shopTools.addUpdate({
            id:this.shopList[i].id,
            num:-1
          })
        }
      },
      del(i){
        let shops = this.shopList[i];
        shopTools.delete(shops.id);
        connet.$emit('addCart',-shops.num);
        this.shopList.splice(i,1);
      }
    }
  }
</script>
<style scoped lang="less">
  @rem:750/10rem;
  #shopCart{
    width:100%;
    margin-bottom: 150/@rem;
    .cart-show{
      width: 100%;
      border-bottom:1px solid #ddd;
      ul{
        width:88%;
        margin:20/@rem auto;
        li{
          width:100%;
          .msg{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width:100%;
            height:240/@rem;
            border-bottom:1px solid #ddd;
            img{
              width:200/@rem;
              height:200/@rem;
            }
            span{
              width:400/@rem;
              height:200/@rem;
              line-height:50/@rem;
              text-align:left;
              color:rgb(51,51,51);
            }
          }
          .cart-btn{
            width:100%;
            height:100/@rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .cart-price{
              font-size:40/@rem;
              color:#666;
            }
            .cart-btn{
              width:200/@rem;
              height:50/@rem;
              p{
                width:60/@rem;
                height:60/@rem;
                text-align: center;
                line-height:60/@rem;
                background-color: #ddd;
                color:#666;
              }
            }
            .del{
              font-size:40/@rem;
              color:deepskyblue;
            }
          }
        }
      }
    }
    .footer{
      width:100%;
      height:100/@rem;
      margin-top:10/@rem;
    }
    .txt{
      position:relative;
      float: left;
      width:540/@rem;
      height:100%;
      text-align:left;
      .txt-wrap{
        position:absolute;
        left:50/@rem;
        top:50%;
        width:100%;
        height:90%;
        transform: translateY(-50%);
        .txt-up{
          position:absolute;
          top:0;
          left:0;
          font-weight: bold;
          span{
            color:red;
          }
        }
        .txt-down{
          position:absolute;
          bottom:0;
          left:0;
          font-size:12/@rem;
          color:#666666;
        }
      }
    }
    .btn{
      float: right;
      width:200/@rem;
      height:100%;
      line-height:100/@rem;
      background-color: #e4393c;
      color:#fff;
      span{
        font-size:12/@rem;
      }
    }
  }
</style>
