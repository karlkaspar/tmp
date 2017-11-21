import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import Index from '@/components/Index'
import Register from '@/components/Register'
import CreateItem from '@/components/CreateItem.vue'
import DisplayItem from '@/components/DisplayItem.vue'

Vue.use(VueRouter, axios, VueAxios)

export default new VueRouter({
  mode: 'history',
  routes: [
    /* {
      path: '/',
      name: 'Index',
      component: Index
    },
    */
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/create/item',
      name: 'CreateItem',
      component: CreateItem
    },
    {
      path: '/',
      name: 'DisplayItem',
      component: DisplayItem
    }
  ]
})
