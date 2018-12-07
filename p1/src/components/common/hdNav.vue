<template>
  <div id="head">
    <div class="btn" @click="back">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui2"></use>
      </svg>
      <span>返回</span>
    </div>
    <p>{{title}}</p>
    <div class="choose">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-diandian"></use>
      </svg>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    props:["title"],
    methods:{
      back:function () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped lang="less">
  @rem:750/10rem;
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    color:#fff;
    font-size:40/@rem;
  }
  #head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    height:65/@rem;
    background-color: #666666;
    color:#fff;
    .btn{
      margin-left:15/@rem;
    }
    .choose{
      margin-right:25/@rem;
    }
  }
</style>
