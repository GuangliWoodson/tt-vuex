<template>
	<div class="list">
		<div class="article_item" v-for="item in currentList" :key="item.art_id">
			<h3 class="van-ellipsis">{{ item.title }}</h3>
			<div class="img_box" v-if="item.cover.type === 1">
				<img :src="item.cover.images[0]" class="w100" />
			</div>
			<div class="img_box" v-else-if="item.cover.type === 3">
				<img :src="item.cover.images[0]" class="w33" />
				<img :src="item.cover.images[1]" class="w33" />
				<img :src="item.cover.images[2]" class="w33" />
			</div>
			<!---->
			<div class="info_box">
				<span>{{ item.aut_name }}</span>
				<span>{{ item.comm_count }}评论</span>
				<span>{{ item.pubdate }}</span>
			</div>
		</div>
	</div>
</template>


<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
	//import引入的组件需要注入到对象中才能使用
	components: {},
	data() {
		//这里存放数据
		return {

		};
	},
	//监听属性 类似于data概念
	computed: {
		currentList() {
			return this.$store.state.newlist.currentList
		}
	},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {

	},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {

	},
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {

	},
	beforeCreate() { }, //生命周期 - 创建之前
	beforeMount() { }, //生命周期 - 挂载之前
	beforeUpdate() { }, //生命周期 - 更新之前
	updated() { }, //生命周期 - 更新之后
	beforeDestroy() { }, //生命周期 - 销毁之前
	destroyed() { }, //生命周期 - 销毁完成
	activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
</style>