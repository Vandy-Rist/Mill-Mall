<template>
  <div class="order-list">
     <order-header title='订单列表'>
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="order" v-for="(order,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                订单号：{{order.orderNo}}
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                应付金额：<span class="money">{{order.payment}}</span>元
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money">{{item.currentUnitPrice}}X{{item.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-status fr">
                <a href="">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import OrderHeader from './../components/OrderHeader';
  export default {
    name: 'order-list',
    data(){
      return{
        list:[] // 订单列表
      }
    },
    components:{
      OrderHeader
    },
    mounted(){
      this.getOrderList();
    },
    methods:{
      getOrderList(){
        this.axios.get('/orders').then((res)=>{
          this.list = res.list;
        })
      }
    }
  }
</script>

<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color: $colorJ;
      padding-top: 33px;
      padding-bottom: 110px;
      .order-box{
        .order{
          @include border();
          background-color: $colorG;
          margin-bottom: 31px;
          &:last-child{
            margin-bottom: 0px;
          }
          .order-title{
            @include height(74px);
            font-size: 16px;
            padding: 0 43px;
            color: $colorC;
            background-color: $colorK;
            .item-info{
              span{
                padding: 0 9px;
              }
            }
            .money{
              font-size: 26px;
              color: $colorB;
            }
          }
          .order-content{
            padding: 0 43px;
            .good-box{
              width: 88%;
              .good-list{
                display: flex;
                align-items: center;
                height: 145px;
                .good-img{
                  width: 112px;
                  img{
                    width: 100%;
                  }
                }
                .good-name{
                  font-size: 20px;
                  color: $colorB;
                }
              }
            }
            .good-status{
              @include height(145px);
              font-size: 20px;
              a{
                color: $colorA;
              }
            }
          }
        }
      }

    }
  }


</style>
