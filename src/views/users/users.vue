<template>
  <div class="users_warp">
	<el-card>
    <div class="user_flex">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select" style="width:350px">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button class="benS" type="primary">添加用户</el-button>
    </div>
    <div class="tab">
      <el-table :data="tableData" stripe style="width: 100%" border>
        <el-table-column label="序号" type="index" width="50"></el-table-column>
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="电话" prop="mobile"></el-table-column>
        <el-table-column label="角色" prop="role_name"></el-table-column>
        <el-table-column prop="address" label="状态">
          <template slot-scope="{row}">
            <el-switch v-model="row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit( scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
	</el-card>
  </div>
</template>

<script>
import { userList } from '../../network/index'
export default {
  data() {
    return {
      input3: '',
      tableData: [],
      quesyData: {
        query: '',
        pagenum: 1,
        pagesize: 5,
      },
    }
  },
  created() {},
  mounted() {
    this.userListTab()
  },
  methods: {
    // 获取列表数据
    async userListTab() {
      const { data, meta } = await userList(this.quesyData)
      //   console.log(data)
      if (meta.status != 200) return
      this.tableData = data.users
    },
    // 编辑
    handleEdit() {},
    // 删除
    handleDelete() {},
  },
}
</script>

<style scoped lang="less">
.users_warp {
  // height: 100%;
  width: 100%;
  .user_flex {
    display: flex;
  }
  .user_flex .benS {
    margin: 0 10px;
  }
  .tab{
      padding: 20px 0;
  }
}
</style>
