<template>
  <v-container fluid class="py-10 ma-0">
    <v-row justify="center" align="center" >
      <v-col md="10" cols="12" class="py-7 text-center" > 
        <v-card style="background-color: #fff;" class="card-wrapper">
                <p class="google-font" style="font-size: 30px;color:#000;line-height: 1.22;font-weight:300;line-height: 1.6;">
           What is <span style="font-weight: 600;">Google Cloud Community Day?</span>
          </p>  
  
          <p class="google-font" style="font-size: 110%;color:#000;line-height: 1.22;font-weight:300;line-height: 1.6;">
            <span style="color:#076EFF">#GoogleCloudCommunityDays</span> - is a comprehensive series of community-led flagship events orchestrated by Google Developer Groups Cloud communities across India. These meticulously organised gatherings are tailored to equip attendees with the knowledge and skills necessary to excel in Google Cloud Certifications and to expand their proficiency in Cloud technologies. The events feature interactive sessions, workshops, and expert-led discussions aimed at empowering participants to harness the full potential of Google Cloud services and solutions. 
            <br><br>
            Additionally, these events provide an excellent opportunity for networking with like-minded professionals and industry experts in the Cloud computing domain.
          </p>
          <div>
            <v-btn
            depressed
            rel="noreferrer"
            large
            color="#FBBC04"
            style="text-transform: capitalize;border-radius: 10px;width:100%;border:2px solid #000;font-weight: 600;"
            href="https://gdg.community.dev/"
            class="google-font mr-3 mb-3"
            target="_blank"
            >Find a event near you to attend</v-btn
          >
          </div>
            </v-card>
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
