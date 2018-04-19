import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Lobby from './views/Lobby.vue'
import Frontpage from './views/Frontpage.vue'
import Gamepage from './views/Gamepage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: Lobby
    }, 
    {
      path: '/frontpage',
      name: 'frontpage',
      component: Frontpage
    },
    {
      path: '/gamepage',
      name: 'gamepage',
      component: Gamepage
    }
  ]
})
