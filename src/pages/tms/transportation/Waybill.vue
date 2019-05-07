<template>
  <div class="menu-container">
   <el-button @click='flag=!flag' type="primary" plain>调整</el-button>
    <div class='query' v-show='flag'>
                  <div class='pepole'>
                       <div class='fLeft'>                        
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="项目简称">
                                    <el-input v-model="sizeForm.projectShortname"></el-input>
                                    </el-form-item>
                                </el-form>
                      </div>



                    <div  class='fLeft'>

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

                  <div  class='fLeft'>
                          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="委托单号">
                                    <el-input v-model="sizeForm.transOrderno"></el-input>
                                    </el-form-item>
                           </el-form>
                  </div>  

                  <div  class='fLeft'>             
                              <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="车牌号">
                                    <el-input v-model="sizeForm.truckCode"></el-input>
                                    </el-form-item>
                                </el-form>
                  </div>  
                  </div>

      
                  
                  <div class='time'>
                      <div class="block">
                        <span class="demonstration">实际发车-起始</span>
                        <el-date-picker
                        v-model="sizeForm.transDepartBegin"
                        type="date"
                        placeholder="选择日期时间"
                        align="right"
                        :picker-options="pickerOptions1">
                        </el-date-picker>
                    </div>
                               
                    <div class="block">
                        <span class="demonstration">实际发车-终止</span>
                        <el-date-picker
                        v-model="sizeForm.transDepartEnd"
                        type="date"
                        placeholder="选择日期时间"
                        align="right"
                        :picker-options="pickerOptions1">
                        </el-date-picker>
                    </div>
                                  
                    <div class="block">
                        <span class="demonstration">添加时间-起</span>
                        <el-date-picker
                        v-model="sizeForm.addDateBegin"
                        type="date"
                        placeholder="选择日期时间"
                        align="right"
                        :picker-options="pickerOptions1">
                        </el-date-picker>
                    </div>
     
                                     
                    <div class="block">
                        <span class="demonstration">添加时间-终</span>
                        <el-date-picker
                        v-model="sizeForm.addDateEnd"
                        type="date"
                        placeholder="选择日期时间"
                        align="right"
                        :picker-options="pickerOptions1">
                        </el-date-picker>
                    </div>
                  </div>
             
        
              </div>
             <el-button  @click='filter' type="primary" plain>查询</el-button>
            <el-button  @click='add' type="primary" plain>添加</el-button>
            <el-button  @click='dele' type="primary" plain>删除</el-button>
            <el-button  @click='bianxie' type="primary" plain>修改</el-button>
            <el-button  @click='map' type="primary" plain>维护路线</el-button>
            <el-button  @click='looks' type="primary" plain>复核</el-button>

              <el-table
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                   @row-click='aaa'
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
                     show-overflow-tooltip
                    >
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
        dialogVisible1: false,
        dialogVisible6:false,
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
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
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
           {label:'作业状态',
            prop:'dispatchAffirm',
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
      }
    },
  created() {
      this.filter()
      this.xms()
      this.wts()
  },
    methods: {
          // 三元表达式转换状态码
     changeType(str){
        return str==100? "计划未调度":str==200?'作业单已确认':str==300?"已发车":str==400?"已到货":str==500?"已签收":'回单已提交';
      },

        fourE(){
            this.dialogVisible6=true;
        },
        flagthree(val){
           this.dialogVisible6=val;
        },
      looks(){
           let aa=[]
          if(this.bianji.length!=1){
              this.$confirm('请至少选择一个且必须选择一个', {
                    confirmButtonText: '确定',
                    type: 'success'
                  })
                return;
            }else{
                  
                  this.bianji.forEach(i=>{
                        if(i.checkStatus != '未审核'){
                          aa.push(i)
                        }
                  })
            }
            if(aa.length >0){
               this.$confirm('请选择状态为未审核的货物', {
               confirmButtonText: '确定',
               type: 'success'
             })
              return;
              }else{
                this.$store.commit("bianji",this.bianji)
                this.$router.push('lookD')
              }
                  
          console.log('stop')
          
      },
      map(){
          if(this.bianji.length!=1){
              this.$confirm('请至少选择一个且必须选择一个', {
                    confirmButtonText: '确定',
                    type: 'success'
                  })
                return;
            }else{
            this.$store.commit("bianji",this.bianji)
            }
            this.$router.push('map')
            console.log('stop')
      },
      wts(wt){
          this.weituokehu=wt
        console.log(this.weituokehu.custName,'wt')
        this.sizeForm.custName=this.weituokehu.custName
      },
      xms(xm){
        this.xiangmus=xm
        console.log(this.sizeForm.projectShortname,'xm')
        this.sizeForm.projectShortname=this.xiangmus.projectShortname
      },
      aaa(row, column, e){
        let hDatas=this.hData
          this.$store.commit("details",row)
          // this.$store.commit("hDatas",hDatas)
          console.log(row,'wwwwwwwwwwwwwwwwwwwww')
          this.$router.push('WeyDatail')
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
        this.$store.commit("bianji",this.val)
        this.multipleSelection = val;
        // 装进删除数组
        this.deleterr=val;
        this.bianji=val;
        this.lookD=val;
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
            if(this.sizeForm.projectShortname === ''){this.sizeForm.projectShortname=null}
            if(this.sizeForm.custName === ''){this.sizeForm.custName=null}
            if(this.sizeForm.transOrderno === ''){this.sizeForm.transOrderno=null}
            if(this.sizeForm.truckCode === ''){this.sizeForm.truckCode=null}
            if(this.sizeForm.transDepartBegin === ''){this.sizeForm.transDepartBegin=null}
            if(this.sizeForm.transDepartEnd === ''){this.sizeForm.transDepartEnd=null}
            if(this.sizeForm.addDateBegin === ''){this.sizeForm.addDateBegin=null}
            if(this.sizeForm.addDateEnd === ''){this.sizeForm.addDateEnd=null}
            console.log(this.sizeForm,'filter')
             this.$http.post("v1/trans/query/",this.sizeForm).then((res) => {
                  console.log(res.body.data.result,'查询')
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
                          if(i.transState == '100' || i.transState == '200' || i.transState == '300' || i.transState== '400' ||i.transState== '500'){
                            // str==100? "计划未调度":str==200?'作业单已确认':str==300?"已发车":str==400?"已到货":str==500?"已签收":'回单已提交'
                            if(i.transState =='100'){
                              i.transState = "计划未调度"
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
                            }else if(i.transState == '600'){
                              i.transState = '回单已提交'
                            }
                             if(i.checkStatus == '1000'){
                              i.checkStatus = '已审核'
                            }else if(i.checkStatus == '1100'){
                              i.checkStatus = '未审核'
                            }
                            // this.changeType(i.transState)
                              this.noTrans.push(i)
                          }
                      })
                    this.tableData=this.noTrans
                 }
            })




    },
     // 添加跳转按钮事件
    add(){
          this.$router.push('WaybillAdd')
    },
    clearn(){
      let a ={
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
          "custIsNotice": 0,
          "custIsPosition": 0,
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
          "page": {
            "endRow": null,
            "pageNum": null,
            "pageSize": null,
            "pages": null,
            "startRow": null,
            "total": null
          },
          "uDelete": null,
          "uTime": null
      }
      this.sizeForm=a
    },
    // 编辑
    bianxie(){
           let moDis=[]
          if(this.bianji.length!=1){
            this.$confirm('请至少选择一个且必须选择一个', {
                  confirmButtonText: '确定',
                  type: 'success'
                })
              return;
          }else{
          this.deleterr.forEach(element =>{
              if(element.transState == '计划未调度' && element.checkStatus == '未审核'){
                this.$store.commit("bianji",this.bianji)
              }else{
                moDis.push(element.id)
              }
          })
          }
             if(moDis.length!=0){
              this.$confirm('您只能对未调度并未审核的单据操作', {
                  confirmButtonText: '确定',
                  type: 'success'
                })
              return;
          }
          this.$router.push('WaybillBianji')
          console.log('stop')
      },
      // 删除
    dele(){
          var ids = [];
          let moDis=[]
          this.deleterr.forEach(element =>{
              if(element.transState == '计划未调度' && element.checkStatus == '未审核'){
                ids.push(element.id)
              }else{
                moDis.push(element.id)
              }
          })
          console.log( this.deleterr,'iiiiddddss')
          if(moDis.length!=0){
              this.$confirm('您只能对未调度并未审核的单据操作', {
                  confirmButtonText: '确定',
                  type: 'success'
                })
              return;
          }

            this.$http.post("v1/trans/delete/",ids).then(res=>{
                console.log(res,'dele')
                 this.filter()
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
  margin-bottom:20px;
}
.query  .fLeft{
float:left;

}
.query ul{
overflow:hidden;
}
.query li{
    width:200px;
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
}
.query .chose input{
    width:100%;
    height:28px;
}
.dOne{
    display:inline-block;
}
.demonstration{
 font-size:14px;
 color:skyblue;
}
.block[data-v-4d195fcc] {
    float:left;
    width:20%;
    margin-top:0;
}

.block span[data-v-4d195fcc] {
    font-size:12px;
}
.pepole{
    width:100%;
  overflow:hidden;
}
.time{
  width:100%;
  overflow:hidden;
}

</style>
