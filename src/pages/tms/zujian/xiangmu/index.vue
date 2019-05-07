<template>
  <div class="menu-container">
    <div class='query'>
            <ul>
              <li>                          
                  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="项目编号">
                      <el-input v-model="sizeForm.projectCode"></el-input>
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
              <li>                          
                  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="项目名称">
                      <el-input v-model="sizeForm.projectName"></el-input>
                    </el-form-item>
                  </el-form>
              </li>
            </ul>
            <button @click='filter'>查询</button>
            <button @click='clearn'>清除</button>
    </div>
                <el-table
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @row-click='aa'
                  @selection-change="handleSelectionChange">

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

                <div class="block">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                  </el-pagination>
                </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        multipleSelection: [],
        sizeForm: {
          "comId": null,
          "id": null,
          "page": {
            "endRow": 0,
            "pageNum": 0,
            "pageSize": 0,
            "pages": 0,
            "startRow": 0,
            "total": 0
          },
          "projectCode": null,
          "projectName":null,
          "projectShortname":null,
          "projectState": 0,
          "uDelete": 0
        },
      // 控制操作页显示或者隐藏
        flag:true,
        // ----------------------------
        // 存放多条删除数据
        deleterr:[],
        bianji:[],
       // 表头数据
        hData:[
          {label:'状态',
            prop:'projectState',
            width:'120'
          },
          {label:'项目编号',
            prop:'projectCode',
            width:'120'
          },
          {label:'项目名称',
            prop:'projectName',
            width:'120'
          },
          {label:'项目简称',
            prop:'projectShortname',
            width:'120'
          },
        ]
        
      }
    },
    created() {
      this.filter()
    },
    methods: {
      // 表头数据
      header(){

      },
      // 详情
      aa(row, column, e){
          console.log(row)
        //   this.$store.commit('bianji',row)
        this.$emit('xm',row)
      },
      // 清除
     clearn(){
              let a ={
                  "comId": "",
                  "id": "",
                  "page": {
                    "endRow": 0,
                    "pageNum": 0,
                    "pageSize": 0,
                    "pages": 0,
                    "startRow": 0,
                    "total": 0
                  },
                  "projectCode": "",
                  "projectName": "",
                  "projectShortname": "",
                  "projectState": 0,
                  "uDelete": 0
              }
      this.sizeForm=a
    },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        // 装进删除数组
        this.deleterr=val;
        this.bianji=val;
        console.log(this.bianji,'pp')
        console.log(this.deleterr,'dd')
      },
      // 分页
      handleSizeChange(val) {
              console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
              console.log('进入详情');
      },
      filter(){
        console.log(this.sizeForm,'f')
                this.$http.post("v1/project/query/",{ 
                      "projectCode":this.sizeForm.projectCode,
                      "projectShortname":this.sizeForm.projectShortname,
                      "projectName":this.sizeForm.projectName,
                }).then(res =>{
                 if(res.status==200){
                    console.log(res,'filter')
                    console.log(res.body.data.result,'666')
                    this.tableData=res.body.data.result
                }else{
                    console.log('添加失败')
                }

          });
        },
    }

  }
  
</script>


<style scoped>
  .block{
    margin:auto;
    text-align:center;
    margin-top:50px;
  }
  *{
    list-style:none;
  }
</style>