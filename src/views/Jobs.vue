<template>
  <v-main class="mt-4">
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col md="10" lg="10" sm="10" cols="12">
          <p
            class="google-font"
            style="font-size: 3.5vh;line-height: 1.22;font-weight:500;color:#4285F4"
          >
            Our Jobs
          </p>
          <p class="google-font mb-5" style="font-size:120%">
            Jobs all over the India have gathered together to make Cloud
            Community Days India a success. Locate your nearest GDG Cloud
            community and join us right <a href="http://gdg.community.dev/" target="_blank">here</a>!
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="my-0 py-0">
      <v-row justify="center" align="center">
        <v-col md="10" lg="10" sm="10" cols="12">
          <v-text-field
            flat
            v-model="search"
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-search-web"
            label="Search"
            single-line
            class="my-4"
          ></v-text-field>

          <v-data-table
            :headers="headers"
            :search="search"
            :items="jobsData.filter((item) => item.visibility === true)"
            :items-per-page="10"
            class="elevation-0"
            style="border:1px solid #e0e0e0"
          >
            <template v-slot:item.company="{ item }">
                {{ getPartnerInfo(item)[0].name }}
            </template>
            <template v-slot:item.link="{ item }">
              <Jobs :data="item" :companyInfo="getPartnerInfo(item)" />
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CommunityData from "@/assets/data/community.json";
import jobsData from "@/assets/data/jobs.json";
import partnersData from "@/assets/data/partnersData.json";
export default {
  name: "CommunityPage",
  data: () => ({
    search: "",
    CommunityData: [],
    jobsData: [],
    partnersData: partnersData,
    jobsDetails: [],
    headers: [
      {
        text: "Job Title",
        align: "start",
        sortable: true,
        value: "title",
      },
      { text: "Company", value: "company" },
      { text: "See More", value: "link",sortable: false, },
    ],
  }),
  components: {
    Jobs: () => import("@/components/jobs/JobsDetails"),
    // SocialShare: () => import("@/components/common/SocialInfo")
  },
  mounted() {
    this.CommunityData = this.sortByName(CommunityData);
    this.partnersData = partnersData;
    this.jobsData = jobsData;

    // console.log(this.CommunityData);
  },
  methods: {
    getPartnerInfo(job) {
      //  console.log(job.company,this.partnersData);
      let pCompany = this.partnersData.filter(
        (item) => item.cid === job.company
      );
      return pCompany;
      // console.log('partner data', pCompany);
    },
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
