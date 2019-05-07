// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


// 配置根路径
// 设置vue-resource的请求根路径
// Vue.http.options.root = '/api/v1/carrier';

// echarts引入
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 


// 引入resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// import Vlf from 'vlf'
import '@/styles/index.scss' // global css

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// icon
import './icons' 

// // 多图片上传组件
// import uploader from 'vue-easy-uploader'
// Vue.use(uploader, store)

// ---------------------组件栏-----------------------
// axios
import axios from 'axios'
axios.defaults.withCredentials=true;
// Vue.prototype.$axios=axios
Vue.use(axios)

// 引入多层嵌套组件(driver专属)
import more from './pages/tms/zujian/more'
Vue.component('more', more)

// 引入多层嵌套组件(car专属)
import moreCar from './pages/tms/zujian/moreCar'
Vue.component('moreCar', moreCar)

// 承运商信息组件(已经使用页面:driver,)
import cy from './pages/tms/zujian/goods/goodsList'
Vue.component('cy', cy)

// 项目管理组件(已经使用页面:Waybill,)
import xiamgmu from './pages/tms/zujian/xiangmu'
Vue.component('xiamgmu', xiamgmu)

// 委托客户管理组件(已经使用页面:Waybill,tiaodu)
import weituo from './pages/tms/zujian/weituokehu'
Vue.component('weituo', weituo)

// 负责部门组件(已经使用页面:Waybill添加页,)
import bumn from './pages/tms/zujian/fuzebumen'
Vue.component('bumn', bumn)

// 关联运单组件(已经使用页面:Waybill添加页,)
import guanlian from './pages/tms/zujian/guanliandingdan'
Vue.component('guanlian', guanlian)

// 司机组件(已经使用页面:Waybill添加页,)
import driver from './pages/tms/zujian/driver'
Vue.component('driver', driver)

// 吨位选择组件(已经使用页面:driver,)
import dun from './pages/tms/zujian/dun'
Vue.component('dun', dun)

// 运单调度组件(已经使用页面:tiaoduDate)
import tiaodu from './pages/tms/zujian/yundan'
Vue.component('tiaodu', tiaodu)

// 货物组件(已经使用页面:Waybill添加页)
import hw from './pages/tms/zujian/thing'
Vue.component('hw', hw)

// 地图
import BMap from 'BMap';
Vue.use(BMap)

import BaiduMap from 'vue-baidu-map'
 
Vue.use(BaiduMap, {
  ak: 'FvXe29aSPE9lzCbiWw3WkUAkUzzv37Yv'
})

// 时间格式化组件
import moment from 'moment'
Vue.filter('ctime',function(data,timeset='YYYY-MM-DD HH-mm-ss'){
return moment().format(timeset)
})
// import map from './pages/tms/zujian/map'
// Vue.component('map', map)
// import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT'

// ---------------------组建栏end---------------------

// 打印
import Print from 'vue-print-nb'
　　Vue.use(Print);
// MD5加密
import md5 from 'js-md5';
Vue.prototype.$md5 = md5
// Vue.use(md5)
// 设置vue-resource的请求根路径
// Vue.http.options.root = 'http://192.168.0.105:8871/api/';
Vue.http.options.root = 'http://47.100.107.137:8871/api/'
// Vue.http.options.root = 'http://192.168.0.109:8871/api/';


Vue.config.productionTip = false
// Vue.use(Vlf)
Vue.use(Element)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // stores,
  store,
  components: { App },
  template: '<App/>'
})
