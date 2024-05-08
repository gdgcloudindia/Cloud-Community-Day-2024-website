<template>
  <v-container fluid class="py-0">
    <!-- Desktop Screen Class hidden-sm-and-down -->
    <v-row justify="center" align="center" class="py-5">
      <v-col md="5" cols="12" class="order-md-1 order-2">
        <v-img
          class="white mb-2"
          :src="require('@/assets/img/google-cloud-india.png')"
          style="width: 30%"
        ></v-img>
        <p class="google-font mb-2 header" style="font-size: 8.2vh;line-height: 1.22;font-weight:900;color: #4285F4;">Community Days 2023</p>
        <p class="google-font mt-5 mb-3" style="font-size:115%">
          <v-icon class="mb-1">mdi-calendar-text</v-icon>&nbsp;May - july,
          2024
          <span style="color:#4285F4">
            <b>|</b>
          </span>
          &nbsp;
          <v-icon class="mb-1">mdi-access-point</v-icon>&nbsp;India
        </p>
        <p class="google-font my-10" style="font-size: 95%;line-height: 1.22;font-weight:300;line-height: 1.6;">
          <b style="color: #4285F4;">#GoogleCloudCommunityDays </b> - is series of community-leds events organised by GDG Cloud communities across India to help you prepare for Google Cloud Certifications and learn more about Cloud technologies.
        </p>
        <v-btn
          depressed
          rel="noreferrer"
          large
          rounded
          dark
          style="text-transform: capitalize;background-color:#DB4437"
          href="https://youtu.be/D33KqNAiAnk"
          class="google-font mr-3 mb-3 py-1"
          target="_blank"
          >Watch on YouTube for 2022 highlights</v-btn
        >
      </v-col>
      <v-col md="7" cols="12" class="text-center order-md-2 order-1"> 
        <v-img
          class="white"
          :src="require('@/assets/img/home-ccd-2023.png')"
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
    </v-row>
   </v-container>
</template>
