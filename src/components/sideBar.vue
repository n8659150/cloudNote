<template>
  <div>
    <avatar />
    {{msg}}
  </div>
</template>

<script>
import avatar from '@/components/avatar'
export default {
  name: 'sideBar',
  components:{
    avatar
  },
  data () {
    return {
      msg: '侧边栏'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width:50px;
  height:100%;
  border:2px solid red;
}
</style>
