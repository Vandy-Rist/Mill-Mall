<template>
  <div class="modal" v-show="true">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
      <span>消息</span>
      <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <div class="btn-group">
          <a href="javascript:;" class="btn" @click="$emit('submit')">确定</a>
          <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">取消</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'modal',
    props:{
      // 弹框类型：小small、中middle、大large、表单form
      modalType:{
        type:String,
        default:'form'
      },
      // 弹框标题
      title:String,
      // 按钮类型: 1:确定按钮 2：取消按钮 3：确定取消
      btnType:String,
      sureText:{
        type:String,
        default:'确定'
      },
      cacelText:{
        type:String,
        default:'取消'
      },
      showModal:Boolean
    }
  }
</script>

<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/modal.scss';
</style>