<template>
  <v-app-bar
    app
    fixed
    clipped-left
    flat
    style="background-color: #000 !important;"
  >
    <v-app-bar-nav-icon
      aria-label="Hamburger Btn"
      @click="toggleDrawer"
      class="d-md-none d-lg-none hamburger-btn"
    ></v-app-bar-nav-icon>

    <div class="d-flex align-center" style="padding-left: 6px;">
      <router-link
        to="/"
        class="google-font grey--text text--darken-2"
        style="text-decoration: none; font-size: 110%"
      >
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/img/gdgcloud.svg')"
          transition="scale-transition"
          width="170"
        />
      </router-link>
    </div>
    <v-toolbar-title class="google-font px-0 pr-5" style="width: 250px">
      <!-- <router-link
        to="/"
        class="google-font grey--text text--darken-2"
        style="text-decoration: none; font-size: 110%"
        >GDG Cloud India</router-link
      > -->
    </v-toolbar-title>
    <!-- <v-spacer></v-spacer> -->
    <v-tabs
      color="#4285F4"
      left
      slider-color="#4285F4"
      :hide-slider="getRouteName()"
      class="hidden-sm-and-down google-font"
    >
      <v-tab
        class="google-font"
        aria-label="toolbar links"
        v-for="(link, i) in links.filter((obj) => obj.meta.showToolbar)"
        :key="i"
        :to="link.to"
        @click="onClick($event, link)"
        style="text-transform: capitalize; font-size: 100%; color: #fff; text-decoration: none;"
        >{{ link.text }}</v-tab
      >
    </v-tabs>
    <!-- <PushNotification /> -->
    <!--  -->
    <!-- v-if="!(this.$route.name === 'Registration')"  -->
    <v-btn style="text-transform: capitalize;font-weight:600;border-radius:40px;padding: 24px 35px;color: #000;" dark color="#fff" class="ml-4 google-font hidden-md-and-down" target="_blank" href="https://gdg.community.dev/" depressed
      >Join GDG today
      <v-icon style="transform: rotate(-45deg);">mdi-arrow-right-circle</v-icon>
    </v-btn>
    <!-- <v-btn
      aria-label="Share Button"
      icon
      v-on:click="shareMe"
      class="hidden-sm-and-up"
      style="color:#fff;"
    >
      <v-icon>mdi-share-variant</v-icon>
      Join GDG Today
    </v-btn> -->
  </v-app-bar>
</template>

<script>
// import FDK from "@/config/firebase";
import { mapGetters, mapMutations } from "vuex";
// import PushNotification from "./PushNotification";
export default {
  data: () => ({
    timeout: 6000,
    user: {},
    menu: false,
  }),
  components: {
    // PushNotification,
  },
  computed: {
    ...mapGetters(["links"]),
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      // if (item.to || !item.href) return;
      // this.$vuetify.goTo(item.href);
      let elmnt = document.getElementById(item.text.toLowerCase());
      elmnt.scrollIntoView(false);
      e.currentTarget.className='google-font v-tab--active v-tab';
    },
    getRouteName() {
      if (
        this.$route.name === "CodeofConducts" ||
        this.$route.name === "ParticipationTerms"
      ) {
        return true;
      } else {
        return false;
      }
    },
    shareMe(e) {
      if (navigator.share) {
        navigator
          .share({
            title: "GDG Cloud Community Days India",
            url: "https://cloudcommunitydays.in",
          })
          .then(() => {
            console.log("Thanks for sharing");
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        alert("Not supporting in your browser");
      }
    },
  },
};
</script>

<style>
.v-toolbar .v-toolbar__content {
  /* border-bottom: 1px solid #666666; */
  /* border-bottom: 1px solid rgb(218, 220, 224); */
  height: 64px;
    background: #1f2023 !important;
    width: 80%;
    margin: 0 auto;
    border-radius: 40px;
}
.v-toolbar {
  z-index: 1999 !important;
    border: none !important;
    padding-top: 16px !important;
}

@media only screen and (max-width: 668px) {
  .v-toolbar .v-toolbar__content {
    width: 100%;
    margin: 0 auto;
    border-radius: 0;
  }

  .hamburger-btn .mdi-menu::before {
  color: #fff !important
 }

 .v-toolbar {
  padding-top: 0 !important;
 }
}
</style>
