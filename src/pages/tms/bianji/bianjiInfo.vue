<template>
    <div>
            <el-button @click='unpata'>保存</el-button>
            <el-button>返回</el-button>
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
            <li> 
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="客户名称">
                      <el-input v-model="sizeForm.custName"></el-input>
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
        }
    },
    created() {
       this.cc()
    },
    methods: {
        cc(){
            this.sizeForm=this.$store.state.bianji.bianjis[0]
            console.log(this.sizeForm,'size')
        },
        unpata(){
            this.$http.post("http://47.100.107.137:8871/api/v1/customerGoods/update/",this.sizeForm).then(res=>{
                console.log(res,'更改')
            })
        }
    },
 }

</script>
<style>
 *{
        list-style:none;
    }
</style>