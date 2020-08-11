
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/beer', component: () => import('pages/Beer.vue') },
      { path: '/redwine', component: () => import('pages/Redwine.vue') },
      { path: '/whitewine', component: () => import('pages/Whitewine.vue') },
      { path: '/liquor', component: () => import('pages/Liquor.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
