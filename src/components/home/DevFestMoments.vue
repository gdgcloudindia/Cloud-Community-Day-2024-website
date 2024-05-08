<template>
  <v-container fluid class="py-10 mx-0 px-2">
    <v-row justify="center" align="center">
      <v-col md="12" lg="12" cols="12">
        <p
          class="google-font mb-2"
          style="font-size: 3.5vh;line-height: 1.22;font-weight:500; color: #4285F4"
        >
          Google Cloud Community Day ‘19 Moments
        </p>
        <p class="google-font" style="font-size: 110%">
         Cloud Community Day is powered by a shared belief that when developers come together to exchange ideas, amazing things can happen! And here are some of the moments we captured during Cloud Community Day 2019 with amazing folks, sessions, sharing knowledge and just that spirit.
         <!-- <a href="https://www.youtube.com/watch?v=i4C1s_bhYJs&list=PLlaYvYzhTrYkP9wuA32SW9Cz0f6g5JmFd" target="_blank" style="color:#4285F4">See More videos</a> -->
        </p>
        
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" lg="3" cols="12" v-for="(item, index) in contents" :key="index" >
          <v-img
            :src="'https://img.youtube.com/vi/' + item.id + '/mqdefault.jpg'"
            width="100%"
            aspect-ratio="16:9"
            cover
            style="border-radius:8px;"
            gradient="to bottom, rgba(0,0,0,.1), #212121"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0 " align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            <v-card-title
              class="fill-height align-end google-font pb-3 white--text card-height"
            >
              <div>
                <p class="my-0 pb-0" style="font-size:105%">
                  {{ item.community }}
                </p>
                <v-btn
                  x-small
                  color="white"
                  text
                  target="_blank"
                  :href="'https://www.youtube.com/watch?v=' + item.id"
                  style="padding-left:0;font-weight: bold;"
                >
                  <v-icon x-small left>
                    mdi-play-circle-outline
                  </v-icon>
                  Watch
                </v-btn>
              </div>
            </v-card-title>
            <v-layout
              slot="placeholder"
              fill-height
              align-center
              justify-center
              ma-0
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-layout>
          </v-img>
      </v-col>
      <v-col md="12">
        
        <!-- <v-slide-group
          v-model="model"
          class="pa-0"
          active-class="success"
        >
          <v-slide-item
            v-for="n in contents"
            :key="n.community"
            v-slot:default="{ active, toggle }"
          >
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="ma-4"
              height="180"
              width="300"
              @click="toggle"
            >
              <v-row class="fill-height elevation-1" align="center" justify="center">
                <v-img :src="n.image"></v-img>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GoogleCloudCommunityDayMoments",
  components: {},
  data:()=>({
    model: null,
    contents:[
        {
            "community":"Google Cloud Community Days in India",
            "id":"uTg0XAqStaM",
        },
        {
            "community":"Conversational AI: Interview with Priyanka Vergadia",
            "id":"Xg_lFDPnZic",
        },
        {
            "community":"What is Cloud Observability?",
            "id":"mcUzJ1fMUtk",
        },
        {
            "community":"Introduction to Anthos",
            "id":"NicYa_q0JCw",
        }
    ]
  })
};
</script>
