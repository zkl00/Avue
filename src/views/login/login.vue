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
import { LoginData } from '@/network/index'
export default {
  data() {
    return {
      option: {
        width: 416,
        column: {
          username: {
            label: '用户名',
            autocomplete: 'off',
            rules: { required: true, message: '请输入用户名', trigger: 'blur' }
          },
          password: {
            label: '密码',
            autocomplete: 'off',
            rules: { required: true, message: '请输入密码', trigger: 'blur' }
          },
          code: {
            hide: true
          }
        }
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 登录按钮
    async submit(form) {
      const { data, meta } = await LoginData(form)
      if (meta.status === 200) {
        this.$message.success(meta.msg)
        sessionStorage.setItem('token', data.token) //保存token
        this.$router.push('/index')
        return
      }

      this.$message.error(meta.msg)
    }
  }
}
</script>

<style scoped lang="less">
.login_box {
  width: 100%;
  height: 100%;
  background: #444;
  text-align: center;
  .box_NI {
    width: 100%;
    display: flex;
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
