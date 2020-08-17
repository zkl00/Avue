<template>
  <div class="index_werp">
    <el-container class="container">
      <el-header class="header">
        <el-row type="flex" justify="space-between">
          <el-col :span="2" style="display:flex;align-items: center;">电商管理系统</el-col>
          <el-col :span="2">
            <el-button type="info">退出</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside class="aside" :width="isCollapse == false ?'200px' :'64px'">
          <navLeft @isCollClick="isCollClick" @tabclick="tabclick" />
        </el-aside>
        <el-main class="main">
          <!-- tab的切换 -->
          <tabs :tabobj="tabobj"></tabs>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import navLeft from '@/components/common/navLeft'
import tabs from '../../components/common/tabs'
export default {
  components: {
    navLeft,
    tabs,
  },
  data() {
    return {
      isCollapse: false,
      tabobj:{}
    }
  },
  methods: {
    // 子组件穿过来的值
    isCollClick(e) {
      this.isCollapse = e
    },
    // 侧边栏穿过来的路由的文字和内容
    tabclick(e){
      // console.log(e);
      this.tabobj = e
    },
  },
}
</script>
<style lang="less" scoped>
.index_werp {
  width: 100%;
  height: 100%;
}
.container {
  background-color: #b3c0d1;
  color: #333;
  height: 100%;
}
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60px;
  background: #373d41;
  color: #ffff;
}
.aside {
  background-color: rgb(51, 55, 68);
  color: #333;
  //   height: 100%;
}

.main {
  background-color: #eaedf1;
  color: #333;
}
</style>

