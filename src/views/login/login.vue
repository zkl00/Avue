<template>
  <div class="login_box">
   <!-- animate__fadeInDownBig  bounceInDown-->
    <div class="box_NI">
         <avue-queue enter="bounceInDown">
      <div class="longin">
        <h1>登录</h1>
        <avue-login :option="option" @submit="submit"></avue-login>
      </div>
       </avue-queue>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        width: 416,
        column: {
          username: {
            label: "用户名",
            autocomplete: "off",
            rules: { required: true, message: "请输入用户名", trigger: "blur" },
          },
          password: {
            label: "密码",
            autocomplete: "off",
            rules: { required: true, message: "请输入密码", trigger: "blur" },
          },
          code: {
            hide: true,
          },
        },
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    submit(form) {
      this.$message.success(JSON.stringify(form));
      console.log(form);
    },
  },
};
</script>

<style scoped lang="less">
.login_box {
  width: 100%;
  height: 100%;
  background: #444;
  text-align: center;
.box_NI{
    width: 100%;
    display:flex;
    justify-content: center;
    height: 100%;
    align-items: center;
}
  .longin {
    width: 450px;
    height: 270px;
    background: #ffffff;
    margin: 0 auot;

    border-radius: 10px;
    h1 {
      padding: 10px 0;
    }
  }
}
</style>
