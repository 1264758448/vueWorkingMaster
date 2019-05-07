<template>
    <div>
          <el-button @click='flag=!flag' type="primary" plain>调整</el-button>
                <div class='query' v-show='flag'>
                        <ul>
                        <li>                          
                            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                <el-form-item label="司机名称">
                                <el-input v-model="sizeForm.driverName" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-form>
                        </li>
                        <li>                          
                            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                <el-form-item label="驾驶证号">
                                <el-input v-model="sizeForm.driverJszNo" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-form>
                        </li>
                        <li>                          
                            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                <el-form-item label="身份证号">
                                <el-input v-model="sizeForm.driverSfz" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-form>
                        </li>
                        <li>                          
                            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                <el-form-item label="联系方式">
                                <el-input v-model="sizeForm.driverMobile" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-form>
                        </li>
                        <li>                          
                            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                <el-form-item label="承运商名称">
                                <el-input v-model="sizeForm.carrierName" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-form>
                        </li>
                        </ul>

                        <el-button  @click='filter' type="primary" plain>查询</el-button>
                        <el-button  @click='add' type="primary" plain>添加</el-button>
                        <el-button  @click='dele' type="primary" plain>删除</el-button>
                        <el-button  @click='bianxie' type="primary" plain>修改</el-button>
                        <el-button  @click='clearn' type="primary" plain>清除</el-button>
                </div>

              <el-table
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @row-click='aa'
                  @selection-change="handleSelectionChange">

                 <el-table-column
                    type="selection"
                    width="55">
                  </el-table-column>

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
                    prop:'addDate',
                    width:'120'
                },
            ],
             tableData: [],
             deleterr:[],
             bianji:[]
        }
    },
    created() {
        this.filter(),
        this.vHead()
    },
    methods: {
    // 获取vuex里的所有表头元素
    vHead(){
      let pc=this.$store.state.details.car
      console.log(pc,'pc')
    },
    aa(row, column, e){
          let hDatas=this.hData
          this.$store.commit("details",row)
          this.$store.commit("hDatas",hDatas)
          this.$router.push('driverD')
          console.log(row,'row')
      },
    //   全选
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
    //   获取当前点击行的信息
    handleSelectionChange(val) {
        this.multipleSelection = val;
        // 装进删除数组
        this.deleterr=val;
        this.bianji=val;
        console.log(this.bianji,'pp')
        console.log(this.deleterr,'dd')
        console.log(val,'val')
      },
       // 分页
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
   // 查询按钮事件
    filter(){
         console.log(this.sizeForm,'filter')
             this.$http.post("v1/driver/query/",this.sizeForm).then((res) => {
                  console.log(res.body.code)
                if(res.body.code === '0002' ){
                      this.$confirm('暂无信息', {
                        confirmButtonText: '确定',
                        type: 'success'
                      })
                      this.tableData=[]
                    return;
                 }else{
                      this.tableData=res.body.data.result
                 }
            })
    },
    // 添加
    add(){
      this.$router.push('driverAdd')
    },
    // 删除
    dele(){
          var ids = [];
          this.deleterr.forEach(element =>{
            ids.push(element.driverId)
          })
          console.log(ids)

            this.$http.post("http://47.100.107.137:8871/api/v1/driver/delete/",ids).then(res=>{
                console.log(res)
                 this.filter()
              })
      },
    // 编辑
    bianxie(){
               if(this.bianji.length!=1){
            this.$confirm('请至少选择一个且必须选择一个', {
                      confirmButtonText: '确定',
                      type: 'success'
                    })
                  return;
              }else{
              this.$store.commit("bianji",this.bianji)
              }
              this.$router.push('driverBianji')
              console.log('stop')
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
  width:100%;
}
.query ul{
overflow:hidden;
}
.query li{
    width:30%;
    float:left;
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