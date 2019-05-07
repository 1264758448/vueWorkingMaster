// import request from '@/api/request'
import _ from 'lodash'
const menu = {
  state: {
    menuList: []
  },
  mutations: {
    SET_MENU_LIST: (state, menuList) => {
      state.menuList = menuList
    }
  },
  actions: {
    getMenuList(context) {
      const promise = new Promise((resolve, reject) => {
        // request.getMenuList().then((res) => {
        //   console.log('menuList...', res)
        //   commit('GET_MENU_LIST', res)
        //   resolve()
        // }).catch(() => {
        //   reject(new Error('UnkownError'))
        // })
        const baseMenuList = [{
          'title': '企业管理',
          'menuId': '001',
          'menuLv': 1,
          'icon': 'star',
          'path': '/company'
        },{
          'title': '企业信息管理',
          'menuId': '0011',
          'menuUpId': '001',
          'menuLv': 2,
          'path': '/company/goods'
        }, {
          'title': '企业货品管理',
          'menuId': '0012',
          'menuUpId': '001',
          'menuLv': 2,
          'path': '/company/info'
        }, {
          'title': '项目管理',
          'menuId': '0013',
          'menuUpId': '001',
          'menuLv': 2,
          'path': '/company/xiangmu'
        }, {
          'title': '承运商管理',
          'menuId': '002',
          'menuLv': 1,
          'icon': 'star',
          'path': 'carrier'
        }, {
          'title': '承运商信息管理',
          'menuId': '0021',
          'menuUpId': '002',
          'menuLv': 2,
          'path': '/CarrierManagement/information'
        }, {
          'title': '承运商司机管理',
          'menuId': '0022',
          'menuUpId': '002',
          'menuLv': 2,
          'path': '/CarrierManagement/driver'
        }, {
          'title': '承运商车辆管理',
          'menuId': '0023',
          'menuUpId': '002',
          'menuLv': 2,
          'icon': 'peoples',
          'path': '/CarrierManagement/car'
        }, {
          'title': '运输管理',
          'menuId': '003',
          'menuLv': 1,
          'icon': 'star',
          'path': '/trans'
        }, {
          'title': '运单管理',
          'menuId': '0031',
          'menuUpId': '003',
          'menuLv': 2,
          'path': '/transportation/Waybill'
        }, {
          'title': '运输调度',
          'menuId': '0032',
          'menuUpId': '003',
          'menuLv': 2,
          'path': '/transportation/tiaodu'
        }, {
          'title': '运输作业单',
          'menuId': '0033',
          'menuUpId': '003',
          'menuLv': 2,
          'icon': 'people',
          'path': '/transportation/work'
        }, {
          'title': '签收管理',
          'menuId': '0034',
          'menuUpId': '003',
          'menuLv': 2,
          'path': '/transportation/qianshou'
        }, {
          'title': '报表管理',
          'menuId': '004',
          'menuLv': 1,
          'icon': 'star',
          'path': '/report'
        },{
          'title': '报表统计',
          'menuId': '0041',
          'menuUpId': '004',
          'menuLv': 2,
          'path': '/report/info'
        }]
        const menuList = _.filter(baseMenuList, item => item.menuLv === 1)
        _.each(menuList, menu => {
          menu.children = _.filter(baseMenuList, item => item.menuUpId === menu.menuId)
        })
        context.commit('SET_MENU_LIST', menuList)
        resolve()
      })
      return promise
    }
  }
}

export default menu
