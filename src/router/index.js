import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Genres from '@/views/Genres.vue'
import TVshow from '@/views/TVshow.vue'
import Movies from '@/views/Movies.vue'
import Latest from '@/views/Latest.vue'
import MyList from '@/views/MyList.vue'

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
      {
        path: "/latest",
        name: "Latest",
        component: Latest,
      },
      {
        path: "/myList",
        name: "myList",
        component: MyList,
      },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router