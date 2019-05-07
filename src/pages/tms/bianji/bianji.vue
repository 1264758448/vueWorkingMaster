<template>
    <div>
            <el-button @click='unpata'>保存</el-button>
            <el-button>返回</el-button>

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
                    <el-form-item label="流水单号前缀">
                      <el-input v-model="sizeForm.addUserid"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
                        <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="备注">
                      <el-input v-model="sizeForm.carrierLicencePath"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="*委托客户编号">
                      <el-input v-model="sizeForm.carrierState"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="委托客户简称">
                      <el-input v-model="sizeForm.carrierShortName"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
                        <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="货物类别">
                      <el-input v-model="sizeForm.carrierName"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="传真号码">
                      <el-input v-model="sizeForm.carrierLicencePath"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="是否定位">
                      <el-input v-model="sizeForm.carrierState"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
                        <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="委托客户名称">
                      <el-input v-model="sizeForm.addName"></el-input>
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
                    <el-form-item label="联系电话">
                      <el-input v-model="sizeForm.carrierMobile"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
             <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="地址">
                      <el-input v-model="sizeForm.carrierAddress"></el-input>
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
             sizeForm: {
                    addDate: "",
                    addName: "",
                    addUserid: "",
                    carrierAddress: "",
                    carrierBank: "",
                    carrierBankno: "",
                    carrierContactman: "",
                    carrierDesc:"",
                    carrierDuty:"" ,
                    carrierEnName:"" ,
                    carrierId: "",
                    carrierLegalPerson: "",
                    carrierLicence: "",
                    carrierLicencePath:"" ,
                    carrierLoginName:"" ,
                    carrierLogo: "",
                    carrierMail:"" ,
                    carrierMobile:"" ,
                    carrierName:"" ,
                    carrierPassw:"" ,
                    carrierPy:"" ,
                    carrierRegid:"" ,
                    carrierRegidPath: "",
                    carrierRoadTransportPath:"" ,
                    carrierShortName:"" ,
                    carrierState: 0,
                    carrierTax: "",
                    carrierTaxPath:"" ,
                    carrierTelphone:"" ,
                    carrierText:"" ,
                    carrierUrl:"" ,
                    comId: "",
                    deptId:"" ,
                    dspCode: "",
                    dspName: "",
                    uDelete: 0,
                    uTime:"" ,
                    updDate:"" ,
                    updName: ""
            },  
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
        this.$http.post("http://47.100.107.137:8871/api/v1/carrier/update/",this.sizeForm).then(res=>{
            console.log(res,'unpata')
        }) 
        //  this.$router.push('goods')
      },
    }
}
</script>
<style>
  *{
        list-style:none;
    }
</style>