<template>
  <div class="no-data">
    <img src="/imgs/icon-no-data.png" alt="">
    <p>当前没有提交的记录</p>
  </div>
</template>

<script>
  export default {
    name: 'no-data'
  }
</script>

<style lang="scss">
  .no-data{
    text-align: center;
    color: #999999;
    font-size: 20px;
    margin: 50px auto;
    img{
      width: 240px;
      height: 180px;
      margin-bottom:30px;
    }
  }
</style>
