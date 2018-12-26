<template>
  <el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#f5f7fa" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
    <el-menu-item index="/dash">
      <i class="el-icon-setting"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/example/index">
      <i class="el-icon-setting"></i>
      <span slot="title">Example</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created () {
    console.log(this.$route.path)
  }
}
</script>
