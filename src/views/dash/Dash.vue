<template>
  <div>Dash</div>
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
