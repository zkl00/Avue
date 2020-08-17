<template>
  <div class="menu">
    <div class="toggle-button">
      <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="clickHend"></i>
    </div>
    <el-menu
      :default-active="pathRouter"
      background-color="#333744"
      text-color="#ffff"
      active-text-color="#20a0ff"
      router
      :collapse-transition="false"
      unique-opened
      :collapse="isCollapse"
    >
      <el-submenu :index="'/'+item.path" v-for="item in menusListTab" :key="item.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.authName}}</span>
        </template>
        <el-menu-item-group v-for="itemIfo in item.children" :key="itemIfo.id">
        
          <el-menu-item :index="'/'+itemIfo.path">{{itemIfo.authName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { menus } from '@/network/index'
export default {
  data() {
    return {
      menusListTab: [],
      isCollapse: false, //折叠面板
    }
  },
  created() {
    this.menusList()
  },
  computed: {
    // 监听路由的变化
    pathRouter() {
      let { path } = this.$route
      // 根据导航切换给tab赋值
      this.menusListTab.forEach((element) => {
        element.children.forEach((item) => {
          if ('/' + item.path == path) {
            this.$emit('tabclick', item)
          }
        })
      })
      return path
    },
  },
  methods: {
    // 获取侧边栏信息
    async menusList() {
      const { data, meta } = await menus()
      if (meta.status != 200) return this.$message.errror('msg')
      // 拿到导航栏数据
      this.menusListTab = data
    },
    // 折叠导航栏
    clickHend() {
      this.isCollapse = !this.isCollapse
      this.$emit('isCollClick', this.isCollapse)
    },
  },
}
</script>

<style scoped lang="less">
.menu {
  width: 100%;
}
.el-menu {
  border: none;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 20px;
  line-height: 40px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
}
</style>
