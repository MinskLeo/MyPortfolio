import Vue from 'vue'
import Router from 'vue-router'

import PortfolioPage from "@/components/PortfolioPage";
import LoginPage from "@/components/LoginPage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PortfolioPage
    },
    {
      path: '/admin',
      component: LoginPage
    }
  ]
})
