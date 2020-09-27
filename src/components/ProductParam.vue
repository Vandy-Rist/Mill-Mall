<template>
  <div class="nav-bar" :class="{'is_fixed':isfixed}">
    <div class="container">
      <div class="pro-name">{{title}}</div>
      <div class="pro-param">
        <a href="javascript:;">概述</a>
        <span>|</span>
        <a href="javascript:;">参数</a>
        <span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>  

<script>
  export default {
    name: 'product-param',
    props:{
      title:String
    },
    data(){
      return {
        isfixed:false
      }
    },
    mounted(){
      window.addEventListener('scroll',this.navScroll);
    },
    methods:{
      navScroll(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.isfixed = scrollTop > 152 ? true : false;
      }
    },
    destroyed(){
      window.removeEventListener('scroll',this.navScroll,false);
    }
  }

</script>

<style lang="scss">
 @import './../assets/scss/config.scss';
 @import './../assets/scss/mixin.scss';
  .nav-bar{
    height: 70px;
    line-height: 70px;
    border-top: 1px solid $colorH;
    background-color: $colorG;
    z-index: 10;
    &.is_fixed{
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 0 5px 5px $colorE;
    }
    .container{
      @include flex();
      .pro-name{
        font-size: $fontH;
        font-weight: bold;
        color: $colorB;
      }
      .pro-param{
        font-size: $fontJ;
        font-weight: bold;
        a{
          color: $colorC;
        }
        span{
          margin: 0 10px;
        }
      }
    }
  }
</style>