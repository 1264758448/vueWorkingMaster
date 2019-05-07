<template>
    <div>
            <el-button @click='goBack' >返回</el-button>

                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>司机明细</span>
                </div>
              <div class='pDad'>
                <p>第二联系方式:{{sizeForm.driverMobileSec}}</p>
                <p>第三联系方式:{{sizeForm.driverMobileThr}}</p>
                <p>驾驶证号:{{sizeForm.driverJszNo}}</p>
                <p>开户城市:{{sizeForm.cardCity}}</p>
                <p>承运商名称:{{sizeForm.carrierName}}</p>
                <p>性别:{{sizeForm.driverGender}}</p>
                <p>身份证号:{{sizeForm.driverSfz}}</p>
                <p>婚姻情况:{{sizeForm.driverMariiage}}</p>
                <p>紧急联系人:{{sizeForm.urgentMan}}</p>
                <p>熟悉城市一:{{sizeForm.city01}}</p>
                <p>熟悉城市二:{{sizeForm.city02}}</p>
                <p>开户银行:{{sizeForm.cardBank}}</p>
                <p>开户人:{{sizeForm.cardName}}</p>
                 <p>备注:{{sizeForm.driverText}}</p>
                  <p>司机姓名:{{sizeForm.driverName}}</p>
                <p>出生日期:{{sizeForm.driverBirthday}}</p>
                 <p>家庭住址:{{sizeForm.driverAddress}}</p>
                 <p>联系方式:{{sizeForm.driverMobile}}</p>

                  <p>紧急联系人电话:{{sizeForm.urgentMobile}}</p>
                  <p>开户省份:{{sizeForm.cardProvince}}</p>
                  <p>银行账号:{{sizeForm.bankNo}}</p>
                </div>
                <el-collapse v-model="sizeForm" accordion>
                  <el-collapse-item title="关联车牌号" name="1">
                    <div >该司机关联车牌号如下</div>
                    <ul>
                      <li
                       v-for="(item,index) in car"
                       :key='index'
                      >车牌号:{{item.truckCode}}</li>
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
        // 车辆
        car:[]
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
            this.$http.post( `v1/driver/qryDetail?driverId=`+details.driverId).then(res=>{
              console.log(res.body.data.truckDriverVos,'get')
                this.sizeForm=res.body.data
                this.car=res.body.data.truckDriverVos
            })
            this.sizeForm=details
            console.log( this.sizeForm,'sizesize')
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

  p{
    float:left;
    width:50%;
    font-size:14px;
  }
  .pDad{
    overflow:hidden;
  }
</style>