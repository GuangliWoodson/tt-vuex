import Vue from "vue"; // 引入Vue
import Vuex from "vuex"; // 引入vuex
import categtory from './modules/categtory'
import newlist from './modules/newlist'

Vue.use(Vuex); // Vue 注册Vuex

export default new Vuex.Store({
	modules: {
		categtory,
		newlist
	},
	getters: {
		categtory: state => state.categtory.categtory,
		currentCategtory: state => state.categtory.currentCategtory
	}
}); // 初始化store,并抛出
