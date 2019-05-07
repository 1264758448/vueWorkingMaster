<template>
    <div>
            <el-button @click='add'>保存</el-button>
            <el-button @click='back'>返回</el-button>

       <ul>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="货品简称">
                      <el-input v-model="sizeForm.goodsShortName"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="货品品牌">
                      <el-input v-model="sizeForm.goodsBrand"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
                        <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="长度(米)">
                      <el-input v-model="sizeForm.goodsLength"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="高度(米)">
                      <el-input v-model="sizeForm.goodsHeight"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="重量(吨)">
                      <el-input v-model="sizeForm.goodsWeight"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
        
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="货品编号">
                      <el-input v-model="sizeForm.goodsCode"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="货物名称">
                      <el-input v-model="sizeForm.goodsCnName"></el-input>
                    </el-form-item>
                  </el-form>
            </li>

          <!--  <委托客户> -->          
          <li>                   
               <el-dialog
                      title="提示"
                      :visible.sync="dialogVisible6"
                      width="60%">
                        <weituo v-on:wt='wts' v-on:flagsthree='flagthree'></weituo>
                  </el-dialog>


               <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                   <el-form-item label="委托客户">
                   <div class='ones' @click='fourE'>
                       <el-input v-model="sizeForm.custName" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
                   </div>
                   </el-form-item>
               </el-form>
           </li>









            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="数量(箱子/件)">
                      <el-input v-model="sizeForm.goodsUnit"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="宽度(米)">
                      <el-input v-model="sizeForm.goodsWidth"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
             <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="体积(立方)">
                      <el-input v-model="sizeForm.goodsVolume"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
              <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="备注">
                      <el-input v-model="sizeForm.goodsText"></el-input>
                    </el-form-item>
                  </el-form>
            </li>
       </ul>
       

    </div>
</template>
<script>
export default {
    data(){
        return{
             sizeForm: {                             
                "addName": "",
                "addUserid": "",
                "comId": "",
                "custId": "",
                "custName": "",
                "goodsBrand": "",
                "goodsCnName": "",
                "goodsCode": "",
                "goodsHeight": 0,
                "goodsId": "",
                "goodsLength": 0,
                "goodsShortName": "",
                "goodsState": 0,
                "goodsText": "",
                "goodsUnit": 0,
                "goodsVolume": 0,
                "goodsWeight": 0,
                "goodsWidth": 0,
                "uDelete": 0,
                "uTime": "",
                "updDate": "",
                "updName": "",
                "updUserid": ""
            },      
             dialogVisible6: false,     
        }
    },
    methods: {
      fourE(){
            this.dialogVisible6=true;
        },
        flagthree(val){
           this.dialogVisible6=val;
        },
        wts(wt){
            console.log(wt,'wt')
            this.sizeForm.custName=wt.custShortname
            this.sizeForm.custId=wt.custId
            // console.log(this.wtkhId,'wtkhId')
        },

        add(){
             this.$http.post("v1/customerGoods/insert/",this.sizeForm).then(res => {
                        if(res.status==200){
                            this.$router.push('info')
                        }else{
                            console.log('添加失败')
                        }
            });
        },
         back(){
           this.$router.go(-1)
        }
    },
}
</script>
<style>
    *{
        list-style:none;
    }
    ul li{
    float:left;
    width:25%
}
ul{
    overflow:hidden;
    width:80%;
}
</style>