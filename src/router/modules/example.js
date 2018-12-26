export default {
  path: '/example',
  name: 'example',
  meta: {
    auth: true
  },
  redirect: {
    name: 'example.index'
  },
  component: () => import('@/components/layout/Layout.vue'),
  children: [
    {
      path: 'index',
      name: 'example.index',
      meta: {
        auth: true
      },
      component: () => import('@/views/example/Index.vue')
    }
  ]
}
