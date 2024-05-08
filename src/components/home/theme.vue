<template>
  <v-container fluid class="py-10 mt-10 mb-4">
    <v-row justify="start" align="start">
      <v-col
        md="12"
        lg="12"
        sm="12"
        cols="12"
        class="mt-2 pa-md-10"
        style="border:1px solid #e0e0e0;border-radius:8px;"
      >
        <v-container>
          <v-row align="center" justify="center">
            <v-col md="4" class="text-center">
              <v-img
                src="https://storage.googleapis.com/gweb-cloudnext2020.appspot.com/event-assets/sf/demos/graphic_manipulate.png"
                style="width:100%"
              ></v-img>
            </v-col>
            <v-col md="8" class="">
              <p
                class="google-font mb-2"
                style="font-size: 3.5vh;line-height: 1.22;font-weight:500; color: #4285F4;"
              >
                What to expect at a Cloud Community Day event?
              </p>
              <p class="google-font" style="font-size: 110%">
                Google Cloud Community Days events are a great place to start
                your journey towards your <b>Google Cloud certifications</b>.
                Each Google Cloud Community Days event brings together Google Cloud
                 experts along with Developers & IT Practitioners who want 
                to prepare for Google Cloud certifications. At the event, ask our 
                experts for tips and doubts relating to your Cloud Certification journey!
              </p>
              <p class="google-font" style="font-size: 110%">
                Your nearest GDG Cloud Community can help you with -
              </p>
              <ol class="google-font" style="font-size: 110%">
                <li>
                  <b>Qwiklabs credits</b> for hands-on learning of all Cloud technologies.
                </li>
                <li>
                  Connect with <b>Google Cloud partner companies</b> at the event for <b>job openings</b>.
                </li>
                <li>
                  Win <b>amazing swags</b> and
                  get started with your Google Cloud Certifications journey!
                </li>
              </ol>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import maindata from "@/assets/data/main.json";
export default {
  data: () => ({
    maindata: maindata,
  }),
};
</script>
