<template>
    <div>
            <el-button @click='goBack' >返回</el-button>

                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div>项目编号:{{sizeForm.projectCode}}</div>
                <div>项目名称:{{sizeForm.projectName}}</div>
                <div>项目简称:{{sizeForm.projectShortname}}</div>
</el-card>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        sizeForm: {
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
        },
      // 控制操作页显示或者隐藏
        flag:true,
        // ----------------------------
        // 存放多条删除数据
        deleterr:[],
        bianji:[],
      }
    },
    created() {
      this.get()
    },
    methods: {
 
        goBack(){
            his.$router.go(-1)
        },
        get(){
            let details= this.$store.state.details.details
          this.$http.post(`v1/project/findByProjectId?projectId=`+details.id).then(res=>{
                console.log(res,'findbyId')
                  this.sizeForm=res.body.data
            })
              console.log(details,'数据99999')
        }
    }
  }
  
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    margin:auto;
  }
</style>