<template>
    <div>
            <el-button @click='goBack'>返回</el-button>
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>项目管理</span>
                </div>                                

           
              
                  <p>密码:{{sizeForm.custPassword}}</p>
                  <p>邮编:{{sizeForm.custZip}}</p>
                   <p>流水单号前缀:{{sizeForm.custPre}}</p>
                  <p>邮编:{{sizeForm.custZip}}</p>
                   <p>备注:{{sizeForm.custMemo}}</p>
                  <p>委托客户简称:{{sizeForm.custShortname}}</p>
                  <p>传真号码:{{sizeForm.custFax}}</p>
                   <p>是否定位:{{sizeForm.custIsPosition}}</p>
                  <p>委托客户名称:{{sizeForm.custName}}</p>
                   <p>登录账号:{{sizeForm.custLoginName}}</p>
                  <p>联系电话:{{sizeForm.custPhone}}</p>
                   <p>地址:{{sizeForm.custAddress}}</p>
                  <p>添加人:{{sizeForm.custAddMan}}</p>


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
            this.$router.go(-1)
        },
        get(){
            let details= this.$store.state.details.details
            this.$http.post(`v1/customer/findByCustId?custId=`+details.custId).then(res=>{
                console.log(res,'findbyId')
                  this.sizeForm=res.body.data
            })
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
    width:50%;
  }
</style>