<template>
    <div> 
        <div class='one'>
            <el-button @click='add'>保存</el-button>
            <el-button @click='back'>返回</el-button>
                <ul>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="车辆种类">
                            <el-input v-model="sizeForm.truckType"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                                <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="车架号">
                            <el-input v-model="sizeForm.truckFrameCode"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li>
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="车辆高度(米)">
                            <el-input v-model="sizeForm.truckHeight"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="车辆描述">
                            <el-input v-model="sizeForm.truckDescription"></el-input>
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
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="燃油种类">
                            <el-input v-model="sizeForm.truckFuelType"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="车辆长度(米)">
                            <el-input v-model="sizeForm.truckLength"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="车辆容积(立方米)">
                            <el-input v-model="sizeForm.truckVolume"></el-input>
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
                            <el-form-item label="载重量">
                            <el-input v-model="sizeForm.truckLoad"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="车辆品牌">
                            <el-input v-model="sizeForm.truckBrand"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="营运证号">
                            <el-input v-model="sizeForm.truckTaxiLicense"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="车辆宽度(米)">
                            <el-input v-model="sizeForm.truckWidth"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="车辆发动机号">
                            <el-input v-model="sizeForm.truckEngine"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                </ul>
        </div>

  


        <el-table
                    ref="multipleTable"
                    :data="allDatas"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="allDataDian">

                    <el-table-column
                        type="selection"
                        width="55">
                    </el-table-column>

                    <el-table-column
                        property="driverName"
                        label='司机名称'
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

         <moreCar :vBig='vBig'
        :vSmallOne='vSmallOne'
        :numD='numD'
         v-on:all='allData'
        ></moreCar>

    </div>
</template>
<script>
export default {
    data(){
        return{
      
        // 当前页面添加数据
           sizeForm:{
                    "addDate": null,
                    "addName": null,
                    "addUserid": null,
                    "basicTruckDrivers": [
                        {
                        'driverName':null,
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
                    "carrierId": null,
                    "carrierName": null,
                    "comId": null,
                    "comPf": null,
                    "originalId": null,
                    "truckBody": null,
                    "truckBrand": null,
                    "truckCheck": null,
                    "truckCode": null,
                    "truckDescription": null,
                    "truckEngine": null,
                    "truckEngineCode": null,
                    "truckFrameCode": null,
                    "truckFuelType": null,
                    "truckHeight": null,
                    "truckId": null,
                    "truckInsurance": null,
                    "truckLength": null,
                    "truckLoad": null,
                    "truckNum": null,
                    "truckOwner": null,
                    "truckOwnerType": null,
                    "truckPhoto": null,
                    "truckSource": null,
                    "truckState": null,
                    "truckTaxiLicense": null,
                    "truckTonnage": null,
                    "truckType": null,
                    "truckVolume": null,
                    "truckWidth": null,
                    "uDelete": null,
                    "uTime": null,
                    "updDate": null,
                    "updName": null,
                    "videoEquipmentId": null
                    },
        // vuex中拿到car的数据作为第一弹出框的传参穿过去
            vBig:this.$store.state.details.driver,
        // vuex中拿到car的数据作为第二弹出框第一个框的传参穿过去
            vSmallOne:this.$store.state.details.cy,
        // vuex中拿到car的数据作为第二弹出框第二个框的传参穿过去
            numD:this.$store.state.details.numD,
        // -----------------------------------------
        allDatas:[],
        die:[],
          // 承运商状态
            dialogVisible4:false,
      }
    },


    created() {
        // this.newThis()
    },
    methods: {
             handleDelete(a,b){
                  this.sizeForm.basicTruckDrivers.splice(a,1);
                },
        // 时间处理
            dateFormat: function(row, column) {
            console.log(row, column)
            const date = row[column.property]
            if (date === undefined) {
                return ''
            }
            // # 这里的格式根据需求修改
            return moment(date).format('YYYY-MM-DD HH:mm:ss')
            },
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

         // 子组件穿过来的最终值
            allData(val){
                console.log(val,'子组件')
                let all= {
                        'driverName':null,
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
                all.driverName=val.driverName
                all.driverId=val.driverId
                this.allDatas.push(all)
                 this.sizeForm.basicTruckDrivers=this.allDatas
                 console.log( this.sizeForm.basicTruckDrivers)
            },
        // 新增表单的勾选事件
            allDataDian(val){
                //  this.sizeForm.basicTruckDrivers=val
                //     console.log( this.die,'xinzengbiaodan')
            },
            // 最终保存按钮
             add(){
                 this.addDate=new Date()
                this.$http.post("v1/truck/insert/",this.sizeForm).then(res=>{
                    console.log(res,'add')
                    if(res.status==200){
                        this.$router.push('car')
                    }
                })
            },
            back(){
                this.$router.go(-1)
            }
    },

}
</script>
<style>
 *{
        list-style:none;
    }
ul li{
    float:left;
    width:25%
}
ul{
    overflow:hidden;
    width:80%;
}
.one{
    overflow:hidden;
}
</style>