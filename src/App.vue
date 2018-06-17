<template>
  <div id="app">
    <sidebar />
    <router-view/>
  </div>
</template>

<script>
import sidebar from '@/components/sidebar'
export default {
  name: 'App',
  components:{
    sidebar
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body, #app {
  height: 100%;
}
#app {
  display:flex;
  align-items: flex-start;
}
</style>
