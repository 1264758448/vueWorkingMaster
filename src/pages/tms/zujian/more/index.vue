<template>
    <div class='box'>

          <el-button  @click="outerVisible = true">添加关联车辆</el-button>

            <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
                                <!-- 第二层弹框 -->
                                    <!-- 承运商信息 -->
                                    <el-dialog
                                        width="60%"
                                        title="获取承运商信息"
                                        :visible.sync="innerVisible"
                                        append-to-body>

                                       <cy :vSmallOne='vSmallOne' v-on:one='DadOne' v-on:false='flag'></cy>
                                     
                                    </el-dialog>


                                    <!-- 吨数选择栏 -->
                                    <el-dialog
                                        width="60%"
                                        title="获取吨位信息"
                                        :visible.sync="innerVisible2"
                                        append-to-body>

                                        <dun :numD='numD' v-on:two='DadTwo' v-on:falseOne='flag1'></dun>               

                                    </el-dialog>
                                  <!-- 第二层弹框end -->

                                <!-- 第一层弹框的查询条件 -->
                                    <div class='query'>
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

                                                        <el-form ref="form" :model="vBig[1]" label-width="80px" size="mini">
                                                            <el-form-item label="承商名称">
                                                                <div class='ones' @click='twoE'>
                                                                <el-input v-model="vBig[1].carrierName" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                                                </div>
                                                            </el-form-item>
                                                        </el-form>
                                                    </li>




                                                    <li>                          
                                                        <el-form ref="form" :model="vBig[1]" label-width="80px" size="mini">
                                                            <el-form-item label="车辆种类">
                                                            <el-input v-model="vBig[1].truckType"  prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                                            </el-form-item>
                                                        </el-form>
                                                    </li>
                                                    <li>                          
                                                        <el-form ref="form" :model="vBig[1]" label-width="80px" size="mini">
                                                            <el-form-item label="车牌号">
                                                            <el-input v-model="vBig[1].truckCode"  prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                                            </el-form-item>
                                                        </el-form>
                                                    </li>
                                                    <li>                          
                                                        <el-form ref="form" :model="vBig[1]" label-width="80px" size="mini">
                                                            <el-form-item label="载重量">
                                                            <div class='dialog' @click='zz'>
                                                            <el-input v-model="vBig[1].truckLoad"  prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                                                            </div>
                                                            </el-form-item>
                                                        </el-form>
                                                    </li>
                                                </ul>
                                                    <button @click='smallFilter'>查询</button>
                                                    <button @click='clean'>清除</button>
                                    </div>


                                <!-- 第一层弹框的表格 -->
                                    <el-table
                                        ref="multipleTable"
                                        :data="tableData1"
                                        tooltip-effect="dark"
                                        style="width: 100%"
                                        @row-click='aaBig'>

                                        <el-table-column
                                            type="selection"
                                            width="55">
                                        </el-table-column>

                                        <el-table-column
                                            type="index"
                                            width="50">
                                        </el-table-column>

                                        <el-table-column
                                        v-for="(item,index) in vBig[2]"
                                        :key='index'
                                            :prop='item.prop'
                                            :label='item.label'
                                            show-overflow-tooltip>
                                        </el-table-column>

                                    </el-table>
                                <!-- 第一层弹框end -->
                      

                                <div slot="footer" class="dialog-footer">
                                    <el-button @click="outerVisible = false">取 消</el-button>
                                </div>
            </el-dialog>

    </div>
</template>

<script>
  export default {
    data() {
      return {
       
      };
    }
  }
</script>
<script>
export default {
    data(){
        return{
            
                // 承运商状态
            vSmallOne:this.$store.state.details.cy,
            dialogVisible4:false,
             // 组件固定数值
            outerVisible: false,
            innerVisible: false,
            innerVisible2:false,
            // 第一层弹框数据渲染存放
             tableData1: [],
            //  存放第一层弹框的数据,用于渲染到新增下面
            //  aaBigData:this.vBig[1],
        }
    },
    // 要拿的数据:①第一弹框的接口(vuex默认第一项),②表格头部信息vHead对应的是hData1(vuex第三项),③第一弹框表头对应的数据vBig[1](是新增弹框的vBig[1] vuex默认第二项)
        // vBig是第一层弹框数据,vSmallOne是第二层第一个弹框数据,vSmallTwo是第二层第二个弹框数据
        props:[
            'vBig','vSmallOne','numD'
        ],
    created() {
        this.smallFilter(),
        this.clean()
    },
    methods: {
               // 承运商
     twos(data){
            console.log(data,'data')
            this.vBig[1].carrierName=data.carrierName
            this.vBig[1].carrierId=data.carrierId
        },

    twoE(){
            this.dialogVisible4=true;
        },
    flagsOne(val){
            this.dialogVisible4=val
        },
        // 二层弹框传回数值
        flag1(f){
                this.innerVisible2=f
        },
        flag(f){
                this.innerVisible=f
        },
        // -----------打开二层弹框-------------
        cys(){
            this.innerVisible = true
        },
        zz(){
             this.innerVisible2 = true
        },
        // --------------------------------------
        DadOne(oneData){
            this.vBig[1].carrierName=oneData
            console.log(oneData,'oneData')
        },
        DadTwo(twoData){
             this.vBig[1].truckLoad=twoData
            console.log(twoData,'twoData')
        },
        // 最外层下面的表的勾选事件
        // aaBigBig(row){
        //     this.multipleSelection = val;
        //     // this.aaBigBigData=val
        //      this.$emit('all',row.carrierName)
        // },

        // 第一层弹框点击后存起来，用来对外层渲染
        aaBig(row, column, e){
            console.log(row,'row')
            // this.aaBigData=row
            this.$emit('all',row)
            this.outerVisible = false
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

        // 分页
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
    // 第一层弹框查询按钮事件
        smallFilter(){
                this.$http.post(this.vBig[0],this.vBig[1]).then(res => {
                console.log(this.vBig[1],'query')
                 console.log(res.body.data.result,'88')
                if(res.status==200){
                    this.tableData1=res.body.data.result
                    console.log(this.tableData,'tableData')
                }else{
                    console.log('查询失败')
                }
            });
            console.log(this.urltwo,'ppppppcccc')
        },
        clean(){
            this.vBig[1].carrierName=null
            this.vBig[1].truckType=null
            this.vBig[1].truckCode=null
            this.vBig[1].truckLoad=null
        },
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
  width:80%;
}
.query li{
    width:100%;
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
.dialog{
    z-index:2000;
    width:100%;
    height:100%;
}
</style>