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
                                <el-form-item label="车辆种类">
                                <el-input v-model="sizeForm.truckType" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-form>
                        </li>
                        <li>                          
                            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                <el-form-item label="车牌号">
                                <el-input v-model="sizeForm.truckCode" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-form>
                        </li>
                         <li>                          
                            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                <el-form-item label="载重量">
                                <el-input v-model="sizeForm.truckLoad" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-form>
                        </li>
                        </ul>
                       <el-button  @click='filter' type="primary" plain>查询</el-button>
                        <el-button  @click='add' type="primary" plain>添加</el-button>
                        <el-button  @click='dele' type="primary" plain>删除</el-button>
                        <el-button  @click='bianxie' type="primary" plain>修改</el-button>
                        <el-button  @click='clean' type="primary" plain>清除</el-button>
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
            "carrierName": null,
            "page": {
              "endRow": null,
              "pageNum":20,
              "pageSize":20,
              "pages": null,
              "startRow": null,
              "total": null
            },
            "truckCheck": null,
            "truckCode": null,
            "truckLoad": null,
            "truckSource": null,
            "truckState": null,
            "truckType": null,
            "uDelete": null
          },
             hData:[
                {label:'承运商名称',
                    prop:'carrierName',
                    width:'120'
                },
                {label:'车牌号',
                    prop:'truckCode',
                    width:'120'
                },
                {label:'车辆种类',
                    prop:'truckType',
                    width:'120'
                },
                {label:'车辆长度',
                    prop:'truckLength',
                    width:'120'
                },
                {label:'载重量',
                    prop:'truckLoad',
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
        this.filter()
    },
    methods: {
    aa(row, column, e){
          let hDatas=this.hData
          this.$store.commit("details",row)
          this.$store.commit("hDatas",hDatas)
          this.$router.push('carD')
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
             this.$http.post("v1/truck/query/",this.sizeForm).then((res) => {
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
      this.$router.push('carAdd')
    },
    // 删除
    dele(){
          var ids = [];
          this.deleterr.forEach(element =>{
            ids.push(element.truckId)
          })
          console.log(ids)

            this.$http.post("v1/truck/delete/",ids).then(res=>{
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
              this.$router.push('carBianJi')
              console.log('stop')
            },
  clean(){
    let a={
            "carrier_name": null,
                "page": {
                    "endRow": null,
                    "pageNum": null,
                    "pageSize": null,
                    "pages": null,
                    "startRow": null,
                    "total": null
                },
                "truck_check": null,
                "truck_code": null,
                "truck_load": null,
                "truck_source": null,
                "truck_state": null,
                "truck_type": null,
                "uDelete": null
          }

      this.sizeForm=a
  }
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