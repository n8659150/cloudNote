<template>
  <span :title="username">{{slug}}</span>
</template>

<script>
import auth from "@/apis/auth";
import bus from "@/helpers/bus";
export default {
  data() {
    return {
      username: "未登录"
    };
  },
  computed: {
    slug() {
      return this.username.charAt(0);
    }
  },
  created() {
    bus.$on('userInfo',user => { this.username = user.username});
    auth.isUserLogin().then(res => {
     if(res.data.isLogin) {
       this.username = res.data.data.username;
       console.log(this.username)
     }
    });
  }
};
</script>

<style scoped>
span {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 32px;
  border-radius: 50%;
  background: #f2b81c;
  color: #fff;
  text-shadow: 1px 0 1px #795c19;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 15px;
}
</style>