<template>
    <div>
            <el-button @click='unpata'>修改</el-button>
            <el-button @click='fanhui'>返回</el-button>

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
            this.$http.post("v1/project/update/",this.sizeForm).then(res=>{
                console.log(res,'更改')
                  if(res.status==200){
                    this.$router.push('/company/xiangmu')
                }else{
                    console.log('添加失败')
                }
            })
        },
        fanhui(){
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