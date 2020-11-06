import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import store from '../store/index'
import axios from "axios";
import Courses from "../views/Courses";
import CourseDetails from "../views/CourseDetails";
import UploadVideo from "../views/UploadVideo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/courses/details',
    name: 'CourseDetails',
    component: CourseDetails,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/upload',
    name: 'UploadVideo',
    component: UploadVideo,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})



router.beforeEach((to, from, next) => {

  if(to.matched.some(record => record.meta.requiresAuth)) {

      store.state.authStatus
      .then(() => {
        console.log(store.state.isAuthenticated)
        if(store.state.isAuthenticated)
          next();
        else
          next({
            path: '/login',
            query: { nextUrl: to.fullPath }
          })
      })

  }
  /*else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('jwt') == null){
      next()
    }
    else{
      next({ name: 'Home'})
    }
  }*/
  else {
    next()
  }
})


export default router
