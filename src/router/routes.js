
const routes = [
  {
    path: '/',
    component: () => import('layouts/MenuLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/profile', component: () => import('pages/profileF.vue') },
      { path: '/project', component: () => import('pages/projectF.vue') },
      { path: '/record', component: () => import('pages/recordF.vue') },
      { path: '/posts', component: () => import('pages/postsF.vue') }
    ]
  },
  
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
