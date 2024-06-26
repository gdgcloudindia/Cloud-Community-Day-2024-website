import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      {
        text: "Home",
        to: "/",
        icon: "mdi-home",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
        {
        text: "Certifications",
        to: "/certifications",
        icon: 'mdi-format-float-left',
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      // {
      //   text: "Schedule",
      //   to: "/schedule",
      //   icon: 'mdi-format-float-left',
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: true,
      //   },
      // },
      // {
      //   text: "Speakers",
      //   to: "/speakers",
      //   icon: 'mdi-account-switch',
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: true,
      //   },
      // },
      // {
      //   text: "Jobs",
      //   to: "/jobs",
      //   icon: 'mdi-account-switch',
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: false,
      //   },
      // },
      // {
      //   text: "Team",
      //   to: "/team",
      //   icon: "mdi-account-multiple",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: false,
      //   },
      // },
      // {
      //   text: "Volunteers",
      //   to: "/volunteers",
      //   icon: 'mdi-account-switch',
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: false,
      //   },
      // },
      // {
      //   text: "Communities",
      //   to: "/communities",
      //   icon: "mdi-form-select",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: false,
      //   },
      // },
      // {
      //   text: "Partners",
      //   to: "/partners",
      //   icon: "mdi-form-select",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: false,
      //   },
      // },
      // {
      //   text: "Resources",
      //   to: "/resources",
      //   icon: "mdi-folder-outline",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: false,
      //   },
      // },
      // {
      //   text: "Register",
      //   to: "/registration",
      //   icon: "mdi-account-circle",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: true,
      //   },
      // },
      // {
      //   text: "Winner",
      //   to: "/winners",
      //   icon: "mdi-trophy-variant",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: false,
      //   },
      // },
      {
        text: "FAQ",
        to: "/faq",
        icon: "mdi-star",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      
    ],
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {
  },
  modules: {
  }
})
