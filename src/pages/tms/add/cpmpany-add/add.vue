<template>
    <div>
            <el-button @click='add'>保存</el-button>
            <el-button @click='back'>返回</el-button>

       <ul>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="密码">
                      <el-input v-model="sizeForm.custPassword"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="邮编">
                      <el-input v-model="sizeForm.custZip"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="流水单号前缀">
                      <el-input v-model="sizeForm.custPre"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
                        <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="备注">
                      <el-input v-model="sizeForm.custMemo"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                   <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="委托客户简称">
                      <el-input v-model="sizeForm.custShortname"></el-input>
                    </el-form-item>
                  </el-form>
                  
            </li>
        
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="传真号码">
                      <el-input v-model="sizeForm.custFax"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="委托客户名称">
                      <el-input v-model="sizeForm.custName"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="登录账号">
                      <el-input v-model="sizeForm.custLoginName"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="联系电话">
                      <el-input v-model="sizeForm.custPhone"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
             <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="地址">
                      <el-input v-model="sizeForm.custAddress"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
             <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="添加人">
                      <el-input v-model="sizeForm.custAddMan"></el-input>
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
                "comId": null,
                "countType": null,
                "custAddMan": null,
                "custAddTime": null,
                "custAddress": null,
                "custAppBackground": null,
                "custAvator": null,
                "custCode": null,
                "custFax": null,
                "custId": null,
                "custIsNotice": null,
                "custIsPosition": null,
                "custLoginName": null,
                "custMemo": null,
                "custName": null,
                "custPassword": null,
                "custPhone": null,
                "custPre": null,
                "custShortname": null,
                "custSign": null,
                "custState": null,
                "custTarget": null,
                "custZip": null,
                "deptId": null,
                "dspCode": null,
                "dspName": null,
                "goodsClass": null,
                "orgId": null,
                "uDelete": null,
                "uTime": null
            },           
        }
    },
    methods: {
        add(){
             this.$http.post("v1/customer/insert/",this.sizeForm).then(res => {
                        console.log(res,'++')
                if(res.status==200){
                    this.$router.push('/company/goods')
                }else{
                    console.log('添加失败')
                }
            });
        },
        back(){
           this.$router.go(-1)
        }
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