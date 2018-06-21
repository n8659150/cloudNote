<template>
  <div class="hello">
    <h1>{{ msg }} - {{$route.params.noteId}}</h1>
  </div>
</template>

<script>
import auth from "@/apis/auth";
export default {
  name: 'trashDetail',
  data () {
    return {
      msg: '回收站页面'
    }
  },
  created(){
    auth.isUserLogin().then(res => {
     if(!res.data.isLogin) {
       this.$router.push('/login')
     }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
