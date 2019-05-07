import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import user from './modules/user'
import getters from './getters'
import menu from './modules/menu'
import bianji from './modules/bianji'
import details from './modules/details'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    tagsView,
    user,
    permission,
    menu,
    bianji,
    details
  },
  getters
})

export default store
