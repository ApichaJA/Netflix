import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Genres from '@/views/Genres.vue'
import TVshow from '@/views/TVshow.vue'
import Movies from '@/views/Movies.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: "/Genres/:Genres",
        name: "Genres",
        component: Genres,
      },
      {
        path: "/tvshow",
        name: "TVshow",
        component: TVshow,
      },
      {
        path: "/movies",
        name: "Movies",
        component: Movies,
      },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router