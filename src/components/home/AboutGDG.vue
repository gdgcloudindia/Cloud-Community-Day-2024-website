<template>
    <v-container fluid class="py-10 ma-0">
      <v-row justify="center" align="center" >
        <v-col md="12" cols="12" class="py-7"> 
            <v-card style="background-color: #000;" class="card-wrapper text-left">
                <p class="google-font" style="font-size: 30px;color:#fff;line-height: 1.22;font-weight:300;line-height: 1.6;">
           What is <br /><span style="font-weight: 600;font-size: 40px;">Google Developers Groups ?</span>
          </p>
  
          <p class="google-font" style="font-size: 110%;color:#fff;line-height: 1.22;font-weight:300;line-height: 1.6;">
            Google Developer Groups (GDGs) Cloud, supported by Google Developers India, focus on cloud technologies like Google Cloud Platform (GCP), Generative AI, Artificial Intelligence and more...
            <br><br>
            Joining a GDG Cloud community offers learning opportunities through events and workshops, networking with industry peers, access to resources for skill development and certification preparation, and staying updated on cloud trends. Members can also contribute, lead activities, and grow their expertise within the cloud technology community, making Google Developer Groups Cloud an enriching experience for all levels of cloud enthusiasts and professionals.
          </p>
          <div>
            <v-btn
            depressed
            rel="noreferrer"
            large
            color="primary"
            style="text-transform: capitalize;border-radius: 40px;"
            href="https://gdg.community.dev/"
            class="google-font mr-3 mb-3"
            target="_blank"
            >Find a chapter near you 
            <v-icon style="transform: rotate(-45deg);">mdi-arrow-right-circle</v-icon>
            </v-btn
          >

          <v-btn
            depressed
            rel="noreferrer"
            large
            rounded
            color="#000"
            outlined
            style="text-transform: capitalize;color:#fff"
            href="javascript:void(0)"
            class="google-font mr-3 mb-3"
            target="_blank"
            >Watch intro video
            <v-icon style="transform: rotate(-45deg);">mdi-arrow-right-circle</v-icon>
            </v-btn
          >
          </div>
            </v-card>
        </v-col>
      </v-row>
     </v-container>
  </template>
  
  <script>
  export default {
    name: "AboutGDG",
    components: {
    },
  };
  </script>
  <style>
    .card-wrapper {
        border: 2px solid #1F2023 !important;
        padding: 50px;
        border-radius: 40px !important;
    }
</style>
  
