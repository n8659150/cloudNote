import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import notebooks from '@/components/notebookList'
import notebookDetail from '@/components/notebookDetail'
import trashDetail from '@/components/trashDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/notebooks',
      component: notebooks
    },
    {
      path: '/note/:noteId',
      component: notebookDetail
    },
    {
      path: '/trash/:noteId',
      component: trashDetail
    }
  ]
})
