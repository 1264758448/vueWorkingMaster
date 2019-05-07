<template>
    <div>
            <el-button @click='add'>保存</el-button>
            <el-button >返回</el-button>

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
    methods: {
        add(){
             this.$http.post("http://47.100.107.137:8871/api/v1/carrier/insert/",{
                    // addDate:this.sizeForm.addDate,
                    addName:this.sizeForm.addName,
                    // addUserid:this.sizeForm.addUserid,
                    carrierAddress:this.sizeForm.carrierAddress,
                    // carrierBank:this.sizeForm.carrierBank,
                    // carrierBankno:this.sizeForm.carrierBankno,
                    // carrierContactman:this.sizeForm.carrierContactman,
                    // carrierDesc:this.sizeForm.carrierDesc,
                    // carrierDuty:this.sizeForm.carrierDuty,
                    // carrierEnName:this.sizeForm.carrierEnName,
                    carrierId:this.sizeForm.carrierId,
                    // carrierLegalPerson:this.sizeForm.carrierLegalPerson,
                    // carrierLicence:this.sizeForm.carrierLicence,
                    // carrierLicencePath:this.sizeForm.carrierLicencePath,
                    carrierLoginName:this.sizeForm.carrierLoginName,
                    // carrierLogo:this.sizeForm.carrierLogo,
                    carrierMail:this.sizeForm.carrierMail,
                    carrierMobile:this.sizeForm.carrierMobile,
                    carrierName:this.sizeForm.carrierName,
                    carrierPassw:this.sizeForm.carrierPassw,
                    // carrierPy:this.sizeForm.carrierPy,
                    // carrierRegid:this.sizeForm.carrierRegid,
                    // carrierRegidPath:this.sizeForm.carrierRegidPath,
                    // carrierRoadTransportPath:this.sizeForm.carrierRoadTransportPath,
                    carrierShortName:this.sizeForm.carrierShortName,
                    // carrierState:0,
                    // carrierTax:this.sizeForm.carrierTax,
                    // carrierTaxPath:this.sizeForm.carrierTaxPath,
                    // carrierTelphone:this.sizeForm.carrierTelphone,
                    // carrierText:this.sizeForm.carrierText,
                    // carrierUrl:this.sizeForm.carrierUrl,
                    // comId:this.sizeForm.comId,
                    // deptId:this.sizeForm.deptId ,
                    // dspCode:this.sizeForm.dspCode,
                    // dspName:this.sizeForm.dspName,
                    // uDelete:0,
                    // uTime:this.sizeForm.uTime,
                    // updDate:this.sizeForm.updDate,
                    // updName:this.sizeForm.updName
             }).then(res => {
                  if(this.sizeForm.addUserid===""){
                    // this.sizeForm.addUserid='请输入流水单号'
                    return
                  }
                  if(this.sizeForm.carrierState===""){
                    // this.sizeForm.addUserid='请输入委托客户编号'
                    return
                  }
                  if(this.sizeForm.carrierShortName===""){
                    // this.sizeForm.addUserid='请输入委托客户简称'
                    return
                  }
                  if(this.sizeForm.addName===""){
                    // this.sizeForm.addUserid='请输入委托客户名称'
                    return
                  }
                  if(this.sizeForm.carrierLoginName===""){
                    // this.sizeForm.addUserid='请输入登录账号'
                    return
                  }
                  if(this.sizeForm.carrierMobile===""){
                    // this.sizeForm.addUserid='请输入联系电话'
                    return
                  }
                  
                if(res.status==200){
                    this.$router.push('/company/goods')
                }else{
                    console.log('添加失败')
                }
            });
        }
    },
}
</script>
<style>
    *{
        list-style:none;
    }
</style>