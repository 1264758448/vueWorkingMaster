
const details = {
    state: {
        details:null,
        hDatas:null,
        car:[
           'v1/truck/query/',
           {
            "carrierName": null,
            "page": {
              "endRow": null,
              "pageNum": null,
              "pageSize": null,
              "pages": null,
              "startRow": null,
              "total": null
            },
            "truckCheck": null,
            "truckCode": null,
            "truckLoad": null,
            "truckSource": null,
            "truckState": null,
            "truckType": null,
            "uDelete": null
          },
            [{label:'承运商名称',
            prop:'carrierName',
            width:'120'
                },
                {label:'车牌号',
                    prop:'truckCode',
                    width:'120'
                },
                {label:'车辆种类',
                    prop:'truckType',
                    width:'120'
                },
                {label:'载重量',
                    prop:'truckLoad',
                    width:'120'
                },],
        ],
        driver:[
            "v1/driver/query/",
            {
                "carrierName": null,
                "driverCheck": null,
                "driverJszNo": null,
                "driverMobile": null,
                "driverName": null,
                "driverState": null,
                "driver_sfz": null,
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
            [{label:'承运商名称',
            prop:'carrierName',
            width:'120'
                },
                {label:'司机名称',
                    prop:'driverName',
                    width:'120'
                },
                {label:'身份证号',
                    prop:'driverSfz',
                    width:'120'
                },
                {label:'驾驶证号',
                    prop:'driverJszNo',
                    width:'120'
                },
                {label:'联系方式',
                    prop:'driverMobile',
                    width:'120'
                },
                {label:'添加时间',
                    prop:'time',
                    width:'120'
            },]
        ],
        // 承运商信息
        cy:[
            "v1/carrier/query/",
            {
                "addDate": null,
                "addName": null,
                "addUserid": null,
                "carrierAddress": null,
                "carrierBank": null,
                "carrierBankno": null,
                "carrierContactman": null,
                "carrierDesc": null,
                "carrierDuty": null,
                "carrierEnName": null,
                "carrierId": null,
                "carrierLegalPerson": null,
                "carrierLicence": null,
                "carrierLicencePath": null,
                "carrierLoginName": null,
                "carrierLogo": null,
                "carrierMail": null,
                "carrierMobile": null,
                "carrierName": null,
                "carrierPassw": null,
                "carrierPy": null,
                "carrierRegid": null,
                "carrierRegidPath": null,
                "carrierRoadTransportPath": null,
                "carrierShortName": null,
                "carrierState": null,
                "carrierTax": null,
                "carrierTaxPath": null,
                "carrierTelphone": null,
                "carrierText": null,
                "carrierUrl": null,
                "comId": null,
                "deptId": null,
                "dspCode": null,
                "dspName": null,
                "uDelete": null,
                "uTime": null,
                "updDate": null,
                "updName": null
              },
              [
                {label:'承运商名称',
                    prop:'carrierName',
                    width:'120'
                },
                {label:'承运商简称',
                    prop:'carrierShortName',
                    width:'120'
                },
                {label:'登录账号',
                    prop:'carrierLoginName',
                    width:'120'
                },
                {label:'联系人电话',
                    prop:'carrierMobile',
                    width:'120'
                },
                {label:'联系人',
                    prop:'carrierContactman',
                    width:'120'
                },
                {label:'联系人职务',
                    prop:'carrierDuty',
                    width:'120'
                },
                    {label:'添加人',
                    prop:'cop',
                    width:'120'
                },
                {label:'添加时间',
                    prop:'time',
                    width:'120'
                },
            ]
        ],
        // 数字字典(吨)
        numD:[
            'v1/dic/qryDic/',
            '车辆吨位'
        ]
    },
    mutations: {
        details(state,sp2){
            state.details=sp2
            console.log(state.details,'详情app')
        },
        hDatas(state,sp2){
            state.hDatas=sp2
            console.log(state.hDatas,'数据apps')
        }
    }
  }
  
  export default details