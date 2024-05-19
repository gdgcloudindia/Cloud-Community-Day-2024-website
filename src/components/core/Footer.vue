<template>
  <v-footer class="ma-0 footer-wrapper" height="auto">
    <v-container
      fluid
      class="footer-container"
    >
      <v-row justify="center" align="center">
        <v-col md="10" lg="10" sm="11" xl="10" cols="12">
          <v-card-text class="mx-0 px-0" style="height: 40px; position: relative">
           <!--  <v-fab-transition>
              <v-btn
                aria-label="FAB Button"
                style="margin-top:-20px"
                color="white"
                absolute
                top
                right
                fab
                @click="toTop"
              >
                <v-icon>mdi-chevron-up</v-icon>
              </v-btn>
            </v-fab-transition>-->
            <!-- <h1
              class="google-font"
            >GDG Cloud India</h1> -->
            <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/img/logo-vector-svg.svg')"
          transition="scale-transition"
          width="170"
        />
          </v-card-text> 
        </v-col>
      </v-row>
      <v-row justify="end" align="center" class="text-right">
        <v-col md="10" sm="11" xl="10" lg="10" cols="12" class="">
          <a href="https://developers.google.com/community/gdg" target="_blank"
            rel="noreferrer"
            class="white-text mr-4 google-font"
            style="text-decoration:none; color: #fff"
          >About GDG Program</a>
          <br class="hidden-md-and-up">
          <router-link
            to="/faq"
            rel="noreferrer"
            class="mr-3 google-font"
            style="text-decoration:none;color: #fff"
          >FAQ</router-link>
          <br class="hidden-md-and-up">
          <router-link to="/coc" style="text-decoration:none;color: #fff" rel="noreferrer" class="mr-3 google-font">Code of conduct</router-link> 
          <br class="hidden-md-and-up">
          <a href="https://developers.google.com/community-guidelines" target="_blank"
            rel="noreferrer"
            class="mr-4 google-font"
            style="text-decoration:none;color: #fff"
          >Community Guidelines</a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
<style>
.footer-wrapper {
  background-color: #000 !important;
} 
.footer-wrapper .footer-container {
  border-radius: 40px;
    color: #fff;
    width: 80%;
    background-color: #1f2023 !important;
    display: flex;
    align-items: center;
    padding: 0px 10px 14px;
}
</style>