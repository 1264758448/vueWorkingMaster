<template>
    <div> 
        <div class='one'>
            <el-button @click='add'>保存</el-button>
            <el-button >返回</el-button>
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
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="承运商名称">
                            <el-input v-model="sizeForm.carrierName"></el-input>
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

        <moreCar :vBig='vBig'
        :vSmallOne='vSmallOne'
        :numD='numD'
         v-on:all='allData'
        ></moreCar>

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
                        property="prop"
                        label='司机名称'
                        show-overflow-tooltip>
                    </el-table-column>
        </el-table>
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
        allDatas:[]
      }
    },


    created() {
        this.cc()
    },
    methods: {
        cc(){
          this.sizeForm=this.$store.state.bianji.bianjis[0]
          console.log(this.sizeForm,'size')
        },
         // 子组件穿过来的最终值
            allData(val){
                console.log(val,'子组件')
                let all={
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
                all.addName=val.driverName
                all.addUserid=val.driverId
                this.allDatas.push(all)
            },
        // 新增表单的勾选事件
            allDataDian(val){
                  this.sizeForm.basicTruckDrivers=val
            },
            // 最终保存按钮
             add(){
                this.$http.post("v1/truck/update/",this.sizeForm).then(res=>{
                    console.log(res,'add')
                    if(res.status==200){
                        this.$router.push('car')
                    }
                })
            },
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
</style>