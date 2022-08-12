import axios from 'axios'
export default { // 模块结构
  namespaced: true,
  state: {
    categtory:[],
    currentCategtory:''
  },
  mutations: {
    setCategtory(state, payload) {
      state.categtory = payload
    },
    setCurrentCategtory(state, catID) {
      state.currentCategtory = catID
    }
  },
  actions: {
    async getCategtory({ commit }) {
      const {
        data: {
          data: { channels },
        },
      } = await axios.get('http://toutiao.itheima.net/v1_0/channels')
      commit('setCategtory', channels)
      commit('setCurrentCategtory', channels[0].id)
    }
  }
}
