<template>
  <el-container class="main">
    <el-aside width="215px" class="sidebar">
      <menu-sidebar/>
    </el-aside>
    <el-container>
      <el-header class="header">
        <router-link to="/dash">首页</router-link>
        <router-link to="/example/index">Demo</router-link>
      </el-header>
      <el-main class="container">
        <transition name="fade-transverse">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MenuSidebar from './menu/Sidebar'

export default {
  name: 'Layout',
  components: {
    MenuSidebar
  }
}
</script>
