<template>
  <div class="menu-container">
    <el-button @click='flag=!flag' type="primary" plain>调整</el-button>
    <div class='query' v-show='flag'>
            <ul>
              <li>                          
                  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="联系电话">
                      <el-input v-model="sizeForm.custPhone"  prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-form>
              </li>
               <li>                          
                  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="企客简称">
                      <el-input v-model="sizeForm.custShortName" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-form>
              </li>
              <li>                          
                  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="企客名称">
                      <el-input v-model="sizeForm.custName" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-form>
              </li>
            </ul>
            <div>
            <el-button  @click='filter' type="primary" plain>查询</el-button>
            <el-button  @click='add' type="primary" plain>添加</el-button>
            <el-button  @click='dele' type="primary" plain>删除</el-button>
            <el-button  @click='bianxie' type="primary" plain>修改</el-button>
            <el-button  @click='clearn' type="primary" plain>清除</el-button>
            </div>
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
          "countType": null,
          "custAddMan": null,
          "custAddTime": null,
          "custAddress": null,
          "custAppBackground": null,
          "custAvator": null,
          "custCode": null,
          "custFax": null,
          "custId": null,
          "custIsNotice": null,
          "custIsPosition": null,
          "custLoginName": null,
          "custMemo": null,
          "custName": null,
          "custPassword": null,
          "custPhone": null,
          "custPre": null,
          "custShortname": null,
          "custSign": null,
          "custState": null,
          "custTarget": null,
          "custZip": null,
          "deptId": null,
          "dspCode": null,
          "dspName": null,
          "goodsClass": null,
          "orgId": null,
          "page": {
            "endRow": null,
            "pageNum": null,
            "pageSize": null,
            "pages": null,
            "startRow": null,
            "total": null
          },
          "uDelete": null,
          "uTime": null
        },
        // 控制操作页显示或者隐藏
        flag:true,
        // ----------------------------
        // 存放多条删除数据
        deleterr:[],
        bianji:[],
        hData:[
          {label:'企业客户名称',
            prop:'custName',
            width:'120'
          },
          {label:'企业客户简称',
            prop:'custShortname',
            width:'120'
          },
          {label:'联系电话',
            prop:'custPhone',
            width:'120'
          },
            {label:'添加人',
            prop:'custAddMan',
            width:'120'
          },
            {label:'时间',
            prop:'time',
            width:'120'
          },
        ]
      }
    },
  created() {
      this.filter()
  },
    methods: {
      aa(row, column, e){
        let hDatas=this.hData
          this.$store.commit("details",row)
          this.$store.commit("hDatas",hDatas)
          this.$router.push('dGoods')
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
        console.log(val,'val')
        console.log(this.bianji,'pp')
        // console.log(this.deleterr[0].custId,'dd')
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
             this.$http.post("v1/customer/query/",this.sizeForm).then((res) => {
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
            // --------------------------------------------
    },
     // 添加跳转按钮事件
    add(){
          this.$router.push('add')
    },
    clearn(){
      let a ={
          "comId": null,
          "countType": null,
          "custAddMan": null,
          "custAddTime": null,
          "custAddress": null,
          "custAppBackground": null,
          "custAvator": null,
          "custCode": null,
          "custFax": null,
          "custId": null,
          "custIsNotice": 0,
          "custIsPosition": 0,
          "custLoginName": null,
          "custMemo": null,
          "custName": null,
          "custPassword": null,
          "custPhone": null,
          "custPre": null,
          "custShortname": null,
          "custSign": null,
          "custState": null,
          "custTarget": null,
          "custZip": null,
          "deptId": null,
          "dspCode": null,
          "dspName": null,
          "goodsClass": null,
          "orgId": null,
          "page": {
            "endRow": null,
            "pageNum": null,
            "pageSize": null,
            "pages": null,
            "startRow": null,
            "total": null
          },
          "uDelete": null,
          "uTime": null
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
          this.$router.push('bianji')
          console.log('stop')
      },
      // 删除
    dele(){
          var ids = [];
          this.deleterr.forEach(element =>{
            ids.push(element.custId)
          })
          console.log(ids,'dis')

            this.$http.post("v1/customer/delete/",ids).then(res=>{
              // if(ids.length == this.tableData.length){
              //   this.$router.go(0)
              // }
                console.log(res)
                 this.filter()
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
