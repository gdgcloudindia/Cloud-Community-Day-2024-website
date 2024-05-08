<template>
  <v-dialog v-model="dialog" width="900" scrollable>
    <template v-slot:activator="{ on }">
      <p v-on="on" style="cursor: pointer;">See More</p>
    </template>

    <v-card v-if="dialog">
      <v-card-text class="pa-5">
        <v-container>
          <v-row>
            <v-col md="12">
              <v-avatar size="90" class="partner-image mb-4">
                <img
                  :src="getPartnerImgUrl(data.image)"
                  :lazy-src="getPartnerImgUrl(data.image)"
                  alt
                />
              </v-avatar>
              <p class="google-font my-0">
                <b>Company:</b> <a target="_blank" :href="companyInfo[0].socialMedia['website']">{{ companyInfo[0].name }}</a>
              </p>
              <p class="google-font my-1"><b>Job Title:</b> {{ data.title }}</p>

              <p class="google-font my-1"><b>Job Description:</b></p>
              <p class="google-font" style="font-size:110%">{{ data.desc }}</p>
              <div>
                <b class="google-font" style="font-size:110%"
                  >Responsibilities:</b
                >
                <ul>
                  <li
                    class="google-font"
                    style="font-size:110%"
                    v-for="item in data.responsibility"
                    :key="item"
                  >
                    {{ item.item }}
                  </li>
                </ul>
              </div>
              <div class="pt-5">
                <b class="google-font" style="font-size:110%">Skills:</b>
                <ul>
                  <li
                    class="google-font"
                    style="font-size:110%"
                    v-for="skills in data.skills"
                    :key="skills"
                  >
                    {{ skills.skill }}
                  </li>
                </ul>
              </div>
              <v-btn color="primary" class="elevation-0 my-5" :href="`${data.applylink}`" target="_blank">Apply Here</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions
        :class="
          this.$vuetify.theme.dark == true ? 'grey darken-3' : 'grey lighten-3'
        "
      >
        <v-spacer></v-spacer>
        <v-btn aria-label="close" color="primary" text @click="dialog = false"
          >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  components: {},
  inject: ["theme"],
  props: ["data", "companyInfo", "item"],
  data() {
    return {
      dialog: false,
    };
  },
  mounted() {},
  methods: {
  },
};
</script>

<style scoped>
.darkModeCard {
  background-color: #292929;
  border: 1px solid #212121;
  border-radius: 5px;
}
.whiteThemeCard {
  background: white;
  border: 1px solid #e0e0e0;
  /* border-top: 4px solid #4285F4; */
  border-radius: 5px;
}

.partner-image {
  width: auto !important;
  border-radius: 0 !important;
  max-width: 254px;
}

.partner-image img {
  max-height: 70px;
}

@media only screen and (max-width: 660px) {
  /* .partner-image {
  width: 100px !important;
} */
}
</style>
