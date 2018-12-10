<template>
  <div id="photoList">
    <hdNav></hdNav>
    <div class="tabItem">
      <a href="javascript:;" v-for="(item,index) in tabItem" :key="index" :class="item.id===1?'active':''" @click="getImg(item.tip)">{{item.title}}</a>
    </div>
    <div class="conItem">
      <ul class="womanStar show">
        <li v-for="(item,index) in womanStar" :key="index">
          <router-link :to="{name:'photoList.detail',query:{id:item.id,tip:item.tip}}">
            <img :src="item.picUrl" alt="">
            <p v-text="item.title"></p>
          </router-link>
        </li>
      </ul>
      <ul class="manStar">
        <li v-for="(item,index) in manStar" :key="index">
          <router-link  :to="{name:'photoList.detail',query:{id:item.id,tip:item.tip}}">
            <img :src="item.picUrl" alt="">
            <p v-text="item.title"></p>
          </router-link>
        </li>
      </ul>
      <ul class="fullView">
        <li v-for="(item,index) in fullView" :key="index">
          <router-link :to="{name:'photoList.detail',query:{id:item.id,tip:item.tip}}">
            <img :src="item.picUrl" alt="">
            <p v-text="item.title"></p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        tabItem:[],
        womanStar:[],
        manStar:[],
        fullView:[]
      }
    },
    created(){
      this.axios.get(this.dataURL("vue.php","shareNav"))
        .then((res)=>{
          this.tabItem = res.data;
          this.getImg("womanStar");
        })
    },
    methods:{
      getImg(title){
        this.axios.get(this.dataURL("vue.php",title))
          .then((res)=>{
            this[title] = res.data;
            this.tabActive();
          })
      },
      tabActive(){
        let oTabItem = document.getElementsByClassName("tabItem")[0];
        let aTab = oTabItem.getElementsByTagName("a");
        let oConItem = document.getElementsByClassName("conItem")[0];
        let aUl = oConItem.getElementsByTagName("ul");
        let index = 0;
        for(let i=0,len=aTab.length;i<len;i++){
          aTab[i].addEventListener("click",function () {
            aTab[index].classList.remove("active");
            aUl[index].classList.remove("show");
            index=i;
            aTab[index].classList.add("active");
            aUl[index].classList.add("show");
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  #photoList{
    width:100%;
    margin-bottom:130/@rem;
    .tabItem{
      display: flex;
      width:100%;
      a{
        width: 33.33%;
        height:100/@rem;
        color:#26a2ff;
        line-height:100/@rem;
      }
      a.active{
        border-bottom:3px solid #26a2ff;
      }
    }
    .conItem{
      width:100%;
      ul{
        display: none;
        width:100%;
        li{
          width:100%;
          a{
            width:100%;
            display:flex;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            height:150/@rem;
            border-bottom:1px solid #ddd;
            img{
              width:100/@rem;
              height:100/@rem;
            }
            p{
              width:500/@rem;
              margin-left:15/@rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              font-size:16/@rem;
              color:#666;
            }
          }
        }
      }
      ul.show{
        display:block;
      }
    }
  }
</style>
