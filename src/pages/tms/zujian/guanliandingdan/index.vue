<template>
    <div>
        <ul>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="委托客户(查)">
                      <el-input v-model="sizeForm.carrierMail"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="委托单号">
                      <el-input v-model="sizeForm.carrierDesc"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="久凌单号">
                      <el-input v-model="sizeForm.carrierTax"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="承运商(查)">
                      <el-input v-model="sizeForm.carrierTax"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
       </ul>
            <el-button @click='add'>查询</el-button>
            <el-button >返回</el-button>
       <el-table
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                   @row-click='aa'>

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
         
        </el-table>

    </div>
</template>
<script>
export default {
    data(){
        return{
            sizeForm:  {
                "com_id": null,
                "dept_code": null,
                "dept_manager": null,
                "dept_name": null,
                "dept_state": null,
                "page": {
                    "endRow": null,
                    "pageNum": null,
                    "pageSize": null,
                    "pages": null,
                    "startRow": null,
                    "total": null
                },
                "uDelete": null
                },
                hData:[
                      {label:'委托单号',
                        prop:'deptCode',
                          width:'120'
                      },
                      {label:'久凌单号',
                          prop:'deptName',
                          width:'120'
                      },
                      {label:'委托客户',
                          prop:'deptShortName',
                          width:'120'
                      },
                      {label:'承运商',
                          prop:'deptUpId',
                          width:'120'
                      },
                          {label:'添加时间',
                          prop:'deptManager',
                          width:'120'
                      },
                    ],
                    tableData:[]
        }
    },
    created() {
        this.add()
    },
    methods: {
        aa(row){
            console.log(row)
            this.$emit('bm',row.deptName)
        },
        add(){
                this.$http.post("v1/dept/query/",this.sizeForm).then(res=>{
                    console.log(res,'bumen')
                    if(res.status==200){
                        //  this.$router.push('information')
                      this.tableData=res.body.data.result
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
</style>