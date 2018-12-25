const meta = {
  auth: true
}

const layoutPages = [{
  path: '/',
  redirect: {
    name: 'dash'
  },
  component: () => import('@/components/layout/Layout.vue'),
  children: [{
    path: 'dash',
    name: 'dash',
    meta,
    component: () => import('@/views/dash/Dash.vue')
  }, {
    path: 'refresh',
    name: 'refresh',
    hidden: true,
    component: {
      beforeRouteEnter (to, from, next) {
        next(vm => vm.$router.replace(from.fullPath))
      },
      render: h => h()
    }
  }, {
    path: 'redirect/:route*',
    name: 'redirect',
    hidden: true,
    component: {
      beforeRouteEnter (to, from, next) {
        next(vm => vm.$router.replace(JSON.parse(from.params.route)))
      },
      render: h => h()
    }
  }]
}]

const outPages = [{
  path: '/login',
  name: 'login',
  component: () => import('@/views/auth/Login.vue')
}]

const errorPages = [{
  path: '*',
  name: '404',
  component: () => import('@/views/auth/Login.vue')
}]

export default [
  ...layoutPages,
  ...outPages,
  ...errorPages
]
