<template>
  <div class="tabls">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- tab切换 -->
    <div class="tabl">
      <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab" @tab-click="tabClick">
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabobj: {
      type: Object,
      default: {},
    },
  },
  watch: {
    tabobj() {
      let jsTab = this.tabobj
      if (JSON.stringify(jsTab) != '{}') {
        // 监听点击到那个页面
          this.editableTabsValue = jsTab.path + ''
        /**
         * 判断是否有重复的数据
         */
        const flyTab = this.editableTabs.findIndex(
          (item) => item.name == jsTab.path
        )
        if (flyTab == -1) {
          return this.editableTabs.push({
            title: jsTab.authName,
            name: String(jsTab.path),
          })
        }
      }
    },
  },
  data() {
    return {
      editableTabsValue: 'home',
      editableTabs: [
        {
          title: '首页',
          name: 'home',
        },
      ],
      tabIndex: 2,
    }
  },
  created() {},
  methods: {
    // 点击卡片跳转到对应位置
    tabClick(e){
      this.$router.push( '/'+e.name)
      this.editableTabsValue = e.name
    },
    // 删除卡片
    removeTab(targetName) {
        console.log(targetName);
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName)
    },
  },
}
</script>

<style scoped lang="less">
.tabl {
  padding: 10px 0;
}
</style>
