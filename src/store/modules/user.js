import { login } from '@/api/request'
const user = {
  state: {
    user: {}
  },
  mutations: {
    SET_USER_INFO: (state, user) => {
      state.user = user
    }
  },
  actions: {
    loginAction({ commit }, params) {
      return new Promise(resolve => {
        login(params).then(result => {
          commit('SET_USER_INFO', result.data)
          console.log(result,'result')
          resolve()
        })
      })
    },
    setUserInfo({ commit }, user) {
      return new Promise(resolve => {
        commit('SET_USER_INFO', user)
        resolve()
      })
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit('SET_USER_INFO', {})
        resolve()
      })
    }
  }
}
export default user
