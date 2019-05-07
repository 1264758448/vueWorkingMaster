<template>
    <div>
            <el-button @click='goBack'>返回</el-button>

                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>货品管理</span>
                </div>                                
        
                      <p>货品简称:{{sizeForm.goodsShortName}}</p>
                      <p>货品品牌:{{sizeForm.goodsBrand}}</p>
                      <p>长度(米):{{sizeForm.goodsLength}}</p>
                      <p>高度(米):{{sizeForm.goodsHeight}}</p>
                      <p>重量(吨):{{sizeForm.goodsWeight}}</p>
                      <p>货品编号:{{sizeForm.goodsCode}}</p>

                      <p>货物名称:{{sizeForm.goodsCnName}}</p>
                      <p>客户名称:{{sizeForm.custName}}</p>
                      <p>数量(箱子/件):{{sizeForm.goodsUnit}}</p>
                      <p>宽度(米):{{sizeForm.goodsWidth}}</p>
                      <p>体积(立方):{{sizeForm.goodsVolume}}</p>
                      <p>备注:{{sizeForm.goodsText}}</p>

</el-card>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        sizeForm: {
        },
      // 控制操作页显示或者隐藏     
        flags:false
      }
    },
    created() {
      this.get()
    },
    methods: {
 
        goBack(){
            his.$router.go(-1)
        },
        get(){
            let details= this.$store.state.details.details
            this.sizeForm=details
            console.log( this.sizeForm,'数据77777')
        }
    }
  }
  
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    margin:auto;
  }
  p{
    float:left;
    width:50%
  }
</style>