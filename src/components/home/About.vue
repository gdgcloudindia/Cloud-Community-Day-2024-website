<template>
  <v-container fluid class="py-10 ma-0">
    <v-row justify="center" align="center" >
      <v-col md="6" cols="12" class="py-7 text-center" > 
        <v-img
          class="white"
          style="width:90%;border-radius: 15px;"
          :src="require('@/assets/img/about-new-one.png')"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="white"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col md="6" cols="12" class="py-7" > 
        <p class="google-font" style="font-size: 110%;line-height: 1.22;font-weight:300;line-height: 1.6;">
          Each Google Cloud Community Days event brings you an opportunity to learn about Cloud Technology and Google Cloud Certifications from the industry experts.
        </p>

        <p class="google-font" style="font-size: 110%;line-height: 1.22;font-weight:300;line-height: 1.6;">
          Our experts will tell you how Google Cloud Platform and Google Cloud Certifications can help you in accelerating your career by boosting your knowledge.
          <br><br>
          You’ll also stand a chance to win exciting prizes and heavy discounts coupons on Google Cloud Certifications at any Google Cloud Community Days event you become a part of.
        </p>

        <v-btn
          depressed
          rel="noreferrer"
          large
          color="primary"
          outlined
          style="text-transform: capitalize;"
          href="https://developers.google.com/community/gdg"
          class="google-font mr-3 mb-3"
          target="_blank"
          >Learn More About GDG Program</v-btn
        >
      </v-col>
    </v-row>
   </v-container>
</template>

<script>
export default {
  name: "About",
  components: {
  },
};
</script>
