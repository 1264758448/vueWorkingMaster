<template>
  <div class="menu-container">
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


  </div>
</template>
<script>
  export default {
    data() {
      return {
         flagsss:false,
        tableData: [],
        multipleSelection: [],
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
       // 表头数据
        hData:[
          {label:'货物名称',
            prop:'goodsCnName',
            width:'120'
          },
          {label:'重量',
            prop:'goodsWeight',
            width:'120'
          },
          {label:'单位',
            prop:'goodsWeight',
            width:'120'
          },
          {label:'体积',
            prop:'goodsVolume',
            width:'120'
          },
          {label:'数量',
            prop:'custAddMan',
            width:'120'
          },
        ],
       
        
      }
    },
    created() {
      this.filter()
    },
     props:['wtkhId'],
    methods: {
      // 表头数据
      header(){

      },
      // 详情
      aa(row, column, e){
          console.log(row,'wei')
        //   this.$store.commit('bianji',row)
            this.$emit('wt',row)
            this.$emit('flag',this.flagsss)
            console.log(this.wtkhId,'wwwwwwwyttttttttttt')
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
            this.$ref.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$ref.multipleTable.clearSelection();
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
                this.$http.post(`v1/customerGoods/findByCustId?custId=`+this.wtkhId).then(res =>{
                 if(res.status==200){
                    console.log(res,'filter')
                    console.log(res.body.data.result,'666')
                    this.tableData=res.body.data
                }else{
                    console.log('添加失败')
                }
                console.log(res.body.data,'wid')
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