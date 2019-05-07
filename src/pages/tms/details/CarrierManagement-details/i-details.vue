<template>
    <div>
            <el-button @click='goBack' >返回</el-button>

                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>承运商信息</span>
                </div>
                <p>密码:{{sizeForm.carrierPassw}}</p>
                <p>邮编:{{sizeForm.carrierMail}}</p>
                <p>承运商介绍:{{sizeForm.carrierDesc}}</p>
                <p>税务登记证号:{{sizeForm.carrierTax}}</p>
                <p>承运商简称:{{sizeForm.carrierShortName}}</p>
                <p>联系人电话:{{sizeForm.carrierMobile}}</p>
                <p>发人代表姓名:{{sizeForm.carrierRoadTransportPath}}</p>
                <p>联系人:{{sizeForm.carrierContactman}}</p>
                <p>公司网址:{{sizeForm.carrierUrl}}</p>
                <p>组织机构代号:{{sizeForm.carrierRegid}}</p>
                <p>公司邮箱:{{sizeForm.carrierPy}}</p>

                <p>承运商地址:{{sizeForm.carrierAddress}}</p>
                <p>联系人职务:{{sizeForm.carrierDuty}}</p>
                <p>承运商名称:{{sizeForm.carrierName}}</p>
                <p>公司备注:{{sizeForm.carrierLegalPerson}}</p>

                
                <p>营业执照号:{{sizeForm.carrierLicence}}</p>
                <p>银行账号:{{sizeForm.carrierBankno}}</p>
                <p>座机号码:{{sizeForm.carrierTelphone}}</p>
                <p>承运商英文名字:{{sizeForm.carrierEnName}}</p>
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
            this.$http.post('v1/carrier/query',{
              carrierId:details.carrierId
            }).then(res=>{
                    this.sizeForm=res.body.data.result[0]
                    console.log(res,'99999999999')
            })
            // this.sizeForm=details
            console.log(details,'dadadada')
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
</style>