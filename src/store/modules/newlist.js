import axios from 'axios'
export default { // 模块结构
  namespaced: true,
  state: {
    currentList: []
  },
  mutations: {
    setCurrentList(state, list) {
      state.currentList = list
    }
  },
  actions: {
    async getCurrentList(context, catID) {
      const {
        data: {
          data: {results}
        }
      } = await axios.get (
        `http://toutiao.itheima.net/v1_0/articles?channel_id=${catID}&timestamp=${+new Date()}
        &with_top=1`
      )
      console.log(results);
      context.commit('setCurrentList', results)
    }
  }
}
