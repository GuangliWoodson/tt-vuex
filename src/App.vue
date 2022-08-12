<template>
  <!-- app.vue是根组件 -->
  <div id="app">
    <Categtory />
    <NewList />
  </div>
</template>
<script>
import Categtory from './components/categtory'
import NewList from './components/new-list'

export default {
  components: {
    Categtory,
    NewList,
}
}
</script>


