<template>
  <div class="about">
    <el-dialog
      title="提示"
      :visible.sync="box"
      v-dialogdrag
      :class="{'avue-dialog':type==0}"
      width="40%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="box=false">取 消</el-button>
        <el-button type="primary" @click="box=false">确 定</el-button>
      </span>
    </el-dialog>
    <el-button @click="openBox(1)">原生el样式弹窗</el-button>
    <el-button type="primary" @click="openBox(0)">avue样式弹窗</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
        type:'',
        box:false
    };
  },
  methods:{
    openBox(type){
        this.type=type;
        this.box=true;
      }
  }
};
</script>