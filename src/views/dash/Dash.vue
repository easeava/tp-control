<template>
  <el-container>
    <vue-scroll class="scroll-area">
      <img src="http://utatti.github.io/perfect-scrollbar/azusa.jpg" alt="">
    </vue-scroll>
  </el-container>
</template>

<script>
export default {
  name: 'dash',
  created () {
  }
}
</script>

<style lang="scss">
.scroll-area {
  position: relative;
  margin: auto;
  width: 400px;
  height: 300px;
}
</style>
