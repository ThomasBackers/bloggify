import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/Default.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'contact',
        name: 'contact',
        component: Contact
      },
      {
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'register',
        name: 'register',
        component: Register
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile,
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // prevent disconnected users to access routes requiring an auth
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: 'login' })
    // prevent connected users to access the login & the register route
  } else if (store.state.user.token && (to.name === 'login' || to.name === 'register')) {
    next({ name: 'profile' })
  } else {
    next()
  }
})

export default router
