<template>
  <div class="flex column box grow canvas">
    <div class="login-container flex column box grow justify-center align-center">
      <el-form ref="form" :model="form" class="login-form">
        <el-form-item>
          <el-input v-model="form.name" size="large" placeholder="注册邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="form.password" size="large" placeholder="登录密码">
            <template slot="append">
              <router-link class="el-button el-button--default el-button--mini forget-password" to="/auth/password/forget">忘记密码？</router-link>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" class="block submit-login" :loading="loading" @click="authLogin">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="copyright grow flex justify-center align-center">© 2018 Easeava 版权所有 鲁ICP备110-01</div>
  </div>
</template>

<script>
import NProgress from 'nprogress'
import CanvasNest from 'canvas-nest.js'

export default {
  name: 'login',
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      loading: false,
      config: {
        count: 99,
        opacity: 0.7,
        zIndex: -1
      }
    }
  },
  methods: {
    authLogin () {
      this.loading = true
      NProgress.start()

      setTimeout(() => {
        this.loading = false
        NProgress.done()
        this.$router.push({
          name: 'dash'
        })
      }, 1000)
    },
    createCanvasNest () {
      const element = document.querySelector('.canvas')
      this.cn = new CanvasNest(element, this.config)
    }
  },
  mounted () {
    console.log(123)
    this.createCanvasNest()
  },
  beforeDestroy () {
    this.cn.destroy()
  }
}
</script>

<style lang="scss">
.login-container {
  .login-form {
    width: 300px;

    .forget-password {
      background-color: #fff;
      line-height: 38px;
      padding: 0 10px 0 15px;
      border: 0;
      color: #8f9bb2;
      font-weight: 400;
      font-size: 12px;

      &:hover {
        color: #333;
      }
    }

    .submit-login {
      line-height: 42px;
      padding: 0 15px;
    }
  }
}

.copyright {
  flex-shrink: 0;
  padding: 15px 10px 25px 10px;
  margin-bottom: 60px;
}
</style>
