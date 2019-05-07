<template>
    <div>
       <el-button @click='submit2'>保存</el-button> 
       <el-card class="box-card">
        <ul>
            <li>委托单号:{{tgId[0].transOrderno}}</li>
            <li>流水单号:{{tgId[0].transNo}}</li>
            <li>委托客户:{{tgId[0].custName}}</li>
            <li>运单状态:{{tgId[0].transState}}</li>
            <li>发货省份:{{tgId[0].transBPro}}</li>
            <li>发货城市:{{tgId[0].transBCity}}</li>
            <li>发货详细地址:{{tgId[0].transBAddr}}</li>
            <li>邮政编码:{{tgId[0].transBZip}}</li>
            <li>收货省份:{{tgId[0].transEPro}}</li>
            <li>收货城市:{{tgId[0].transECity}}</li>
            <li>收货详细地址:{{tgId[0].transEAddr}}</li>
            <li>邮政编码:{{tgId[0].transEZip}}</li>

            <li>计费方式:{{tgId[0].transOrderno}}</li>
            <li>计费里程:{{tgId[0].transOrderno}}</li>
            <li>计费金额:{{tgId[0].transOrderno}}</li>

              <li>承运商:{{tgId.carrierName}}</li>
              <li>货物总量:{{tgId.transWeight}}</li>
              <li>货物总体积:{{tgId.transVol}}</li>
              <li>预计成本:{{tgId.transCostExp}}</li>
              <li>实际成本:{{tgId.transCost}}</li>
              <li>要求提货时间:{{tgId.transSignExp}}</li>
              <li>要求发货时间:{{tgId.transDepartExp}}</li>
              <li>要求到货时间:{{tgId.transReachExp}}</li>
              <li>是否异常:{{tgId.exceptionState}}</li>
              <li>实际提货时间:{{tgId.transSign}}</li>
              <li>实际发货时间:{{tgId.transDepart}}</li>
              <li>实际到货时间:{{tgId.transReach}}</li>
            <li>驾驶员:{{tgId[0].driverName}}</li>
            <li>驾驶员联系方式:{{tgId[0].driverMoile}}</li>
            <li>车牌号:{{tgId[0].truckCode}}</li>
            <li>作业状态:{{tgId[0].ispatchAffirm}}</li>
        </ul>

         <el-table
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                   @selection-change="handleSelectionChange">

                   <el-table-column
                    type="selection"
                    width="55">
                  </el-table-column>

            <el-table-column label="产品编码" prop="goodsNum" width="180">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.goodsNum" placeholder="请输入内容"
                     @change="handleEdit(scope.$index, scope.row)"></el-input>
                </template>
            </el-table-column>

            <el-table-column label="产品名称" prop="goodsName" width="180">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.goodsName" placeholder="请输入内容"
                     @change="handleEdit(scope.$index, scope.row)"></el-input>
                </template>
            </el-table-column>

            <el-table-column prop="goodsWeight" label="体积">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.goodsWeight" placeholder="请输入内容"
                     @change="handleEdit(scope.$index, scope.row)"></el-input>
                </template>
            </el-table-column>

             <el-table-column label="数量" prop="goodsVol" width="180">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.goodsVol" placeholder="请输入内容" 
                    @change="handleEdit(scope.$index, scope.row)"></el-input>
                </template>
            </el-table-column>

            <el-table-column label="签收数量" prop="signNum" width="180">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.signNum" placeholder="请输入内容"
                     @change="handleEdit(scope.$index, scope.row)"></el-input> 
                </template>
            </el-table-column>

            <el-table-column prop="noSignNum" label="拒签数量">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.noSignNum" placeholder="请输入内容"
                     @change="handleEdit(scope.$index, scope.row)"></el-input>
                </template>
            </el-table-column>

            <el-table-column prop="noSignText" label="拒签原因">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.noSignText" placeholder="请输入内容"
                     @change="handleEdit(scope.$index, scope.row)"></el-input> 
                </template>
            </el-table-column>

           </el-table>

         <!-- 图片上传功能 -->
     
       </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
        flag:false,
        // 图片信息
        fileList2: [
        ],
        tableData: [
        ],
        // 存放多条删除数据
        hData:[
          {label:'产品编码',
             prop:'goodsNum',
            width:'120'
          },
          {label:'产品名称',
             prop:'goodsName',
            width:'120'
          },
          {label:'体积',
            prop:'goodsWeight',
            width:'120'
          },
          {label:'数量',
            prop:'goodsVol',
            width:'120'
          },
          {label:'签收数量',
            prop:'signNum',
            width:'120'
          },
          {label:'拒签数量',
            prop:'noSignNum',
            width:'120'
          },
          {label:'拒签原因',
            prop:'noSignText',
            width:'120'
          },
        ],
        // thing参数
        tgId:null,
        // 货物信息
         hhww:[],
        //  表单id
         b:[],
        //  货品参数存放处
         text:[]
          }
     }, 
    created() {
        this.get()
        this.shop()
    },
    methods: {
        handleSelectionChange(val){
                this.text=val
                console.log( this.text,'text')
        },
      // 上传图片
      //  点击保存按钮上传图片
      submit2(){
        // this.$http.post('/api/v1/signTrans/signTrans',{})
            // 总参数
            let can =  {
                    "comId": null,
                    "goodsId": null,
                    "id": null,
                    "noSignNum": null,
                    "noSignText": null,
                    "signNum": null,
                    "transId": null,
                    }
            // 给canpush的东西
            let more={
                "id": null,
                "tmsTransGoodsList":[
                 ],
                }

            if(this.text.length != 0){
                this.text.forEach(i=>{
                console.log(i)
                more.id=i.transId
               can.comId=i.comId
                can.goodsId=i.goodsId
               can.id=i.id
                can.noSignNum=i.noSignNum
               can.noSignText=i.noSignText
               can.signNum=i.signNum
               can.transId=i.transId
                more.tmsTransGoodsList.push(can)
            })
            }
            console.log(can,'can')
             this.$http.post('v1/signTrans/signTrans/',more).then(res=>{
                 console.log(res,'cccccccccc')
             })

      },
  // --------------------- 
//   点击事件
  handleEdit(index,val){
        console.log(this.tableData,'第er个')
  },    
  // ------------------------------------------

      // 图片组件
       handleRemove(file, fileList) {
        console.log(file, fileList,'qqq')
      },
      handlePreview(file) {
        console.log(file,'www')
      },
      // --------------------
      // 获取商品信息
        shop(){
           this.$http.post(`v1/trans/findById/?id=`+this.tgId[0].id).then(res => {
             console.log(res)
                console.log(res.body.data,'res')
                let mal = res.body.data.transGoodsVoList
                let mac=null
                this.tableData=[]
                this.b=[]
                mal.forEach(i=>{
                  mac=i.goodsVol-i.signNum
                  i.noSignNum=mac
                   this.tableData.push(i)
                })
                 console.log(this.tableData,'noSignNum')
                 this.tableData.forEach(i=>{
                    this.b.push(i.id)
                 })
                console.log( this.b,'bbb')
          });
        },
        // 根据产品id查询货物
         get(){
            let details= this.$store.state.bianji.bianjis
            this.tgId=details
            console.log(this.tgId[0],'ddddddd')
          },

      //  get(){
      //       let details= this.$store.state.details.details
      //       this.$http.post(`v1/customer/findByCustId?custId=`+details.custId).then(res=>{
      //           console.log(res,'findbyId')
      //             this.sizeForm=res.body.data
      //       })
      //   }
    },
}
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  ul li{
      width:25%;
      float:left;
      list-style:none;
  }
  .box-card{
      width:100%;
      padding-bottom:20px;
      font-size:10px;
  }
  .tb-edit .el-input {
    display: none
}
.tb-edit .current-row .el-input {
    display: block
}
.tb-edit .current-row .el-input+span {
    display: none
}
</style>