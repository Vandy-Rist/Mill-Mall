<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div> 
    <div class="footer-link">
      <a href="https://github.com/Vandy-Rist" target="_blank">Github主页</a><span>|</span>
      <a href="https://vandy-rist.github.io/" target="_blank">Hexo博客</a><span>|</span>
      <a href="javascript:;" target="_blank">我的简历</a><span>|</span>
       <a href="javascript:;" target="_blank">项目练习</a><span>|</span>
      <a href="javascript:;" target="_blank">谢谢关注</a>
    </div>
    <div class="copyright">Copyright ©2020
      <span class="domain">mi.futurefe.com</span>
      All Rights Reserved.
    </div>
  </div>
 
</template> 
<script>
  export default {
    name: 'nav-footer'
  }
</script>
<style lang="scss" scoped>
  @import './../assets/scss/config.scss';
  .footer{
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color: $colorD;
    font-size: 16px;
    text-align: center;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link{
      a{
        color: #999999;
        display: inline-block;
      }
      span{
        margin: 0 10px;
      }
      margin-bottom: 13px;
    }
    .copyright{
      .domain{
        color: $colorA;
      }
    }
  }

</style>