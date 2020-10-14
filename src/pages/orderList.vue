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
          <loading v-if="loading"></loading>
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
              <div class="good-status fr" v-if="order.status == 20">
                <a href="javascript:;">{{order.statusDesc}}</a>
              </div>
              <div class="good-status fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>
          <div class="load-more">
            <el-button type="primary" :loading="loading" @click="loadMoreList">加载更多</el-button>
          </div>
          <el-pagination v-if="false"
            class="pagination"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            :total="total"
            @current-change="pageChange">
          </el-pagination>
          <no-data v-if="!loading && list.length == 0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import OrderHeader from './../components/OrderHeader';
  import Loading from './../components/Loading';
  import NoData from './../components/NoData';
  import {Pagination,Button} from 'element-ui';
  export default {
    name: 'order-list',
    data(){
      return{
        list:[], // 订单列表
        loading:false,
        pageNum:1,
        total:0,
        pageSize:10
      }
    },
    components:{
      OrderHeader,
      Loading,
      NoData,
      [Pagination.name]:Pagination,
      [Button.name]:Button
    },
    mounted(){
      this.getOrderList();
    },
    methods:{
      getOrderList(){
        this.loading = true;
        this.axios.get('/orders',{
          params:{
            pageNum:this.pageNum,
            pageSize:1
          }
        }).then((res)=>{
          this.loading = false;
          this.list = this.list.concat(res.list);
          this.total = res.total;
        }).catch(()=>{
          this.loading = false;
        })
      },
      loadMoreList(){
        this.pageNum++;
        this.getOrderList();
      },
      pageChange(pageNum){
        this.pageNum = pageNum;
        this.getOrderList();
      },
      goPay(orderNo){
        //路由跳转的三种方式
        // this.$router.push('/order/pay');

        // this.$router.push({
        //   name: 'order-pay',
        //   query:{
        //     orderNo
        //   }
        // })
        this.$router.push({
          path: '/order/pay',
          query:{
            orderNo
          }
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
      .pagination{
        text-align: right;
      }
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #FF6600;
        color: #FFF;
      }
      .load-more{
        text-align: center;
      }

    }
  }


</style>
