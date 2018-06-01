import Vue from 'vue'
import Router from 'vue-router'

import PortfolioPage from "@/components/PortfolioPage";

import Sidebar from "@/components/Sidebar"
import Contentpart from "@/components/Contentpart"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PortfolioPage
    }
  ]
})
