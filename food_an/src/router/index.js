import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Makanan from '../views/Makanan.vue'
import MakananDetail from '../views/MakananDetail.vue'
import Keranjang from '../views/Keranjang.vue'
import PesananSukses from '../views/PesananSukses.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/makanan',
      name: 'Makanan',
      component: Makanan
    },
    {
      path: '/makanan/:id',
      name: 'MakananDetail',
      component: MakananDetail
    },
    {
      path: '/keranjang',
      name: 'Keranjang',
      component: Keranjang
    },
    {
      path: '/pesanan-sukses',
      name: 'PesananSukses',
      component: PesananSukses
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
