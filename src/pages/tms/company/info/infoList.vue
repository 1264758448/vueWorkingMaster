<template>
  <div class="menu-container">
      <el-button @click='flag=!flag' type="primary" plain>调整</el-button>
    <div class='query' v-show='flag'>
            <ul>
              <li>                          
                  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="货品编号">
                      <el-input v-model="sizeForm.goodsCode"  prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-form>
              </li>
               <li>                          
                  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="客户名称">
                      <el-input v-model="sizeForm.custName"  prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-form>
              </li>
              <li>                          
                  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="货品简称">
                      <el-input v-model="sizeForm.goodsShortName"  prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-form>
              </li>
              <li>                          
                  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="货品品牌">
                      <el-input v-model="sizeForm.goodsBrand"  prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-form>
              </li>
            </ul>
            <el-button  @click='filter' type="primary" plain>查询</el-button>
            <el-button  @click='add' type="primary" plain>添加</el-button>
            <el-button  @click='dele' type="primary" plain>删除</el-button>
            <el-button  @click='bianxie' type="primary" plain>修改</el-button>
            <el-button  @click='clearn' type="primary" plain>清除</el-button>
    </div>
   <div class="menu-container">
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
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // 数据存放处
        tableData: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        multipleSelection: [],
        // --------------------------
        sizeForm: {
           "comId": null,
           "custName": null,
           "goodsBrand": null,
           "goodsCnName": null,
           "goodsCode": null,
           "goodsId": null,
           "goodsShortName": null,
           "goodsState": null,
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
        // 控制操作页显示或者隐藏
        flag:true,
        // ----------------------------
        // 存放多条删除数据
        deleterr:[],
        bianji:[],
        hData:[
          {label:'状态',
            prop:'goodsState',
            width:'120'
          },
          {label:'货品编码',
            prop:'goodsCode',
            width:'120'
          },
          {label:'货品简称',
            prop:'goodsShortName',
            width:'120'
          },
          {label:'客户名称',
            prop:'custName',
            width:'120'
          },
          {label:'货品品牌',
            prop:'goodsBrand',
            width:'120'
          },
        ]
        
      }
    },
  created() {
      this.filter()
  },
    methods: {
          // 详情
      aa(row, column, e){
        let hDatas=this.hData
          this.$store.commit("details",row)
          this.$store.commit("hDatas",hDatas)
          this.$router.push('dInfo')
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
        console.log(`当前页: ${val}`);
      },
    // 查询按钮事件
    filter(){
          console.log(this.sizeForm,'filter')
             this.$http.post("v1/customerGoods/query/",this.sizeForm).then((res) => {
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
     // 添加跳转按钮事件
    add(){
        this.$router.push('addInfo')
    },
    clearn(){
      let a ={
         "comId": "",
           "custName": "",
           "goodsBrand": "",
           "goodsCnName": "",
           "goodsCode": "",
           "goodsId": "",
           "goodsShortName": "",
           "goodsState": 0,
           "page": {
             "endRow": 0,
             "pageNum": 10,
             "pageSize": 10,
             "pages": 0,
             "startRow": 0,
             "total": 0
           },
           "uDelete": 0
      }
      this.sizeForm=a
    },
    // 删除
    dele(){
          var ids = [];
          this.deleterr.forEach(element =>{
            ids.push(element.goodsId)
          })
          console.log( ids)
            this.$http.post("v1/customerGoods/delete/",ids).then(res=>{
                console.log(res,'dele')
                       this.filter();
          })
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
          // console.log(this.$store.state.bianji.bianjis,'ddd')
          this.$router.push('bianjiInfo')
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
  width:100%;
}
.query ul{
overflow:hidden;
}
.query li{
    width:20%;
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
