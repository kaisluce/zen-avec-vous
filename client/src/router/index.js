import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aide-a-domicile',
    name: 'aide-a-domicile',
    component: () => import('../views/AideADomicile.vue')
  },
  {
    path: '/a-propos',
    name: 'a-propos',
    component: () => import('../views/About.vue')
  },
  {
    path: '/entretien-menager',
    name: 'entretien-menager',
    component: () => import('../views/EntretienMenager.vue')
  },
  {
    path: '/garde-enfant',
    name: 'garde-enfant',
    component: () => import('../views/GardeEnfant.vue')
  },
  {
    path: '/nos-services',
    name: 'nos-services',
    component: () => import('../views/NosServices.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
