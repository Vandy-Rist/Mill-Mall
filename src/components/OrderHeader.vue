<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo" >
         <a href="/#/index"></a>
       </div>
       <div class="title">
         <h2>{{title}}
           <slot name="tip"></slot>
         </h2>
       </div>
       <div class="username">
         <a href="javascript:;">{{username}}</a>
       </div>
    </div>
  </div>
</template> 
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'order-header',
    props:{
      title:String
    },
    computed:{
      ...mapState(['username'])
    },
  }
</script>

<style lang="scss">
  .order-header{
    padding: 30px 0;
    border-bottom:2px solid #f60;
    .header-logo{
      float: left;
    }
    .title, .username{
      display: inline-block;
      height: 55px;
      line-height: 55px;
    }
    .title{
      float: left;
      margin-left: 54px;
      h2{
        font-size: 28px;
        color: #333333;
        span{
        margin-left: 17px;
        font-size: 14px;
        color: #999999;
      }
      }
    }
    .username{
      float: right;
      a{
        font-size: 16px;
        font-weight: bold;
        color:#656565;
      }
    }
  }

</style>