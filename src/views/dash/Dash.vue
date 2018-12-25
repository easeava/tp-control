<template>
  <div>
    <div style="width: 1000px; height: 500px;display: flex; flex-direction: column;border: 1px solid red;align-items: center">
      <div class="it" style="align-self: flex-end">1</div>
      <div class="it"></div>
      <div class="it"></div>
    </div>
  </div>
</template>

<script>
import store from 'store2'

export default {
  name: 'dash',
  created () {
    store.set('a', {
      a: 1,
      v: 2
    })
    console.log(store.get('a'))
  }
}
</script>

<style lang="scss">
.it {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
</style>
