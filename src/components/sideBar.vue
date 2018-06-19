<template>
  <div id="sidebar">
    <avatar />
    <div class="icons">
      <router-link to="/note/1" title="笔记"><i class="iconfont icon-note"></i></router-link>
      <router-link to="/notebooks" title="笔记本"><i class="iconfont icon-notebook"></i></router-link>
      <router-link to="/trash/2" title="回收站"><i class="iconfont icon-trash"></i></router-link> 
    </div> 
    <div class="logout" >
      <i class="iconfont icon-logout" @click="logout"></i>
    </div>
  </div>
</template>

<script>
import auth from "@/apis/auth";
import avatar from "@/components/avatar";
export default {
  name: "sideBar",
  components: {
    avatar
  },
  data() {
    return {
      msg: "侧边栏"
    };
  },
  methods: {
    logout() {
      auth
        .logout()
        .then(res => {
          this.$router.push({path:'login'})
        })
        .catch(e => {
          console.log("注销失败,请检查网络情况");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#sidebar {
  position: relative;
  width: 56px;
  text-align: center;
  background-color: #2c333c;
  height: 100%;
}
.icons {
  margin-top: 15px;

  a {
    padding: 6px 0;
    display: block;
  }
}

.icons .router-link-active {
  background-color: #5e6266;
}
.logout {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.iconfont {
  color: #fff;
}
</style>
