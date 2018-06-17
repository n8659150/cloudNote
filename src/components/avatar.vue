<template>
  <div class="hello">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'avatar',
  data () {
    return {
      msg: 'avatar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width:40px;
  height:40px;
  border:1px solid green;
  border-radius: 50%;
}
</style>
