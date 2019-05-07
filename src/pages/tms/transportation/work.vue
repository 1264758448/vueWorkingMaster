<template>
  <div class="menu-container">

    <el-button @click='flag=!flag' type="primary" plain>调整</el-button>
    <div class='query' v-show='flag'>
            
             <div class='one two'>
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="委托单号">
                      <el-input v-model="sizeForm.transOrderno"></el-input>
                    </el-form-item>
                  </el-form>
              </div>
    
             <div class='one'>        
                      <li>             
                            <el-dialog
                                title="提示"
                                :visible.sync="dialogVisible6"
                                width="60%">
                                  <weituo v-on:wt='wts' v-on:flagsthree='flagthree'></weituo>
                            </el-dialog>


                          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="委托客户">
                            <div class='ones' @click='fourE'>
                                <el-input v-model="sizeForm.custName" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                            </div>
                            </el-form-item>
                        </el-form>
                    </li>

              </div>
               <div class='one'>                          
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
               </div>
          
    </div>
           <el-button  @click='filter' type="primary" plain>查询</el-button>
           

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
    data() {
      return {
        //   element组件参数
        dialogVisible: false,
        dialogVisible6: false,
        dialogVisible4:false,
        pickerOptions1: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                    picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                    }
                }]
            },
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7:'',
        // 数据存放处
        tableData: [],
        multipleSelection: [],
        // --------------------------
        sizeForm: {
            "addDateBegin": null,
            "addDateEnd": null,
            "carrierId": null,
            "carrierName": null,
            "custId": null,
            "custName": null,
            "driverId": null,
            "driverName": null,
            "id": null,
            "page": {
              "endRow": null,
              "pageNum": null,
              "pageSize": null,
              "pages": null,
              "startRow": null,
              "total": null
            },
            "projectId": null,
            "projectShortname": null,
            "recieverId": null,
            "recieverName": null,
            "shipperId": null,
            "shipperName": null,
            "transDepartBegin": null,
            "transDepartEnd":null,
            "transOrderno": null,
            "transReach": null,
            "transState": null,
            "truckCode": null,
            "uDelete": null
          },
          // ----------------------------

          // ----------------------------
        
        // 控制操作页显示或者隐藏
        flag:true,
        // ----------------------------
        // 存放多条删除数据
        deleterr:[],
        bianji:[],
        hData:[
          {label:'状态',
            prop:'transState',
            width:'120'
          },
          {label:'审核状态',
            prop:'checkStatus',
            width:'120'
          },
          {label:'委托单号',
            prop:'transOrderno',
            width:'120'
          },
          {label:'流水单号',
            prop:'transNo',
            width:'120'
          },
            {label:'委托客户',
            prop:'custName',
            width:'120'
          },
          {label:'项目简称',
            prop:'projectShortname',
            width:'120'
          },
          {label:'发货城市',
            prop:'transBCity',
            width:'120'
          },
         {label:'发货人',
            prop:'transBShipper',
            width:'120'
          },
          {label:'收货城市',
            prop:'transECity',
            width:'120'
          },
          {label:'收货人',
            prop:'transEReciever',
            width:'120'
          },
          {label:'承运商名称',
            prop:'carrierName',
            width:'120'
          },
          {label:'司机',
            prop:'driverName',
            width:'120'
          },
          {label:'司机电话',
            prop:'driverMobile',
            width:'120'
          },
          {label:'车牌号',
            prop:'truckCode',
            width:'120'
          },
          {label:'整车类型',
            prop:'transType',
            width:'120'
          },
          // {label:'要求提货时间',
          //   prop:'time',
          //   width:'120'
          // },
          {label:'要求发车时间',
            prop:'transDepartExp',
            width:'120'
          },
          {label:'要求到达时间',
            prop:'transReachExp',
            width:'120'
          },
          // {label:'实际提货时间',
          //   prop:'time',
          //   width:'120'
          // },
          {label:'实际发车时间',
            prop:'transDepart',
            width:'120'
          },
          {label:'实际到达时间',
            prop:'transReach',
            width:'120'
          },
          {label:'数量',
            prop:'transNum',
            width:'120'
          },
          {label:'总重量',
            prop:'transWeight',
            width:'120'
          },
          {label:'单位',
            prop:'transWeightUnit',
            width:'120'
          },
          {label:'体积',
            prop:'transVol',
            width:'120'
          },
          {label:'预计收入',
            prop:'transIncomeExp',
            width:'120'
          },
          {label:'是否上传图片',
            prop:'transIsPhoto',
            width:'120'
          },
          {label:'是否中转',
            prop:'isTransit',
            width:'120'
          },
          {label:'是否异常',
            prop:'isException',
            width:'120'
          },
          {label:'关联运单',
            prop:'relationNo',
            width:'120'
          },
          {label:'添加时间',
            prop:'custAddTime',
            width:'120'
          },
          {label:'负责部门',
            prop:'deptId',
            width:'120'
          },
          // {label:'所属公司',
          //   prop:'time',
          //   width:'120'
          // },


        ],
        // xms
        xiangmus:null,
        // wts
        weituokehu:null,
        noTrans:[],
         vSmallOne:this.$store.state.details.cy,
      }
    },
  created() {
      this.filter()
      this.wts()
  },
    methods: {
    // 委托客户
       fourE(){
            this.dialogVisible6=true;
        },
        flagthree(val){
           this.dialogVisible6=val;
        },
      wts(wt){
          this.weituokehu=wt
        console.log(this.weituokehu.custName,'wt')
        this.sizeForm.custName=this.weituokehu.custName
      },
       // 承运商名称
        twoE(){
            this.dialogVisible4=true;
        },
        flagsOne(val){
            this.dialogVisible4=val
        },
        twos(data){
            console.log(data,'data')
            this.sizeForm.carrierName=data.carrierName
        },
        // ---------------------
      aa(row, column, e){
        let hDatas=this.hData
          this.$store.commit("details",row)
          // this.$store.commit("hDatas",hDatas)
          this.$router.push('workDetails')
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
        console.log(val,'val')
        console.log(this.bianji,'pp')
        console.log(this.deleterr,'dd')
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
        // ----------------------------------------------------
          console.log(this.sizeForm,'filter')
            this.$http.post("v1/trans/query/",this.sizeForm).then((res) => {
                console.log(res)
              if(res.body.code === '0002' ){
                    this.$confirm('暂无信息', {
                      confirmButtonText: '确定',
                      type: 'success'
                    })
                    this.tableData=[]
                  return;
                }else{
                let resAll=res.body.data.result
                this.noTrans=[]
                    resAll.forEach(i =>{
                        if(i.transState == '200'){
                             if(i.transState == '100'){
                              i.transState = '计划未调度'
                            }else if(i.transState == '200'){
                              i.transState ='作业单已确认'
                            }else if(i.transState == '300'){
                              i.transState = '已发车'
                            }else if(i.transState == '400'){
                              i.transState = '已到货'
                            }else if(i.transState == '500'){
                              i.transState = '已签收'
                            }else if(i.transState == '500'){
                              i.transState = '已签收'
                            }
                             if(i.checkStatus == '1000'){
                              i.checkStatus = '已审核'
                            }else if(i.checkStatus == '1100'){
                              i.checkStatus = '未审核'
                            }
                            this.noTrans.push(i)
                        }
                    })
              this.tableData=this.noTrans
                }
          })
          
      },

  }
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
  overflow:hidden;
}
.query .one{
float:left;
 width:16%;
}
.query ul{
overflow:hidden;
}
.query li{
    width:100%;
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
.dOne{
    display:inline-block;
}
.el-form-item{
  width:100%;
}
</style>
