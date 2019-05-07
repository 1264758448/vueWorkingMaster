<template>
    <div>
       <el-button @click='add'>进行修改</el-button>
       <el-button @click='back'>返回</el-button>

        <el-collapse class='query' v-model="activeNames" @change="handleChange">
            <el-collapse-item title="委托信息" name="1">
                        <ul>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="委托单号">
                                    <el-input v-model="sizeForm.transOrderno"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                             <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="流水单号">
                                    <el-input v-model="sizeForm.transNo"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="运单号">
                                    <el-input v-model="sizeForm.transWaybillno"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                           
                            <li>
                                 <el-form ref="form" :model="sizeForm" label-width="80px">            
                                    <el-form-item label="整车类型">
                                        <el-select v-model="sizeForm.transType" placeholder="请选择活动区域">
                                            <el-option label="整车运输" value="10"></el-option>
                                                <el-option label="零担运输" value="11"></el-option>
                                        </el-select>
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
                                    <el-form-item label="项目简称">
                                    <el-input v-model="sizeForm.projectShortname"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            
                        </ul>
            </el-collapse-item>
            <el-collapse-item title="承运商信息" name="1">
                      <ul>
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
                                    <el-form-item label="挂车牌号">
                                    <el-input v-model="sizeForm.trailerCode"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                             <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="司机电话">
                                    <el-input v-model="sizeForm.driverMobile"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                        </ul>
            </el-collapse-item>
            <el-collapse-item title="客户信息" name="1">
             <!-- 左边 -->
                        <ul>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="发货人">
                                    <el-input v-model="sizeForm.shipperName"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                           <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="发货人姓名">
                                    <el-input v-model="sizeForm.shipperName"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
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



                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="发货地址名称">
                                    <el-input v-model="sizeForm.transBArea"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="发货省份">
                                    <el-input v-model="sizeForm.transBPro"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="发货城市">
                                    <el-input v-model="sizeForm.transBCity"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                             <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="发货邮编">
                                    <el-input v-model="sizeForm.transBZip"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="发货详细地址">
                                    <el-input v-model="sizeForm.transBAddr"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="发货电话">
                                    <el-input v-model="sizeForm.transBShipperPhone"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                        </ul>
             <!-- 右边 -->
                         <ul>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="收货人">
                                    <el-input v-model="sizeForm.recieverName"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>

                           <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="收货人姓名">
                                    <el-input v-model="sizeForm.recieverName"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="里程(公里)">
                                    <el-input v-model="sizeForm.transDistance"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="收货地址名称">
                                    <el-input v-model="sizeForm.transEArea"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="收获省份">
                                    <el-input v-model="sizeForm.transEPro"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="收货城市">
                                    <el-input v-model="sizeForm.transECity"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                             <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="收货邮编">
                                    <el-input v-model="sizeForm.transEZip"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="收货详细地址">
                                    <el-input v-model="sizeForm.transEAddr"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>

                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="收货电话">
                                    <el-input v-model="sizeForm.transERecieverPhone"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                        </ul>
            </el-collapse-item>
            <el-collapse-item title="结算信息" name="1">
                   <ul>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="预计收入">
                                    <el-input v-model="sizeForm.transIncomeExp"></el-input>
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
                                    <el-form-item label="预付款(司机)">
                                    <el-input v-model="sizeForm.transCostPre"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="实际收入">
                                    <el-input v-model="sizeForm.transIncome"></el-input>
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
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="收入税率">
                                    <el-input v-model="sizeForm.transIncomeTax"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="成本税率">
                                    <el-input v-model="sizeForm.transPayTax"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                        </ul>
            </el-collapse-item>
            <el-collapse-item title="货物信息" name="1">
                   <ul>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="计量重">
                                    <el-input v-model="sizeForm.transWeightfee"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="总重量">
                                    <el-input v-model="sizeForm.transWeight"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="总体积">
                                    <el-input v-model="sizeForm.transVol"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="总数量">
                                    <el-input v-model="sizeForm.transNum"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>

                        </ul>
                        <!-- 货物详情列表 -->
                                <el-dialog
                                    title="提示"
                                    :visible.sync="dialogVisible11"
                                    width="60%">
                                           <!-- 新增弹框 -->
                                           <ul>
                                                 <li>                          
                                                      <el-dialog
                                                          title="提示"
                                                          :visible.sync="dialogVisible12"
                                                          width="60%">
                                                              <hw :wtkhId='wtkhId'
                                                                   v-on:wt='wtss'
                                                              ></hw>
                                                      </el-dialog>

                                                      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini"  @click="dialogVisible12 = true">
                                                          <el-form-item>
                                                          <el-button type="text" @click="dialogVisible12 = true">货物名称</el-button>      
                                                          <el-input v-model="sizeForm.transGoodsVoList[0].goodsName"></el-input>
                                                          </el-form-item>
                                                      </el-form>
                                                 </li>
                                                 <li>                          
                                                     <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                                         <el-form-item label="数量">
                                                         <el-input v-model="sizeForm.transGoodsVoList[0].goodsNum"></el-input>
                                                         </el-form-item>
                                                     </el-form>
                                                 </li>
                                                 <li>                          
                                                     <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                                         <el-form-item label="体积">
                                                         <el-input v-model="sizeForm.transGoodsVoList[0].goodsVol"></el-input>
                                                         </el-form-item>
                                                     </el-form>
                                                 </li>
                                                  <li>                          
                                                     <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                                         <el-form-item label="重量">
                                                         <el-input v-model="sizeForm.transGoodsVoList[0].goodsWeight"></el-input>
                                                         </el-form-item>
                                                     </el-form>
                                                 </li>
                                           </ul>
                                           <el-button @click='elevies'>确定</el-button>
                                           <!-- 新增end-->
                                </el-dialog>

                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini"  @click="dialogVisible11 = true">
                                    <el-form-item>
                                      <el-button type="button" @click="newHw">新增货物</el-button>  
                                 <!--     <el-button type="button" @click="dEnter">删除</el-button>  -->  
                                  <!--  <el-input v-model="sizeForm.carrierName"></el-input> -->
                                    </el-form-item>
                                <!-- 动态删减货物列表(静态删减) -->
                                       

                                       <!--  <el-button @click='deleter'>删除</el-button> -->
                                        <el-table
                                        ref="multipleTable"
                                        :data="transGoodsVoList"
                                        tooltip-effect="dark"
                                        style="width: 100%"
                                        @selection-change="handleSelectionChange"
                                       >

                                        <el-table-column
                                            type="selection"
                                            width="55">
                                        </el-table-column>

                                        <el-table-column
                                            type="index"
                                            width="50">
                                        </el-table-column>

                                        <el-table-column
                                        v-for="(item,index) in aTwo"
                                        :key='index'
                                            :prop='item.prop'
                                            :label='item.label'
                                            show-overflow-tooltip>
                                        </el-table-column>
                                         <el-table-column label="操作">

                                        <template slot-scope="scope">
                                          <el-button
                                            size="mini"
                                            type="danger"
                                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                        </template>
                                      </el-table-column>
                                
                                        </el-table>
                                <!-- 动态end -->

                                </el-form>
                        <!-- end -->
            </el-collapse-item>
            <el-collapse-item title="时间信息" name="1">
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
                                    <span class="demonstration">要求到达时间</span>
                                    <el-date-picker
                                    v-model="sizeForm.transReachExp"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                    </el-date-picker>
                                </div>
                            </li>
                            <li>                          
                                <div class="block">
                                    <span class="demonstration">要求签收时间</span>
                                    <el-date-picker
                                    v-model="sizeForm.transSignExp"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                    </el-date-picker>
                                </div>
                            </li>
                             <li>                          
                                <div class="block">
                                    <span class="demonstration">要求回单时间</span>
                                    <el-date-picker
                                    v-model="sizeForm.transReceiptExp"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                    </el-date-picker>
                                </div>
                            </li>
                            <li>                          
                                <div class="block">
                                    <span class="demonstration">实际发车时间</span>
                                    <el-date-picker
                                    v-model="sizeForm.transDepart"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                    </el-date-picker>
                                </div>
                            </li>
                        </ul>
            </el-collapse-item>
            <el-collapse-item title="备注信息" name="1">
                  <ul>
                            <li>                          
                                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                                    <el-form-item label="签字签收信息">
                                    <el-input v-model="sizeForm.transSignMemo"></el-input>
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
            <el-collapse-item title="图片信息" name="1">
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        //   动态货物列表表头
        aTwo:[
          {label:'货物名称',
            prop:'goodsName',
            width:'120'
          },
          {label:'重量',
            prop:'goodsWeight',
            width:'120'
          },
          {label:'体积',
            prop:'goodsVol',
            width:'120'
          },
          {label:'数量',
            prop:'goodsNum',
            width:'120'
          },
        ],
          multipleSelection: [],
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
        dialogVisible12: false,
        activeNames: ['1'],
        sizeForm:{
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
            "transGoodsVoList": [
                {
                "comId": null,
                "goodsId": null,
                "goodsName": null,
                "goodsNum": null,
                "goodsVol": null,
                "goodsWeight": null,
                "id": null,
                "noSignNum": null,
                "noSignText": null,
                "signNum": null,
                "transId": null,
                "uDelete": null,
                "uTime": null
                }
            ],
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
        },
        // vuex中拿到car的数据作为第一弹出框的传参穿过去
            vBig:this.$store.state.details.car,
        // vuex中拿到car的数据作为第二弹出框第一个框的传参穿过去
            vSmallOne:this.$store.state.details.cy,
        // vuex中拿到car的数据作为第二弹出框第二个框的传参穿过去
            numD:this.$store.state.details.numD,
            wtkhId:null,
        // 动态数组
            transGoodsVoList:[],
        // 将勾选的货物存起来放到,点击保存的时候赋值给this.sizeForm.transGoodsVoList
            hwChecks:[]
      }
    },
    created(){
     this.get()
    },
    methods: {
        // 删除
        handleDelete(a, b){
            let c = this.transGoodsVoList
                console.log(a,b,'shssss')
                this.transGoodsVoList.splice(a,1);
                  let wei = 0
                 // 体积
                let tiji = 0
                // 数量
                let num = 0
                if(c.length > 0){
                 c.forEach(i=>{
                    wei +=i.goodsWeight*i.goodsNum
                    tiji +=i.goodsVol*i.goodsNum
                    num += 1*i.goodsNum
                })
                
                this.sizeForm.transWeight=wei
                this.sizeForm.transVol=tiji
                this.sizeForm.transNum=num
                // this.sizeForm.transGoodsVoList=this.hwChecks
            }else{
                    this.sizeForm.transWeight=0
                    this.sizeForm.transVol=0
                    this.sizeForm.transNum=0
                }

        },
        //    dEnter(){
        //     console.log(this.transGoodsVoList,'denter')
        // },
        get(){
             let idsss =this.$store.state.bianji.bianjis[0]
                console.log(this.sizeForm,'id')
                 this.$http.post(`v1/trans/findById?id=`+idsss.id).then(res=>{
                   console.log(res.body.data.transGoodsVoList,'这里面装的啥???????')
                      this.sizeForm=res.body.data
                    //   this.transGoodsVoList=this.sizeForm.transGoodsVoList
                      console.log(this.sizeForm,'原来装的是这些玩意儿啊!!')
             })
        },
        // 负责部门
        oneE(){
            this.dialogVisible1 = true
        },
        flags(val){
             this.dialogVisible1=val
        },
        bms(bm){
            console.log(bm,'bm')
            this.sizeForm.deptName=bm.deptName
            this.sizeForm.deptId=bm.comId
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
            this.sizeForm.carrierId=data.carrierId
        },

        // 司机
        threeE(){
            this.dialogVisible5=true;
        },
        falgTwo(val){
            this.dialogVisible5=val;
        },
        dvs(dv){
            console.log(dv,'dv')
            this.sizeForm.driverName=dv.driverName
            this.sizeForm.driverId=dv.driverId
        },

        // 委托客户
        fourE(){
            this.dialogVisible6=true;
        },
        flagthree(val){
           this.dialogVisible6=val;
        },
        wtss(wt){
            // console.log(wt,'wwwwtttt')
            this.sizeForm.transGoodsVoList[0].goodsName=wt.goodsCnName
            this.sizeForm.transGoodsVoList[0].goodsId=wt.goodsId
            this.sizeForm.transGoodsVoList[0].goodsVol=wt.goodsVolume
            this.sizeForm.transGoodsVoList[0].goodsWeight=wt.goodsWeight
             this.sizeForm.transGoodsVoList[0].goodsNum=wt.goodsNum
            console.log(wt,'wwwwtttt')
        },
        wts(wt){
            console.log(wt,'wt')
            this.sizeForm.custName=wt.custShortname
            this.sizeForm.custId=wt.custId
            this.wtkhId=wt.custId
            console.log(this.wtkhId,'wtkhId')
        },

// -------------------------------------------------------------------
        // 将勾选的货物存起来放到,点击保存的时候赋值给this.sizeForm.transGoodsVoList
        handleSelectionChange(val){
             this.multipleSelection = val;
             
            this.hwChecks=val
                      console.log( this.hwChecks,'hwchecks')
            // 计算总重量总体积总数量
                // 先把当前数组遍历
                // 重量
                let wei = 0
                 // 体积
                let tiji = 0
                // 数量
                let num = 0
                
                let a = this.transGoodsVoList
                if(a.length > 0){
                 ta.forEach(i=>{
                    // console.log(i,'遍历遍历遍历')
                    wei +=i.goodsWeight*i.goodsNum
                    tiji +=i.goodsVol*i.goodsNum
                    num += 1*i.goodsNum
                })
                this.sizeForm.transWeight=wei
                this.sizeForm.transVol=tiji
                this.sizeForm.transNum=num
                this.sizeForm.transGoodsVoList=a
            }else{
                    this.sizeForm.transWeight=0
                    this.sizeForm.transVol=0
                    this.sizeForm.transNum=0
                }
        },
        // 新增货物按钮
        newHw(){
            this.dialogVisible11=!this.dialogVisible11
            this.sizeForm.transGoodsVoList[0].goodsName=null
             this.sizeForm.transGoodsVoList[0].goodsNum=null
              this.sizeForm.transGoodsVoList[0].goodsVol=null
               this.sizeForm.transGoodsVoList[0].goodsWeight=null
        },
        // 第一弹框确定
          elevies(){
             this.dialogVisible11=!this.dialogVisible11
             let a = this.transGoodsVoList
            let n = {
                   "comId": this.wtkhId,
                   "goodsId":   this.sizeForm.transGoodsVoList[0].goodsId,
                   "goodsName": this.sizeForm.transGoodsVoList[0].goodsName,
                   "goodsNum":  this.sizeForm.transGoodsVoList[0].goodsNum,
                   "goodsVol": this.sizeForm.transGoodsVoList[0].goodsVol,
                   "goodsWeight": this.sizeForm.transGoodsVoList[0].goodsWeight,
                }

                if(a.length <= 0){
                    a.push(n)
                }else{
                    let flag = true
                    a.forEach(i=>{
                        if(i.goodsName != n.goodsName){
                            console.log(i,n,'i','n')
                           console.log('你好')
                        }else{
                             console.log(i,n,'i','n')
                            flag=false
                        }
                    })
                    if(flag){
                        a.push(n)
                    }else{
                        this.$confirm('你只能选择不同种类的货物', {
                                confirmButtonText: '确定',
                                type: 'success'
                                })
                            return
                    }
                }
// --------------------------------------------------------

                let wei = 0
                 // 体积
                let tiji = 0
                // 数量
                let num = 0
                if(a.length > 0){
                 a.forEach(i=>{
                    wei +=i.goodsWeight*i.goodsNum
                    tiji +=i.goodsVol*i.goodsNum
                    num += 1*i.goodsNum
                })
                
                this.sizeForm.transWeight=wei
                this.sizeForm.transVol=tiji
                this.sizeForm.transNum=num
                // this.sizeForm.transGoodsVoList=this.hwChecks
            }else{
                    this.sizeForm.transWeight=0
                    this.sizeForm.transVol=0
                    this.sizeForm.transNum=0
                }

          
      
           
            //  console.log(a,'nnnnnn')
        },
        
        // 组件放法
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
  
 
        noWrite(){
            console.log('你好世界!!!')
        },

     


        xms(xm){
            // console.log( this.sizeForm.transGoodsVoList[0],'[][][][][][][]')
            this.xiangmus=xm
            console.log(this.sizeForm.projectShortname,'xm')
            this.sizeForm.projectShortname=this.xiangmus.projectShortname
             this.sizeForm.projectId=this.xiangmus.id
         
        },
        // 组件放法
        handleChange(val) {
            console.log(val);
        },
        add(){
             this.$http.post("v1/trans/update",this.sizeForm).then(res => {
                  
                if(res.status==200){
                  console.log(res,'++')
                    this.$router.push('/transportation/Waybill')
                }else{
                    console.log('添加失败')
                }
            });
        },
        toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$ref.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$ref.multipleTable.clearSelection();
        }
      },
      back(){
          this.$router.go(-1)
      },
    }
  }
</script>
<style>
    *{
        list-style: none;
    }
    .query{
  margin:auto;
  width:100%;
  overflow:hidden;
}
.query .one{
float:left;
width:40%
}
.query ul{
overflow:hidden;
}
.query li{
    width:400px;
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

.twoWei{
    width:30%;
    height:100%;
    background:#ccc;
    z-index:33;
}
.twoWei input{
    width:300px;
}
ul li{
    float:left;
}
ul{
    overflow:hidden;
}
</style>