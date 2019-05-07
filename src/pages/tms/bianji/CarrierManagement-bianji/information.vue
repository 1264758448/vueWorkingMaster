<template>
 <div>
            <el-button @click='unpata'>保存</el-button>
            <el-button @click='goBack'>返回</el-button>
   <ul>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="密码">
                      <el-input v-model="sizeForm.carrierPassw"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="邮编">
                      <el-input v-model="sizeForm.carrierMail"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="承运商介绍">
                      <el-input v-model="sizeForm.carrierDesc"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
                        <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="税务登记证号">
                      <el-input v-model="sizeForm.carrierTax"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="开户行">
                      <el-input v-model="sizeForm.carrierBank"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="承运商简称">
                      <el-input v-model="sizeForm.carrierShortName"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
             <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="联系人电话">
                      <el-input v-model="sizeForm.carrierMobile"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="发人代表姓名">
                      <el-input v-model="sizeForm.carrierRoadTransportPath"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="联系人">
                      <el-input v-model="sizeForm.carrierContactman"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="登录账号">
                      <el-input v-model="sizeForm.carrierLoginName"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="公司网址">
                      <el-input v-model="sizeForm.carrierUrl"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="组织机构代号">
                      <el-input v-model="sizeForm.carrierRegid"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
             <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="公司邮箱">
                      <el-input v-model="sizeForm.carrierPy"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
             <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="承运商地址">
                      <el-input v-model="sizeForm.carrierAddress"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="联系人职务">
                      <el-input v-model="sizeForm.carrierDuty"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="承运商名称">
                      <el-input v-model="sizeForm.carrierName"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
             <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="公司备注">
                      <el-input v-model="sizeForm.carrierLegalPerson"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
             <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="营业执照号">
                      <el-input v-model="sizeForm.carrierLicence"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
             <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="银行账号">
                      <el-input v-model="sizeForm.carrierBankno"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
             <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="座机号码">
                      <el-input v-model="sizeForm.carrierTelphone"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="承运商英文名字">
                      <el-input v-model="sizeForm.carrierEnName"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
       </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
                sizeForm:{}
        }
    },
      created() {
      this.cc()
    },
    methods: {
      cc(){
          this.sizeForm=this.$store.state.bianji.bianjis[0]
          console.log(this.sizeForm,'size')
        },
    unpata(){
        this.$http.post("v1/carrier/update/",this.sizeForm).then(res=>{
            console.log(res,'unpata')
                  if(res.status==200){
                    this.$router.push('/CarrierManagement/information')
                }else{
                    console.log('添加失败')
                }
        }) 
        //  this.$router.push('goods')
      },

        goBack(){
            
        }

    }
}
</script>
<style>
  *{
        list-style:none;
    }
  ul li{
    float:left;
    width:25%
}
ul{
    overflow:hidden;
    width:80%;
}
</style>