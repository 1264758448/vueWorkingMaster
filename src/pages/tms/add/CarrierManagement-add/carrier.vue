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
                        <el-dialog
                            title="提示"
                            :visible.sync="dialogVisible4"
                            width="60%">
                                    <cy
                                       :vSmallOne='vSmallOne'
                                       v-on:two='twos'
                                       v-on:flagOne='flagsOne'
                                    ></cy>
                        </el-dialog>

                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="承商名称">
                              <div class='ones' @click='twoE'>
                                <el-input v-model="sizeForm.carrierName" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                              </div>
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
            vSmallOne:this.$store.state.details.cy,
            dialogVisible4:false,
            sizeForm:   {
                "addDate": null,
                "addName": null,
                "addUserid": null,
                "carrierAddress": null,
                "carrierBank": null,
                "carrierBankno": null,
                "carrierContactman": null,
                "carrierDesc": null,
                "carrierDuty": null,
                "carrierEnName": null,
                "carrierId": null,
                "carrierLegalPerson": null,
                "carrierLicence": null,
                "carrierLicencePath": null,
                "carrierLoginName": null,
                "carrierLogo": null,
                "carrierMail": null,
                "carrierMobile": null,
                "carrierName": null,
                "carrierPassw": null,
                "carrierPy": null,
                "carrierRegid": null,
                "carrierRegidPath": null,
                "carrierRoadTransportPath": null,
                "carrierShortName": null,
                "carrierState": null,
                "carrierTax": null,
                "carrierTaxPath": null,
                "carrierTelphone": null,
                "carrierText": null,
                "carrierUrl": null,
                "comId": null,
                "deptId": null,
                "dspCode": null,
                "dspName": null,
                "uDelete": null,
                "uTime": null,
                "updDate": null,
                "updName": null
                }
        }
    },
    methods: {
          // 承运商
     twos(data){
            console.log(data,'data')
            this.sizeForm.carrierName=data.carrierName
            this.sizeForm.carrierId=data.carrierId
        },

    twoE(){
            this.dialogVisible4=true;
        },
    flagsOne(val){
            this.dialogVisible4=val
        },
 
    add(){
             this.$http.post("v1/carrier/insert/",this.sizeForm).then(res=>{
                 console.log(res)
                 if(res.status==200){
                     this.$router.push('information')
                 }
             })
        },

  

    },
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