<template>
    <div>
        <el-button @click='flag=!flag' type="primary" plain>调整</el-button>
                <div class='query' v-show='flag'>
                        <ul>
                        <li>                          
                            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                <el-form-item label="承运商名称">
                                <el-input v-model="sizeForm.carrierName" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-form>
                        </li>
                        <li>                          
                            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                <el-form-item label="承运商简称">
                                <el-input v-model="sizeForm.carrierShortName" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-form>
                        </li>
                        <li>                          
                            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                <el-form-item label="登录账号">
                                <el-input v-model="sizeForm.carrierLoginName" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-form>
                        </li>
                        </ul>
                         <el-button  @click='filter' type="primary" plain>查询</el-button>
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
             sizeForm: {
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
            },
             hData:[
                {label:'承运商名称',
                    prop:'carrierName',
                    width:'120'
                },
                {label:'承运商简称',
                    prop:'carrierShortName',
                    width:'120'
                },
                {label:'登录账号',
                    prop:'carrierLoginName',
                    width:'120'
                },
                {label:'联系人电话',
                    prop:'carrierMobile',
                    width:'120'
                },
                {label:'联系人',
                    prop:'carrierContactman',
                    width:'120'
                },
                {label:'联系人职务',
                    prop:'carrierDuty',
                    width:'120'
                },
                    {label:'添加人',
                    prop:'addName',
                    width:'120'
                },
                {label:'添加时间',
                    prop:'addDate',
                    width:'120'
                },
            ],
             tableData: [],
             deleterr:[],
             bianji:[],
             flags:false,
        }
    },
    created() {
        this.filter()
    },
     props:['vSmallOne'],
    methods: {
      aa(row){
          console.log(row)
          this.$emit('one',row.carrierName)
          this.$emit('two',row)
          this.$emit('flagOne',this.flags)
      },

    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
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
             this.$http.post("v1/carrier/query/",this.sizeForm).then((res) => {
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
    add(){
      this.$router.push('carrier')
    },

    dele(){
          var ids = [];
          this.deleterr.forEach(element =>{
            ids.push(element.carrierId)
          })
          console.log(ids)

            this.$http.post("http://47.100.107.137:8871/api/v1/carrier/delete/",ids).then(res=>{
                console.log(res)
                 this.filter()
              })
      },
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
              this.$router.push('informationBianji')
              console.log('stop')
      },
      clearn(){
      let a ={
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