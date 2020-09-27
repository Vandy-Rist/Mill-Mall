<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo" >
         <a href="/#/index"></a>
       </div>
       <div class="title">
         <h2>{{title}}
           <span><slot name="tip"></slot></span>
         </h2>
         
       </div>
       <div class="username">
         <a href="javascript:;">jack</a>
       </div>
    </div>
  </div>
</template> 
<script>
  export default {
    name: 'order-header',
    props:{
      title:String
    }
  }
</script>

<style lang="scss">
  .order-header{
    padding: 30px 0;
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