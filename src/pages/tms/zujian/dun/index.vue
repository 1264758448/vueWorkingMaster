<template lang="">
    <div>
           <!-- 查询栏 -->
           <div class='query'>
                        <ul>
                            <li>                          
                                <el-form ref="form" :model="only" label-width="80px" size="mini">
                                    <el-form-item label="关键数字">
                                    <el-input v-model="only.dictItemId"></el-input>
                                    </el-form-item>
                                </el-form>
                            </li>
                        </ul>
                        <button @click='dunFifle'>查询</button>
            </div>

             <!-- 数据栏 -->
              <el-table
                  ref="multipleTable"
                  :data="numDUN"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @row-click='dun'>

                  <el-table-column
                    property="prop"
                    label="label"
                    width="120">
                  </el-table-column>


                </el-table>



    </div>
</template>
<script>
export default {
    data(){
        return{
            sizeForm:{
                driverName:1
            },
            hData:[],
            // 存放吨位
            numDUN:[],
            // 查询格式
            only:{
                dicItemDesc:null,
                dictId:null,
                dictItemId:null,
                dictItemName:null,
                dictName:null
            },
            flag:false,
        }
    },
    props:[
        'numD'
    ],
    created() {
        this.dunFifle()
    },
    methods: {
        dun(row){
            console.log(row)
            this.$emit('two',row.prop)
            this.$emit('falseOne',this.flag)
        },
        // 查询事件
        dunFifle(){
                this.$http.post(this.numD[0],{
                    // dictItemId:this.only.dictItemId,
                    dictName:'车辆管理'
                }).then(res => {
                console.log(res.body.data,'query')
                if(res.status==200){
                    let all = res.body.data
                        all.forEach(item=>{
				           if(item.dictName==this.numD[1]){
                               var nd = {
                                   label:null,
                                   prop:null
                               }
                               nd.label=item.dictName
                               nd.prop=item.dictItemName
                               this.numDUN.push(nd)
                           }
			            })
                       
                }else{
                    console.log('查询失败')
                }
                     console.log(this.numDUN,'nd')
            });
        
        },
    },
}
</script>