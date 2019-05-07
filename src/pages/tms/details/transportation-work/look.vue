<template>
    <div>
       <el-button @click='submit2'>保存</el-button> 
       <el-card class="box-card">
        <ul>
            <li>审核状态:1100</li>
            <li>流水单号:{{tgId.transNo}}</li>
            <li>委托客户:{{tgId.custName}}</li>
            <li>运单状态:{{tgId.transState}}</li>
            <li>发货省份:{{tgId.transBPro}}</li>
            <li>发货城市:{{tgId.transBCity}}</li>
            <li>发货详细地址:{{tgId.transBAddr}}</li>
            <li>邮政编码:{{tgId.transBZip}}</li>
            <li>收货省份:{{tgId.transEPro}}</li>
            <li>收货城市:{{tgId.transECity}}</li>
            <li>收货详细地址:{{tgId.transEAddr}}</li>
            <li>邮政编码:{{tgId.transEZip}}</li>

            <li>计费方式:{{tgId.transOrderno}}</li>
            <li>计费里程:{{tgId.transOrderno}}</li>
            <li>计费金额:{{tgId.transOrderno}}</li>

            <li>承运商:{{tgId.carrierName}}</li>
            <li>货物总量:{{tgId.transOrderno}}</li>
            <li>货物总体积:{{tgId.transOrderno}}</li>
            <li>预计成本:{{tgId.transOrderno}}</li>
            <li>实际成本:{{tgId.transOrderno}}</li>
            <li>要求提货时间:{{tgId.transOrderno}}</li>
            <li>要求发货时间:{{tgId.transOrderno}}</li>
            <li>要求到货时间:{{tgId.transOrderno}}</li>
            <li>是否异常:{{tgId.transOrderno}}</li>
            <li>实际提货时间:{{tgId.transOrderno}}</li>
            <li>实际发货时间:{{tgId.transOrderno}}</li>
            <li>实际到货时间:{{tgId.transOrderno}}</li>
            <li>车辆类型:{{tgId.transOrderno}}</li>
            <li>驾驶员:{{tgId.transOrderno}}</li>
            <li>驾驶员联系方式:{{tgId.transOrderno}}</li>
            <li>车牌号:{{tgId.transOrderno}}</li>
            <li>作业状态:{{tgId.transOrderno}}</li>
        </ul>

       <!--  <el-table
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%">

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
         </el-table> -->

         <!-- 图片上传功能 -->
        
     
       </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
        // 图片信息
        fileList2: [],
        tableData: [],
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
          // {label:'产品批次',
          //   prop:'goodsVol',
          //   width:'120'
          // },
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
        // 图片id
         p:[],
        //  表单id
         b:[],
          }
     }, 
    created() {
        this.get()
        this.shop()
    },
    methods: {
       upLoad (file) {
          console.log(file)
        },

      // 上传图片
      //  点击保存按钮上传图片
      submit2:function(res){
        this.$http.post(`v1/trans/check?id=`+this.tgId[0].id).then(res=>{
            console.log(res,'审核')
            if(res.status==200){
              this.$router.push('Waybill')
            }
              
        })
      },
      // 成功前回调
  // --------------------- 
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
                console.log(res,'res')
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
            console.log(this.tgId,'ddddddd')
          },
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
</style>