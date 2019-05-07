<template>
  <div class="menu-container">

        <el-button @click='flag=!flag' type="primary" plain>调整</el-button>
    <div class='query' v-show='flag'>
            <ul>
              <li>                          
                  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="项目编号">
                      <el-input v-model="sizeForm.projectCode" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-form>
              </li>
               <li>                          
                  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="项目简称">
                      <el-input v-model="sizeForm.projectShortname" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-form>
              </li>
              <li>                          
                  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="项目名称">
                      <el-input v-model="sizeForm.projectName" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-form>
              </li>
            </ul>
         
            <el-button  @click='filter' type="primary" plain>查询</el-button>
            <el-button  @click='add' type="primary" plain>添加</el-button>
            <el-button  @click='deleter' type="primary" plain>删除</el-button>
            <el-button  @click='bianxie' type="primary" plain>修改</el-button>
            <el-button  @click='clearn' type="primary" plain>清除</el-button>
    </div>
                <el-table
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @row-click='aa'
                  @selection-change="handleSelectionChange">

                  <el-table-column
                    type="selection"
                    width="55">
                  </el-table-column>

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
        let hDatas=this.hData
          this.$store.commit("details",row)
            this.$store.commit("hDatas",hDatas)
            console.log(hDatas,'111')
          this.$router.push('details')
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
      // 编辑
      bianxie(){
      if(this.bianji.length!=1){
        this.$confirm('请至少选择一个且必须选择一个', {
              confirmButtonText: '确定',
              type: 'success'
            })
          return;
      }else{
      this.$store.commit("bianji",this.bianji)
      }
      this.$router.push('bianjiXiangmu')
      },
      deleter(){
           var ids = [];
          this.deleterr.forEach(element =>{
            ids.push(element.id)
          })
       
            this.$http.post("http://47.100.107.137:8871/api/v1/project/delete/",ids).then(res=>{
                 console.log(ids,'ids')
                console.log(res,'dele')
                     this.filter();
            })
     
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
      add(){
          this.$router.push('addXiangmu')
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

               console.log(this.sizeForm,'filter')
             this.$http.post("v1/project/query/",{ 
                      "projectCode":this.sizeForm.projectCode,
                      "projectShortname":this.sizeForm.projectShortname,
                      "projectName":this.sizeForm.projectName,
                }).then((res) => {
                  console.log(res.body.code)
                if(res.body.code === '0002' ){
                      this.$confirm('暂无信息', {
                        confirmButtonText: '确定',
                        type: 'success'
                      })
                      this.tableData=[]
                    return;
                 }else{
                      this.tableData=res.body.data.result
                 }
            })   



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
  .query{
  margin:auto;
  width:100%;
}
.query ul{
overflow:hidden;
}
.query li{
    width:30%;
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
</style>