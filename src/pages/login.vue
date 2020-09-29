<template>
  <div class="login">
    <div class="container">
      <a href="/#/index">
        <img src="/imgs/login-logo.png" alt="">
      </a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="account">账号登录</span>
            <span class="line">|</span>
            <span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" v-model="username" placeholder="请输入账号">
          </div>
          <div class="input">
            <input type="password" v-model="password" placeholder="请输入密码">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="phone" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码</div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
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

  </div>
</template>

<script>
  // import {mapActions} from 'vuex';
  export default {
    name: 'login',
    data(){
      return{
        username:'',
        password:'',
        userId:''
      }
    },
    methods:{
      login(){
        let { username,password } = this;
        this.axios.post('/user/login',{
          username,
          password
        }).then((res)=>{
          this.$cookie.set('userId',res.id,{expires: '1D'});
          //TODO 保存用户名
          this.$store.dispatch('saveUserName',res.username);
          this.$router.push('/index')
        })
      },
      // ...mapActions(['saveUserName']),
      register(){
        this.axios.post('/user/register',{
          username : 'admin1',
          password : 'admin1',
          email : 'email@163.com'
        }).then(()=>{
          this.$message.success('注册成功');
        })
      }
      
    }
  }
</script>

<style lang="scss">
 @import './../assets/scss/config.scss';
  .login{
    &>.container{
      height: 113px;
      img{
        width: auto;
        height: 100%;
      }
    }
    .wrapper{
      background: url('/imgs/login-bg.jpg') no-repeat center;
      .container{
        height: 576px;
        .login-form{
          box-sizing: border-box;
          width: 410px;
          height: 510px;
          padding-left: 31px;
          padding-right: 31px;
          background-color:$colorG;
          position: absolute;
          right: 0;
          bottom: 29px;
          h3{
            font-size: 24px;
            line-height: 23px;
            text-align: center;
            margin: 40px auto 49px;
            .account{
              color:  $colorA ;
            }
            .line{
              margin:auto 34px
            }
          }
          .input{
            width: 348px;
            height: 50px;
            display: inline-block;
            margin-bottom: 20px;
            border: 1px solid $colorH;
            input{
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              border: none;
              padding: 18px;
            }
          }
          .btn{
            width: 100%;
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            margin-top: 10px;
          }
          .tips{
            margin-top: 14px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            cursor: pointer;
            .phone{
              color:$colorA;
            }
            .reg{
              color: #9A9A9A;
            }
            span{
              margin: 0 7px;
            }
          }

        }
      }
    }
    .footer{
      height: 100px;
      padding-top: 60px;
      background-color: $colorG;
      color: $colorD;
      font-size: 14px;
      text-align: center;
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
    }

  }

</style>