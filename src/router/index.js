import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home | Google Cloud Community Days India',
      color: 'white'
    }
  },
  // {
  //   path: '/schedule',
  //   name: 'Schedule',
  //   component: () => import(/* webpackChunkName: "agenda" */ '../views/Schedule.vue'),
  //   meta: {
  //     title: 'Schedule | Google Cloud Community Days India',
  //     color: 'white'
  //   }
  // },
  {
    path: '/community-guidelines',
    name: 'Community Guidelines',
    component: () => import(/* webpackChunkName: "Community Guidelines" */ '../views/CommunityGuidelines.vue'),
    meta: {
      title: 'Community Guidelines | Google Cloud Community Days India',
      color: 'white'
    }
  },
  // {
  //   path: '/communities',
  //   name: 'Communities',
  //   component: () => import(/* webpackChunkName: "Community Guidelines" */ '../views/Communities.vue'),
  //   meta: {
  //     title: 'Communities | Google Cloud Community Days India',
  //     color: 'white'
  //   }
  // },
  // {
  //   path: '/partners', //partner collaboration
  //   name: 'Partners',
  //   component: () => import(/* webpackChunkName: "Community Guidelines" */ '../views/company.vue'),
  //   meta: {
  //     title: 'Partners | Google Cloud Community Days India',
  //     color: 'white'
  //   }
  // },
  // {
  //   path: '/resources',
  //   name: 'Resources',
  //   component: () => import(/* webpackChunkName: "Resources" */ '../views/Resources.vue'),
  //   meta: {
  //     title: 'Resources | Cloud Community Days India',
  //     color: 'white'
  //   }
  // },
  // {
  //   path: '/partners',
  //   name: 'Partners',
  //   component: () => import(/* webpackChunkName: "partners" */ '../views/Partners.vue'),
  //   meta: {
  //     title: 'Partners | Cloud Community Days India',
  //     color: 'white'
  //   }
  // },
  // {
  //   path: '/volunteers',
  //   name: 'Volunteers',
  //   component: () => import(/* webpackChunkName: "volunteers" */ '../views/Volunteers.vue'),
  //   meta: {
  //     title: 'Volunteers | Cloud Community Days India',
  //     color: 'white'
  //   }
  // },
  // {
  //   path: '/registration',
  //   name: 'Registration',
  //   component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue'),
  //   meta: { 
  //     title: 'Registration | Google Cloud Community Days India',
  //     color: 'white'
  //   }
  // },
  // {
  //   path: '/speakers',
  //   name: 'Speakers',
  //   component: () => import(/* webpackChunkName: "speakers" */ '../views/Speakers.vue'),
  //   meta: {
  //     title: 'Speakers | Google Cloud Community Days India',
  //     color: 'white'
  //   }
  // },
  // {
  //   path: '/jobs',
  //   name: 'Jobs',
  //   component: () => import(/* webpackChunkName: "speakers" */ '../views/Jobs.vue'),
  //   meta: {
  //     title: 'Jobs | Google Cloud Community Days India',
  //     color: 'white'
  //   }
  // },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/FAQ.vue'),
    meta: {
      title: 'FAQ | Google Cloud Community Days India',
      color: 'white'
    }
  },
  {
    path: '/coc',
    name: 'CodeofConducts',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/COC.vue'),
    meta: {
      title: 'Code of Conducts | Google Cloud Community Days India',
      color: 'white'
    }
  },
  //   {
  //   path: '/certifications',
  //   name: 'Certifications',
  //   component: () => import(/* webpackChunkName: "speakers" */ '../components/home/Certifications.vue'),
  //   meta: {
  //     title: 'Certifications | Google Cloud Community Days India',
  //     color: 'white'
  //   }
  // },

  // {
  //   path: '/coc',
  //   name: 'CodeofConducts',
  //   component: () => import(/* webpackChunkName: "speakers" */ '../views/COC.vue'),
  //   meta: {
  //     title: 'Code of Conducts | Cloud Community Days India',
  //     color: 'white'
  //   }
  // },

  // {
  //   path: '/winners',
  //   name: 'Quiz Winners',
  //   component: () => import(/* webpackChunkName: "speakers" */ '../views/Winners.vue'),
  //   meta: {
  //     title: 'Winners | Cloud Community Days India',
  //     color: 'white'
  //   }
  // },
  // {
  //   path: '/team',
  //   name: 'Team',
  //   component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue'),
  //   meta: {
  //     title: 'Team | Cloud Community Days India',
  //     color: 'white'
  //   }
  // },
  // {
  //   path: '/tc',
  //   name: 'ParticipationTerms',
  //   component: () => import(/* webpackChunkName: "ParticipationTerms" */ '../views/TC.vue'),
  //   meta: {
  //     title: 'Participation Terms & Privacy Policy | Cloud Community Days India',
  //     color: 'white'
  //   }
  // },
  {
    path: '*',
    name: 'redirect',
    redirect: {
      path: '/'
    },
    meta: {
      title: `Redirect `,
      color: "white",
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
