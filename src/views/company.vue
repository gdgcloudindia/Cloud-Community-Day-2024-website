<template>
  <v-main class="">
    <v-container fluid>
      <v-row justify="start" align="center">
        <v-col md="10" offset-md="1" offset-lg="1" lg="10" sm="10" cols="12">
          <v-container class="mb-0 pb-0">
            <v-row class>
              <v-col class="">
                <p
                  class="google-font"
                  style="font-size: 3.5vh;line-height: 1.22;font-weight:500;color:#4285F4"
                >
                  Our Partners
                </p>
                <p class="google-font mb-5" style="font-size:120%">
                  Partners all over the India have gathered together to make
                  Cloud Community Days India a success. Locate your nearest GDG
                  Cloud community and join us right here!
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row justify="start" align="center">
        <v-col md="10" offset-md="1" offset-lg="1" lg="10" sm="10" cols="12">
          <v-container class="mb-0 pb-0">
            <v-row>
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="12"
                class="px-1"
                v-for="(item, index) in partnersData"
                :key="index"
              >
                <Partners :data="item" :partnerDetails="partnerDetails" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CommunityData from "@/assets/data/community.json";
import partnersData from "@/assets/data/partnersData.json";
export default {
  name: "CommunityPage",
  data: () => ({
    CommunityData: [],
    partnersData: partnersData,
    partnerDetails: [],
  }),
  components: {
    Partners: () => import("@/components/partners/partnerDetails"),
    // SocialShare: () => import("@/components/common/SocialInfo")
  },
  mounted() {
    this.CommunityData = this.sortByName(CommunityData);
    // console.log(this.CommunityData);
  },
};
</script>

<style>
.whiteThemeCard {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

.community-card {
  height: 100px;
}

.community-card:hover {
  transition: 0.3s all ease-in-out;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
}

.community-card .v-responsive {
  height: 100%;
}

.community-card .v-image__image--cover {
  background-size: contain;
}
</style>

<style scoped>
.client-logo {
  height: 90px;
  padding: 12px 12px;
  border-radius: 7px;
  background: white;
  border: 1px solid #ebebeb;
  text-align: center;
}
</style>
