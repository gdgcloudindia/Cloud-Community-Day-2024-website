<template>
  <v-main class="m-0">
    <v-container fluid class="mt-0 py-0">
      <v-row align="center" justify="center" class="mt-0 pt-0" style="background: #000" >
        <v-col md="10" lg="10" sm="12" class="my-4" >
          <Hero class="mt-md-8 mb-md-0 my-xs-0 py-xs-0"/>
          <!-- <About class="mt-md-8 mb-md-0 my-xs-0 py-xs-0"/> -->
          <!-- <Countdown class="mt-md-8 mb-md-0 my-xs-0 py-xs-0"/> -->
          <!-- <YoutubeLinks class="mt-md-8 mb-md-0 my-xs-0 py-xs-0"/> -->
          <!-- <ChapterCards class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" /> -->
          <!-- <Events class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" /> -->
          <!-- <Theme class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" /> -->
          <!-- <Cert class="mt-md-8 mb-md-0 my-xs-0 py-xs-0"/> -->
          <!-- <DevFestMoments class="mt-md-8 mb-md-0 my-xs-0 py-xs-0"/> -->
          <!-- <card class="mt-md-8 mb-md-0 my-xs-0 py-xs-0 hidden-sm-and-down"/> -->
          
        </v-col>
      </v-row>
    </v-container>
    <div class="home-about-wrapper">
      <v-row align="center" justify="center" class="mt-0 pt-0">
        <v-col md="10" lg="10" sm="12" class="my-4" >
          <About class="mt-md-8 mb-md-0 my-xs-0 py-xs-0"/>
        </v-col>
      </v-row>

    </div>
    <v-container fluid class="mt-0 py-0">

      <!-- style="background:#f8f9fa" -->
      <!-- style="background:#0cad4d" -->
      <!-- <v-row align="center" justify="center" style="border-top:1px solid #e0e0e0" >
        <v-col md="10" lg="10" sm="12" >
          <Twitter class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" />
        </v-col>
      </v-row> -->

      <!-- Theme -->
      <!-- <v-row align="center" justify="center" class="py-0 my-0" >
        <v-col md="10" lg="9" sm="12" class="py-0 my-0">
          <Theme class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" />
          
        </v-col>
      </v-row> -->

      <!-- Certifications & Stats -->
      <v-row align="center" justify="center" class="spacing-wrapper" style="background: #000">
        <v-col md="10" lg="10" sm="12" class="py-0 my-0">
          <Stats class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" />
          <Certifications class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" />
        </v-col>
      </v-row>

      <!-- Highlights -->
      <v-row align="center" justify="center" class="py-0 my-0" style="background: #000">
        <v-col md="10" lg="10" sm="12" class="py-0 my-0">
          <Highlights class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" />
        </v-col>
      </v-row>
      
            <!-- Follow Us -->
            <v-row align="center" justify="center" class="" style="background-color: #000;" >
        <v-col md="10" lg="10" sm="10" class="text-center">
          <AboutGDG class="mt-md-8 mb-md-0 my-xs-0 py-xs-0"/>
          <FollowUs class="mt-md-0 mb-md-10 my-xs-0" />
        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script>
import AboutGDG from '../components/home/AboutGDG.vue';

export default {
  name: "Home",
  components: {
    Hero:()=> import("@/components/home/Hero"),
    AboutGDG:()=> import("@/components/home/AboutGDG"),
   // Events:() => import("@/components/home/Events"),
    //ChapterCards:() => import("@/components/home/ChapterCards"),
    // Countdown:()=> import("@/components/home/Countdown"),
    // YoutubeLinks:()=> import("@/components/home/YoutubeLinks"),
    About:()=> import("@/components/home/About"),
    // DevFestMoments: () => import("@/components/home/DevFestMoments"),
    FollowUs: () => import("@/components/home/follow"),
    Certifications: () => import("@/components/home/Certifications"),
    Highlights: () => import("@/components/home/Highlights"),
   // Cert: () => import("@/components/home/Cert"),
    // HomeScreen: ()=> import('@/components/home/homescreen'),
    Stats: ()=> import('@/components/home/Stats'),
   // Theme: ()=> import('@/components/home/theme'),
    //card: ()=> import('@/components/home/cards'),
  },
};
</script>
<style>
.home-about-wrapper {
  background: url('../assets/img/about-theme.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 450px;
}
.spacing-wrapper {
  padding-top: 12rem !important;
}
@media only screen and (max-width: 668px) {
  .home-about-wrapper {
    height: auto;
  }
  .spacing-wrapper {
    padding-top: 2rem !important;
  }
}
</style>
