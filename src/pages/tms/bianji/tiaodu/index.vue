<template>
    <div>
       <button @click='add'>保存</button>
       <button>返回</button>
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="调度" name="1">
                        <ul>
                            <li>
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="调度单单号">
                                    <el-input v-model="sizeForm.dispatchNo"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="调度人">
                                    <el-input v-model="sizeForm.dispatchMan"></el-input>
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

                               <li>                   
                               <el-dialog
                                    title="提示"
                                    :visible.sync="dialogVisible5"
                                    width="60%">
                                            <driver v-on:dv='dvs' v-on:flagsTwo='falgTwo'></driver>
                                </el-dialog>

                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="司机">
                                      <div class='ones' @click='threeE'>
                                        <el-input v-model="sizeForm.driverName" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                      </div>
                                    </el-form-item>
                                </el-form>
                            </li>

                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="车牌号">
                                    <el-input v-model="sizeForm.truckCode"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>

                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="挂车车牌">
                                    <el-input v-model="sizeForm.trailerCode"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>

                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="预计成本">
                                    <el-input v-model="sizeForm.transCostExp"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>

                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="实际成本">
                                    <el-input v-model="sizeForm.transCost"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>

           
                            <li>                   
                                 <el-dialog
                                    title="提示"
                                    :visible.sync="dialogVisible1"
                                    width="60%">
                                            <bumn v-on:bm='bms' v-on:flag='flags'></bumn>
                                </el-dialog>

                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="负责部门">
                                      <div class='ones' @click='oneE'>
                                        <el-input v-model="sizeForm.deptName" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                      </div>
                                    </el-form-item>
                                </el-form>
                            </li>

                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="备注">
                                    <el-input v-model="sizeForm.transMemo"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                        </ul>
            </el-collapse-item>
            <el-collapse-item title="调度信息" name="3">
             <!-- 左边 -->
                        <ul>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="里程(公里)">
                                    <el-input v-model="sizeForm.transDistance"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="发货省份">
                                    <el-input v-model="sizeForm.dispatchBPro"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="发货城市">
                                    <el-input v-model="sizeForm.dispatchBCity"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>

                             <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="发货邮编">
                                    <el-input v-model="sizeForm.dispatchBZip"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="发货地址">
                                    <el-input v-model="sizeForm.dispatchBAddr"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                        </ul>
             <!-- 右边 -->
                         <ul>

                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="收获省份">
                                    <el-input v-model="sizeForm.dispatchEPro"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>

                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="收货城市">
                                    <el-input v-model="sizeForm.dispatchECity"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>

                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="收货邮编">
                                    <el-input v-model="sizeForm.dispatchEZip"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="收货地址名称">
                                    <el-input v-model="sizeForm.dispatchEArea"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                        </ul>
            </el-collapse-item>
            <el-collapse-item title="时间信息" name="4">
                   <ul>
                            <li>                          
                                <div class="block">
                                    <span class="demonstration">要求提货时间</span>
                                    <el-date-picker
                                    v-model="sizeForm.transArrtimeExp"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                    </el-date-picker>
                                </div>
                            </li>
                            <li>                          
                                <div class="block">
                                    <span class="demonstration">要求出发时间</span>
                                    <el-date-picker
                                    v-model="sizeForm.transDepartExp"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                    </el-date-picker>
                                </div>
                            </li>
                            <li>                          
                                <div class="block">
                                    <span class="demonstration">要求达到时间</span>
                                    <el-date-picker
                                    v-model="sizeForm.transReachExp"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                    </el-date-picker>
                                </div>
                            </li>
                            <li>                          
                                <div class="block">
                                    <span class="demonstration">实际到场时间</span>
                                    <el-date-picker
                                    v-model="sizeForm.transArrtime"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                    </el-date-picker>
                                </div>
                            </li>
                             <li>                          
                                <div class="block">
                                    <span class="demonstration">实际出发时间</span>
                                    <el-date-picker
                                    v-model="sizeForm.transDepart"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                    </el-date-picker>
                                </div>
                            </li>
                            <li>                          
                                <div class="block">
                                    <span class="demonstration">实际到达时间</span>
                                    <el-date-picker
                                    v-model="sizeForm.transReach"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                    </el-date-picker>
                                </div>
                            </li>
                        </ul>
            </el-collapse-item>
        </el-collapse>
        <tiaodu v-on:all='alls'></tiaodu>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        //   组件参数
        dialogVisible: false,
        dialogVisible1: false,
        dialogVisible2: false,
        dialogVisible3: false,
        dialogVisible4: false,
        dialogVisible5: false,
        dialogVisible6: false,
        dialogVisible7: false,
        dialogVisible8: false,
         dialogVisibl9: false,
        dialogVisible10: false,
        dialogVisible11: false,
        activeNames: ['1'],
        sizeForm:{
            "addDate": null,
            "addName": null,
            "addUserid": null,
            "carrierId": null,
            "carrierName": null,
            "checkStatus": null,
            "comId": null,
            "deptId": null,
            "deptName": null,
            "dispatchBAddr": null,
            "dispatchBArea": null,
            "dispatchBCity": null,
            "dispatchBPro": null,
            "dispatchBZip": null,
            "dispatchDistance": null,
            "dispatchEAddr": null,
            "dispatchEArea": null,
            "dispatchECity": null,
            "dispatchEPro": null,
            "dispatchEZip": null,
            "dispatchInsideno": null,
            "dispatchMan": null,
            "dispatchNo": null,
            "dispatchState": null,
            "driverId": null,
            "driverMobile": null,
            "driverName": null,
            "id": null,
            "isTrans": null,
            "listUpdateMark": null,
            "poCount": null,
            "trailerCode": null,
            "transArrtime": null,
            "transArrtimeExp": null,
            "transCost": null,
            "transCostExp": null,
            "transDepart": null,
            "transDepartExp": null,
            "transList": [
                {
                "addDate": null,
                "addName": null,
                "addUserid": null,
                "carrierDspCode": null,
                "carrierDspName": null,
                "carrierId": null,
                "carrierName": null,
                "comDspCode": null,
                "comDspCollecterCode": null,
                "comDspName": null,
                "comId": null,
                "custDspCode": null,
                "custDspName": null,
                "custId": null,
                "custName": null,
                "deptId": null,
                "deptName": null,
                "dispatchId": null,
                "dispatchNo": null,
                "driverId": null,
                "driverMobile": null,
                "driverName": null,
                "dspId": null,
                "dspReturnMsg": null,
                "exceptionRead": null,
                "exceptionState": null,
                "exceptionText": null,
                "financialAuditDsp": null,
                "flag": null,
                "fmscId": null,
                "fscId": null,
                "goodsClass": null,
                "id": null,
                "incomeDspFeeCd": null,
                "incomeDspFeeNm": null,
                "isException": null,
                "isTransit": null,
                "payDspFeeCd": null,
                "payDspFeeNm": null,
                "payState": null,
                "projectDspCode": null,
                "projectDspName": null,
                "projectId": null,
                "projectShortname": null,
                "qyAddDate": null,
                "qyFlag": null,
                "recieverId": null,
                "recieverName": null,
                "regionNo": null,
                "relationId": null,
                "relationNo": null,
                "sendDspXml": null,
                "shipperId": null,
                "shipperName": null,
                "synchronization": null,
                "trailerCode": null,
                "transAbnormal": null,
                "transArrtime": null,
                "transArrtimeExp": null,
                "transBAddr": null,
                "transBArea": null,
                "transBCity": null,
                "transBCityDspCode": null,
                "transBPro": null,
                "transBShipper": null,
                "transBShipperPhone": null,
                "transBZip": null,
                "transCost": null,
                "transCostExp": null,
                "transCostPre": null,
                "transDepart": null,
                "transDepartExp": null,
                "transDistance": null,
                "transDrawingTime": null,
                "transEAddr": null,
                "transEArea": null,
                "transECity": null,
                "transECityDspCode": null,
                "transEPro": null,
                "transEReciever": null,
                "transERecieverPhone": null,
                "transEZip": null,
                "transIncome": null,
                "transIncomeExp": null,
                "transIncomeTax": null,
                "transInsideno": null,
                "transIsPhoto": null,
                "transMemo": null,
                "transNo": null,
                "transNum": null,
                "transOrderno": null,
                "transPayTax": null,
                "transPaymentTime": null,
                "transReach": null,
                "transReachExp": null,
                "transReceipt": null,
                "transReceiptExp": null,
                "transSign": null,
                "transSignExp": null,
                "transSignMemo": null,
                "transState": null,
                "transType": null,
                "transVol": null,
                "transWaybillno": null,
                "transWeight": null,
                "transWeightT": null,
                "transWeightUnit": null,
                "transWeightfee": null,
                "transWeightfeeT": null,
                "truckCode": null,
                "uDelete": null,
                "uTime": null,
                "updDate": null,
                "updName": null,
                "updUserid": null
                }
            ],
            "transMemo": null,
            "transReach": null,
            "transReachExp": null,
            "transReceipt": null,
            "transReceiptExp": null,
            "transSign": null,
            "transSignExp": null,
            "transSignMemo": null,
            "truckCode": null,
            "uDelete": null,
            "uTime": null,
            "updDate": null,
            "updName": null
            },
          // vuex中拿到car的数据作为第一弹出框的传参穿过去
            vBig:this.$store.state.details.car,
        // vuex中拿到car的数据作为第二弹出框第一个框的传参穿过去
            vSmallOne:this.$store.state.details.cy,
        // vuex中拿到car的数据作为第二弹出框第二个框的传参穿过去
            numD:this.$store.state.details.numD,
            // 装表单id
            bd:[]
      }
    },
    created(){
        this.xms(),
        this.bms(),
        this.twos(),
        this.alls()
    },
    methods: {
        // 承运
        twoE(){
            this.dialogVisible4=true
        },
        flagsOne(val){
             this.dialogVisible4=val
        },

            // 司机
            threeE(){
                this.dialogVisible5=true
            },
        falgTwo(val){
            this.dialogVisible5=val
        },
    // 部门
    oneE(){
        this.dialogVisible1=true
    },
    flags(val){
        this.dialogVisible1=val
    },



        
        alls(data){
            // let cp = {}
           data.forEach(i=>{
            this.bd.push({id:i.id})
           })
           console.log(this.bd,'bd')
           this.sizeForm.transList=this.bd
        },
        // 组件放法
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
        wts(wt){
            console.log(wt,'wt')
            this.sizeForm.custName=wt.custShortname
        },
        dvs(dv){
            console.log(dv,'dv')
            this.sizeForm.driverName=dv.driverName
        },
        // 承运商子组件
        twos(data){
            console.log(data,'data')
            this.sizeForm.carrierName=data.carrierName
        },
        // 负责部门
        bms(bm){
            console.log(bm,'bm')
            this.sizeForm.deptName=bm.deptName
        },
        xms(xm){
            this.xiangmus=xm
            console.log(this.sizeForm.projectShortname,'xm')
            this.sizeForm.projectShortname=this.xiangmus.projectShortname
        },
        // 组件放法
        handleChange(val) {
            console.log(val);
        },
        add(){
             this.$http.post("v1/transDispatch/insert/",this.sizeForm).then(res => {
                    console.log(res,'transDispatch')
                if(res.status==200){
                    this.$router.push('/transportation/tiaodu')
                }else{
                    console.log('添加失败')
                }
            });
        },
    }
  }
</script>
<style>
    *{
        list-style: none;
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