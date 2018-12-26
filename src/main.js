import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'mini',
  zIndex: 3000
})

Vue.component('vue-scroll', VuePerfectScrollbar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
