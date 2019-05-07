import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
/* Layout */
import Layout from '@/pages/layout/Layout'

Vue.use(Router)

export const asyncRoutes = [
  {
    path: '/redirect',
    name: 'redirect',
    component: Layout,
    hidden: true,
    children: [{
      path: '/redirect/:path*',
      component: () => import('@/pages/redirect/index')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: 'login',
    children: [{
      path: 'main',
      component: () => import('@/pages/dashboard/index'),
      name: 'main',
      meta: {
        title: '首页',
        icon: 'main',
        noCache: true,
        affix: true
      }
    }]
  },

  {
    path: '/more',
    component: () => import('@/pages/tms/zujian/more'),
    name: 'more',
      meta: {
        title: '多层嵌套组件'
      }
  },

  {
    path: '/CarrierManagement',
    component: Layout,
    redirect: '/CarrierManagement/information',
    children: [{
      path: '/CarrierManagement/information',
      component: () => import('@/pages/tms/CarrierManagement/information/information/information'),
      name: 'information',
        meta: {
          title: '承运商信息管理'
        }
    },{
      path: '/CarrierManagement/carrier',
      component: () => import('@/pages/tms/add/CarrierManagement-add/carrier.vue'),
      name: 'information',
        meta: {
          title: '承运商信息管理增加页面'
        }
    },{
      path: '/CarrierManagement/informationBianji',
      component: () => import('@/pages/tms/bianji/CarrierManagement-bianji/information'),
      name: 'information',
        meta: {
          title: '承运商信息管理编辑页'
        }
    },{
      path: '/CarrierManagement/iDetails',
      component: () => import('@/pages/tms/details/CarrierManagement-details/i-details'),
      name: 'information',
        meta: {
          title: '承运商信息管理明细页'
        }
    },{
      path: '/CarrierManagement/driver',
      component: () => import('@/pages/tms/CarrierManagement/driver'),
      name: 'information',
        meta: {
          title: '承运司机息管理'
        }
    },{
      path: '/CarrierManagement/driverAdd',
      component: () => import('@/pages/tms/add/CarrierManagement-add/driver-add'),
      name: 'information',
        meta: {
          title: '承运司机息管理添加页'
        }
    },{
      path: '/CarrierManagement/driverD',
      component: () => import('@/pages/tms/details/CarrierManagement-details/i-driver'),
      name: 'information',
        meta: {
          title: '承运司机息详情页'
        }
    },{
      path: '/CarrierManagement/driverBianji',
      component: () => import('@/pages/tms/bianji/CarrierManagement-bianji/driver-bianji'),
      name: 'information',
        meta: {
          title: '承运司机息管理编辑页'
        }
    },{
      path: '/CarrierManagement/car',
      component: () => import('@/pages/tms/CarrierManagement/car'),
      name: 'information',
        meta: {
          title: '承运车辆息管理'
        }
    },{
      path: '/CarrierManagement/carAdd',
      component: () => import('@/pages/tms/add/CarrierManagement-add/car-add'),
      name: 'information',
        meta: {
          title: '承运车辆息管理添加页面'
        }
    },{
      path: '/CarrierManagement/carBianJi',
      component: () => import('@/pages/tms/bianji/CarrierManagement-bianji/car-bianji'),
      name: 'information',
        meta: {
          title: '承运车辆息管理添加页面'
        }
    },{
      path: '/CarrierManagement/carD',
      component: () => import('@/pages/tms//details/CarrierManagement-details/i-car'),
      name: 'information',
        meta: {
          title: '承运车辆息管理详情页面'
        }
    },]
  }
  ,{
    path: '/company',
    component: Layout,
    redirect: '/company/goods',
    children: [
      {
        path: 'dGoods',
        component: () => import('@/pages/tms/details/company-details/d-goods'),
        name: 'details',
        meta: {
          title: '企业信息管理'
        }
      },
      {
        path: 'details',
        component: () => import('@/pages/tms/details/company-details/details'),
        name: 'details',
        meta: {
          title: '项目管理详情页'
        }
      },
      {
        path: 'dInfo',
        component: () => import('@/pages/tms/details/company-details/d-info'),
        name: 'details',
        meta: {
          title: '企业货品管理详情页'
        }
      },{
      path: 'info',
      component: () => import('@/pages/tms/company/info/infoList'),
      name: 'info',
      meta: {
        title: '企业信息管理'
      }
    }, {
      path: 'goods',
      component: () => import('@/pages/tms/company/goods/goodsList'),
      name: 'goods',
      meta: {
        title: '企业货品管理'
      }
    }, {
      path: 'xiangmu',
      component: () => import('@/pages/tms/company/xiangmu/xiangmu'),
      name: 'xiangmu',
      meta: {
        title: '项目管理'
      }
    },
    {
      path: 'add',
      component: () => import('@/pages/tms/add/cpmpany-add/add'),
      name: 'add',
      meta: {
        title: '添加页'
      }
    },
    {
      path: 'addInfo',
      component: () => import('@/pages/tms/add/cpmpany-add/addInfo'),
      name: 'addInfo',
      meta: {
        title: '添加页'
      }
    },
    {
      path: 'addXiangmu',
      component: () => import('@/pages/tms/add/cpmpany-add/addXiangmu'),
      name: 'addXiangmu',
      meta: {
        title: '添加页'
      }
    },
    {
      path: 'bianji',
      component: () => import('@/pages/tms/bianji/company-bianji/bianji'),
      name: 'bianji',
      meta: {
        title: '编辑页'
      }
    },
    {
      path: 'bianjiInfo',
      component: () => import('@/pages/tms/bianji/company-bianji/bianjiInfo'),
      name: 'bianjiInfo',
      meta: {
        title: '编辑页'
      }
    },
    {
      path: 'bianjiXiangmu',
      component: () => import('@/pages/tms/bianji/company-bianji/bianjiXiangmu'),
      name: 'bianjiXiangmu',
      meta: {
        title: '编辑页'
      }
    },]
  },
  // 运输栏
  {
    path: '/transportation',
    component: Layout,
    redirect: '/transportation/Waybill',
    children: [{
      path: '/transportation/Waybill',
      component: () => import('@/pages/tms/transportation/Waybill'),
      name: 'Waybill',
        meta: {
          title: '运单管理'
        }
    },{
      path: '/transportation/WaybillBianji',
      component: () => import('@/pages/tms/bianji/transportation-bianji/biaodan'),
      name: 'Waybill',
        meta: {
          title: '运单管理编辑'
        }
    },{
      path: '/transportation/map',
      component: () => import('@/pages/tms/zujian/map'),
      name: 'Waybill',
        meta: {
          title: '地图组件'
        }
    },{
      path: '/transportation/WaybillAdd',
      component: () => import('@/pages/tms/add/transportation-add/biaodan'),
      name: 'Waybill',
        meta: {
          title: '运单管理添加'
        }
    },{
      path: '/transportation/tiaodu',
      component: () => import('@/pages/tms/transportation/tiaodu'),
      name: 'tiaodu',
        meta: {
          title: '运单调度'
        }
    },{
      path: '/transportation/tiaoduDate',
      component: () => import('@/pages/tms/bianji/tiaodu'),
      name: 'tiaodu',
        meta: {
          title: '运单调度调度页'
        }
    },{
      path: '/transportation/work',
      component: () => import('@/pages/tms/transportation/work'),
      name: 'tiaodu',
        meta: {
          title: '运输作业单'
        }
    },{
      path: '/transportation/workDetails',
      component: () => import('@/pages/tms/details/transportation-work'),
      name: 'tiaodu',
        meta: {
          title: '运输作业单详情页'
        }
    },{
      path: '/transportation/lookD',
      component: () => import('@/pages/tms/details/transportation-work/look'),
      name: 'tiaodu',
        meta: {
          title: '审核'
        }
    },{
      path: '/transportation/qianshou',
      component: () => import('@/pages/tms/transportation/qianshou'),
      name: 'tiaodu',
        meta: {
          title: '签收管理'
        }
    },{
      path: '/transportation/qianshouDe',
      component: () => import('@/pages/tms/details/transportation-work/qiansouDe'),
      name: 'tiaodu',
        meta: {
          title: '签收管理签收页'
        }
    },{
      path: '/transportation/WeyDatail',
      component: () => import('@/pages/tms/details/transportation-work/Wey'),
      name: 'tiaodu',
        meta: {
          title:'运单详情页'
        }
    },{
      path: '/transportation/backPel',
      component: () => import('@/pages/tms/details/transportation-work/backPel'),
      name: 'tiaodu',
        meta: {
          title:'回单页面'
        }
    },]
  },

  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/errorPage/404'),
    hidden: true
  },
]

const router = new Router({
  routes: asyncRoutes
})

// router.beforeEach((to, from, next) => {
//   if (to.name === 'login' || to.name === '404' || to.name === 'redirect') {
//     next()
//   } 
//   else {
//     if (!store.state.user.user.user_name) {
//       let user = localStorage.getItem('user')
//       user = user ? JSON.parse(user) : {}
//       if (user && user.user_name) {
//         store.dispatch('setUserInfo', user).then(res => {
//           next()
//         })
//       } else {
//         next('/login')
//       }
//     } else {
//       next()
//     }
//   }
// })

export default router
