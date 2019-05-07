<template>
    <div> 
        <div class='one'>
            <el-button @click='add'>保存</el-button>
            <el-button @click='back'>返回</el-button>
                <ul>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="第二联系方式">
                            <el-input v-model="sizeForm.driverMobileSec"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                                <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="第三联系方式">
                            <el-input v-model="sizeForm.driverMobileThr"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li>
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="驾驶证号">
                            <el-input v-model="sizeForm.driverJszNo"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="开户城市">
                            <el-input v-model="sizeForm.cardCity"></el-input>
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
                            <el-form-item label="性别">
                            <el-input v-model="sizeForm.driverGender"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="身份证号">
                            <el-input v-model="sizeForm.driverSfz"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="婚姻情况">
                            <el-input v-model="sizeForm.driverMariiage"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="紧急联系人">
                            <el-input v-model="sizeForm.urgentMan"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="熟悉城市一">
                            <el-input v-model="sizeForm.city01"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="熟悉城市二">
                            <el-input v-model="sizeForm.city02"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="开户银行">
                            <el-input v-model="sizeForm.cardBank"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="开户人">
                            <el-input v-model="sizeForm.cardName"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="备注">
                            <el-input v-model="sizeForm.driverText"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="司机姓名">
                            <el-input v-model="sizeForm.driverName"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="出生日期">
                            <el-input v-model="sizeForm.driverBirthday"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="家庭住址">
                            <el-input v-model="sizeForm.driverAddress"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="联系方式">
                            <el-input v-model="sizeForm.driverMobile"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                    <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="紧急联系人电话">
                            <el-input v-model="sizeForm.urgentMobile"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                            <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="开户省份">
                            <el-input v-model="sizeForm.cardProvince"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                            <li> 
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                            <el-form-item label="银行账号">
                            <el-input v-model="sizeForm.bankNo"></el-input>
                            </el-form-item>
                        </el-form>
                    </li>
                </ul>
        </div>

        <more :vBig='vBig'
        :vSmallOne='vSmallOne'
        :numD='numD'
         v-on:all='allData'
        ></more>

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
                     property="truckCode"
                    label='车牌号'
                     show-overflow-tooltip>
                  </el-table-column>
                </el-table>


    </div>
</template>
<script>
export default {
    data(){
        return{

        // 其他添加数据
           sizeForm:{
 
                // "addDate": null,
                // "addName": null,
                // "addUserid": null,
                // "bankNo": null,
                // "basicTruckDrivers": [
                //     {
                //     "addDate": null,
                //     "addName": null,
                //     "addUserid": null,
                //     "comId": null,
                //     "driverId": null,
                //     "id": null,
                //     "truckCode": null,
                //     "truckId": null,
                //     "uDelete": null,
                //     "uTime": null
                //     }
                // ],
                // "cardBank": null,
                // "cardCity": null,
                // "cardName": null,
                // "cardProvince": null,
                // "carrierId": null,
                // "carrierName": null,
                // "city01": null,
                // "city02": null,
                // "comId": null,
                // "comPf": null,
                // "driverAddress": null,
                // "driverBirthday": null,
                // "driverBxk": null,
                // "driverCheck": null,
                // "driverCredit": null,
                // "driverFirst": null,
                // "driverGender": null,
                // "driverId": null,
                // "driverJqx": null,
                // "driverJsz": null,
                // "driverJszNo": null,
                // "driverMariiage": null,
                // "driverMobile": null,
                // "driverMobileSec": null,
                // "driverMobileThr": null,
                // "driverName": null,
                // "driverNum": null,
                // "driverPassword": null,
                // "driverSfz": null,
                // "driverSource": null,
                // "driverState": null,
                // "driverText": null,
                // "driverXsz": null,
                // "driverXszCopy": null,
                // "driverYyz": null,
                // "driverZgz": null,
                // "originalId": null,
                // "sfzBack": null,
                // "sfzFace": null,
                // "uDelete": null,
                // "uTime":null,
                // "updDate": null,
                // "updName": null,
                // "urgentMan": null,
                // "urgentMobile": null,
                // "wxNumber": null

            },
        // vuex中拿到car的数据作为第一弹出框的传参穿过去
            vBig:this.$store.state.details.car,
        // vuex中拿到car的数据作为第二弹出框第一个框的传参穿过去
            vSmallOne:this.$store.state.details.cy,
        // vuex中拿到car的数据作为第二弹出框第二个框的传参穿过去
            numD:this.$store.state.details.numD,
        // -----------------------------------------
        allDatas:[]
      }
    },


    created() {
        // this.newThis()
        this.get()
    },
    methods: {
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
                all.truckId=val.truckId
                all.truckCode=val.truckCode
                this.allDatas.push(all)
            },
        // 新增表单的勾选事件
            allDataDian(val){
                 this.sizeForm.basicTruckDrivers=val
                    console.log(val,'xinzengbiaodan')
            },
            // 最终保存按钮
             add(){
                this.$http.post("v1/driver/update/",this.sizeForm).then(res=>{
                    console.log(res,'add')
                    if(res.status==200){
                        this.$router.push('driver')
                    }
                })
            },
            back(){
                this.$router.go(-1)
            },
            get(){
            let details= this.$store.state.bianji.bianjis[0]
            this.$http.post( `v1/driver/qryDetail?driverId=`+details.driverId).then(res=>{
              console.log(res.body.data,'get')
                this.sizeForm=res.body.data
            })
            console.log( this.sizeForm,'sizesize')
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
</style>