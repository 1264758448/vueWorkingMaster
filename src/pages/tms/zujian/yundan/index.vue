<template>
  <div class="menu-container">
            <button>添加</button>
            <button>删除</button>
            

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
        vSmallOne:this.$store.state.details.cy,
        //   element组件参数
        dialogVisible6: false,
        dialogVisible4: false,
        // 数据存放处
        tableData: [],
        multipleSelection: [],
        // --------------------------
       sizeForm: {
            "addDateBegin": null,
            "addDateEnd": null,
            "carrierId": null,
            "carrierName": null,
            "custId": null,
            "custName": null,
            "driverId": null,
            "driverName": null,
            "id": null,
            "page": {
              "endRow": null,
              "pageNum": null,
              "pageSize": null,
              "pages": null,
              "startRow": null,
              "total": null
            },
            "projectId": null,
            "projectShortname": null,
            "recieverId": null,
            "recieverName": null,
            "shipperId": null,
            "shipperName": null,
            "transDepartBegin": null,
            "transDepartEnd":null,
            "transOrderno": null,
            "transReach": null,
            "transState": null,
            "truckCode": null,
            "uDelete": null
          },
          
          // ----------------------------

          // ----------------------------
        
        // 控制操作页显示或者隐藏
        flag:true,
        // ----------------------------
        // 存放多条删除数据
        deleterr:[],
        bianji:[],
        hData:[
          {label:'状态',
            prop:'transState',
            width:'120'
          },
          {label:'委托单号',
            prop:'transOrderno',
            width:'120'
          },
          {label:'流水单号',
            prop:'transNo',
            width:'120'
          },
            {label:'委托客户',
            prop:'custName',
            width:'120'
          },
          {label:'承运商名称',
            prop:'carrierName',
            width:'120'
          }
        ],
        // xms
        xiangmus:null,
        // wts
        weituokehu:null,
        // 未调度的信息存储
        noTrans:[]
      }
    },
  created() {
      this.cc()
  },
    methods: {
        cc(){
            let pc = this.$store.state.bianji.bianjis
            // console.log(pc,'pcpc')
            // let cp = {}
            pc.forEach(i=>{
                this.tableData.push(i)
            })
            this.$emit('all',this.tableData)
        },
                // 承运商子组件
      twos(data){
            console.log(data,'data')
            this.sizeForm.carrierName=data.carrierName
        },
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
        console.log(this.deleterr,'dd')
      },
       // 分页
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
.dOne{
    display:inline-block;
}
</style>
