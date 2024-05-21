<template>
  <v-container fluid class="ma-0 google-font text-white">
    <div class="certifications-header">
    <h6 style="font-size: 25px; font-weight: 400">
      Accelerate your career growth with
    </h6>
      <h2
        style="
          font-size: 36px;
          font-weight: 600;
          padding-right: 8px;
          line-height: 40px;
          display: inline;
        "
      >
        Industry leading cloud certifications
      </h2>
      <v-icon class="pb-2" color="#FBBC04">mdi-check-decagram</v-icon>
    </div>
    <v-row align="center" justify="center" class="py-10">
      <v-col cols="12" sm="6" md="6" lg="4" v-for="(cert, index) in certs" :key="index" >
        <v-card class="pa-10" style="background: #1f2023; border-radius: 60px">
          <div class="d-flex flex-column align-center">
            <h6 class="text-white mb-8">
              <strong>Google</strong> Cloud Certifications
            </h6>
            <v-img
              :src="require(`@/assets/img/certifications/${cert.img}`)"
              width="180px"
            ></v-img>
          </div>
          <h5 class="mt-8" style="color: #4285f4">{{ cert.type }}</h5>
          <h3 class="mt-2 text-white">{{cert.title}}</h3>
          <div class="d-flex flex-column">
            <v-btn
              dark
              large
              rounded
              outlined
              href="https://cloud.google.com/learn/certification"
              target="_blank"   
              style="text-transform: capitalize"
              class="mt-4 google-font"
              >Learn More</v-btn
            >
            <v-btn
              large
              rounded
              dark
              :href="`https://cloud.google.com/learn/certification/${cert.title.toLowerCase().replace(/ /g, '-')}`"
              target="_blank"
              style="
                background: linear-gradient(145.24deg,#076eff 541.5%,#69a3ff 8780.84%);
                border-radius: 90px;
                text-transform: capitalize;
              "
              class="py-7 px-4 mt-4 google-font"
              >Apply Now
              <v-icon>mdi-arrow-right-circle</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    certs: [
    {
        "type": "Associate",
        "title": "Cloud Engineer",
        "img": "ace.png"
      },
    {
        "type": "Professional",
        "title": "Data Engineer",
        "img": "pde.png"
      },
      {
        "type": "Professional",
        "title": "Machine Learning Engineer",
        "img": "pme.png"
      },
      {
        "type": "Professional",
        "title": "Cloud Architect",
        "img": "pca.png"
      },
      {
        "type": "Professional",
        "title": "Cloud Developer",
        "img": "pcd.png"
      },
      {
        "type": "Professional",
        "title": "Cloud DevOps Engineer",
        "img": "pcdo.png"
      }
    ]
  })
}
</script>