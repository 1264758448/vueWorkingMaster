<template>
    <div>
            <el-button @click='goBack' >返回</el-button>

                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>车辆明细</span>
                </div>
              <div class='box'>
                <p>车辆种类:{{sizeForm.truckType}}</p>
                 <p>车架号:{{sizeForm.truckFrameCode}}</p>
                  <p>车辆高度(米):{{sizeForm.truckHeight}}</p>
                   <p>车辆描述:{{sizeForm.truckDescription}}</p>
                    <p>承运商名称:{{sizeForm.carrierName}}</p>
                   <p>燃油种类:{{sizeForm.truckFuelType}}</p>
                    <p>车辆长度(米):{{sizeForm.truckLength}}</p>
                   <p>车辆容积(立方米):{{sizeForm.truckVolume}}</p>
                   <p>车牌号:{{sizeForm.truckCode}}</p>
                    <p>载重量:{{sizeForm.truckLoad}}</p>
                     <p>车辆品牌:{{sizeForm.truckBrand}}</p>
                      <p>营运证号:{{sizeForm.truckTaxiLicense}}</p>
                     <p>车辆宽度(米):{{sizeForm.truckWidth}}</p>
                     <p>车辆发动机号:{{sizeForm.truckEngine}}</p>
                </div>

              <el-collapse v-model="sizeForm" accordion>
                  <el-collapse-item title="关联车牌号" name="1">
                    <div >该车辆关联司机如下</div>
                    <ul>
                      <li>司机:pc</li>
                    </ul>
                  </el-collapse-item>
              </el-collapse>
</el-card>
    </div>
</template>
<script>
  export default {
    data() {
      return {
                  sizeForm:   {
              
                },
      // 控制操作页显示或者隐藏
        flag:true,
        // ----------------------------
        // 存放多条删除数据
        deleterr:[],
        bianji:[],
      }
    },
    created() {
      this.get()
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        get(){
            let details= this.$store.state.details.details
              console.log(details,'get')
              this.$http.post(`v1/truck/qryDetail?truckId=`+details.truckId).then(res=>{
                    this.sizeForm=res.body.data
                    console.log(res,'99999999999')
            })
            // this.sizeForm=details
            console.log(   this.sizeForm,'dadadada')
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
    content: null;
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    margin:auto;
  }
  .box{
    overflow:hidden;
  }
  p{
    float:left;
    width:50%;
    font-size:14px;
  }
</style>