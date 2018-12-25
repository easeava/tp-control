<template>
  <el-container>
    <el-header></el-header>
    <el-container>
      <el-aside width="200px"></el-aside>
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Layout'
}
</script>
