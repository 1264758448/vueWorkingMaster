<template>
    <div>
        <button @click='flag=!flag'>调整</button>
                <div class='query' v-show='flag'>
                        <ul>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="司机名称">
                                    <el-input v-model="sizeForm.driverName"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="驾驶证号">
                                    <el-input v-model="sizeForm.driverJszNo"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="身份证号">
                                    <el-input v-model="sizeForm.driverSfz"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="联系方式">
                                    <el-input v-model="sizeForm.driverMobile"></el-input>
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
                        </ul>
                        <button @click='filter'>查询</button>
                        <button @click='clearn'>清除</button>
                </div>

              <el-table
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @row-click='aa'>

                   <el-table-column
                    type="index"
                    width="50">
                  </el-table-column>

                  <el-table-column
                  v-for="(item,index) in hData"
                   :key='index'
                    :prop='item.prop'
                    :label='item.label'
                     show-overflow-tooltip>
                  </el-table-column>
                </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // 承运商
         vSmallOne:this.$store.state.details.cy,
            dialogVisible4:false,
            // -----------------
            flag:true,
          sizeForm:{
                "addDate": null,
                "addName": null,
                "addUserid": null,
                "bankNo": null,
                "basicTruckDrivers": [
                    {
                    "addDate": null,
                    "addName": null,
                    "addUserid": null,
                    "comId": null,
                    "driverId": null,
                    "id": null,
                    "truckCode": null,
                    "truckId": null,
                    "uDelete": null,
                    "uTime": null
                    }
                ],
                "cardBank": null,
                "cardCity": null,
                "cardName": null,
                "cardProvince": null,
                "carrierId": null,
                "carrierName": null,
                "city01": null,
                "city02": null,
                "comId": null,
                "comPf": null,
                "driverAddress": null,
                "driverBirthday": null,
                "driverBxk": null,
                "driverCheck": null,
                "driverCredit": null,
                "driverFirst": null,
                "driverGender":null,
                "driverId": null,
                "driverJqx": null,
                "driverJsz": null,
                "driverJszNo": null,
                "driverMariiage": null,
                "driverMobile": null,
                "driverMobileSec": null,
                "driverMobileThr": null,
                "driverName": null,
                "driverNum": null,
                "driverPassword": null,
                "driverSfz": null,
                "driverSource": null,
                "driverState": null,
                "driverText": null,
                "driverXsz": null,
                "driverXszCopy": null,
                "driverYyz": null,
                "driverZgz": null,
                "originalId": null,
                "sfzBack": null,
                "sfzFace": null,
                "uDelete": null,
                "uTime": null,
                "updDate": null,
                "updName": null,
                "urgentMan": null,
                "urgentMobile": null,
                "wxNumber": null
            },
             hData:[
                {label:'承运商名称',
                    prop:'carrierName',
                    width:'120'
                },
                {label:'司机名称',
                    prop:'driverName',
                    width:'120'
                },
                {label:'身份证号',
                    prop:'driverSfz',
                    width:'120'
                },
                {label:'驾驶证号',
                    prop:'driverJszNo',
                    width:'120'
                },
                {label:'联系方式',
                    prop:'driverMobile',
                    width:'120'
                },
                {label:'添加时间',
                    prop:'time',
                    width:'120'
                },
            ],
             tableData: [],
             deleterr:[],
             bianji:[],
             flag:false
        }
    },
    created() {
        this.filter(),
        this.vHead()
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

    // 获取vuex里的所有表头元素
    vHead(){
      let pc=this.$store.state.details.car
      console.log(pc,'pc')
    },
    aa(row){
          console.log(row,'driver-row')
          this.$emit('dv',row)
          this.$emit('flagsTwo',this.flag)
      },
   // 查询按钮事件
    filter(){
             this.$http.post("v1/driver/query/",this.sizeForm).then(res => {
             console.log(res,'query')
             if(res.status==200){
               console.log(res)
                 this.tableData=res.body.data.result
                  console.log(this.tableData,'tableData')
             }else{
                 console.log('查询失败')
             }
         });
    },

      clearn(){
      let a ={
           "addDate": null,
                "addName": null,
                "addUserid": null,
                "driverAddress": null,
                "driverBank": null,
                "driverBankno": null,
                "driverContactman": null,
                "driverDesc": null,
                "driverDuty": null,
                "driverEnName": null,
                "driverId": null,
                "driverLegalPerson": null,
                "driverLicence": null,
                "driverLicencePath": null,
                "driverLoginName": null,
                "driverLogo": null,
                "driverMail": null,
                "driverMobile": null,
                "driverName": null,
                "driverPassw": null,
                "driverPy": null,
                "driverRegid": null,
                "driverRegidPath": null,
                "driverRoadTransportPath": null,
                "driverShortName": null,
                "driverState": null,
                "driverTax": null,
                "driverTaxPath": null,
                "driverTelphone": null,
                "driverText": null,
                "driverUrl": null,
                "comId": null,
                "deptId": null,
                "dspCode": null,
                "dspName": null,
                "uDelete": null,
                "uTime": null,
                "updDate": null,
                "updName": null
      }
      this.sizeForm=a
    },
  },
}
</script>
<style scoped>
 .block{
    margin:auto;
    text-align:center;
    margin-top:50px;
  }
  *{
  list-style: none;
}
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  min-height: calc(100vh - 84px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.query{
  margin:auto;
  width:80%;
}
.query li{
    width:100%;
}
.query .chose {
  margin-bottom:10px;
  padding-left:10px;
}
.query .chose span{
    width:20%;

}
.query .chose div{
    width:80%;
    margin-left:10px;
}
.query .chose input{
    width:100%;
    height:28px;
}
</style>