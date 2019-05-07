<template>
    <div>
            <el-button @click='add'>保存</el-button>
            <el-button >返回</el-button>

       <ul>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="项目编号">
                      <el-input v-model="sizeForm.projectCode"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="项目名称">
                      <el-input v-model="sizeForm.projectName"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="项目简称">
                      <el-input v-model="sizeForm.projectShortname"></el-input>
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
            "addName": "",
            "addTime": "",
            "addUserid": "",
            "comId": "",
            "dspCode": "",
            "dspName": "",
            "id": "",
            "projectCode": "",
            "projectName": "",
            "projectShortname": "",
            "projectState": 0,
            "uDelete": 0,
            "uTime": "",
            "updName": "",
            "updTime": "",
            "updUserid": ""  
        }
      }
    },
     methods:{
         add(){
             this.$http.post("http://192.168.0.107:8871/api/v1/project/insert/",{
                             "addName":this.sizeForm.addName,
                             "addTime": this.sizeForm.addTime,
                             "addUserid":this.sizeForm.addUserid,
                             "comId": this.sizeForm.comId,
                             "id": this.sizeForm.id,
                             "projectCode": this.sizeForm.projectCode,
                             "projectName": this.sizeForm.projectName,
                             "projectShortname": this.sizeForm.projectShortname,
                             "projectState": this.sizeForm.projectState,
                             "uDelete": this.sizeForm.uDelete,
                             "uTime": this.sizeForm.uTime,
                             "updName": this.sizeForm.updName,
                             "updTime":  this.sizeForm.updTime,
                             "updUserid":  this.sizeForm.updUserid  
             }).then(res => {
                     this.$router.push('xiangmu')
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