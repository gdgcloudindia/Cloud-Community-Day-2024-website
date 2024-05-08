<template>
  <v-main>
    <v-container fluid>
      <v-row justify="start" align="center">
        <v-col cols="12">
          <p class="google-font mb-5" style="font-size: 3.5vh;line-height: 1.22;font-weight:500;color:#4285F4">
            Find a Cloud Community Day near you
          </p>
          <p class="google-font mb-10" style="font-size:120%">
            Communities from all over India are organzing Google Cloud Community Day events. Locate your
            nearest GDG Cloud community and join the celebration of Cloud technologies near you!
          </p>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mt-0 pt-0">
        <v-col md="12" lg="12" sm="12" cols="12" class="text-center lighten-5">
          <v-container>
            <v-row>
              <v-col v-for="(community, index) in communities" :key="index" lg="4" md="6" sm="6" xs="4">
                <a :href="community.rsvp ? community.rsvp : community.link" class="text-decoration-none">
                  <v-hover v-slot="{ hover }">
                    <v-card >
                      <div style="position: absolute;z-index: 1; right: 0; padding: 1em; font-weight: bold; color: rgb(129 129 129)">{{community.date}}</div>
                      <v-img :src="require('@/assets/img/chapter_cards/' + community.card)"
                        class="white--text align-end"
                        :gradient="hover ? 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.65)' : 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,0.5)'"
                        >
                        <v-card-title class="d-flex justify-center" v-text="community.community"></v-card-title>
                      </v-img>

                    </v-card>
                  </v-hover>
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CommunityDays from "@/assets/data/community.json";
export default {
  name: "ChapterCards",
  data() {
    return {
      communities: CommunityDays
    }
  }
};
</script>
