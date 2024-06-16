<template>
  <v-container fluid class="">
    <v-row justify="center" align="center">
      <v-col md="12" lg="12" class="pa-2" sm="12" cols="12">
        <v-container fluid>
          <v-row>
            <v-col lg="12" md="12" sm="16">
              <p class="google-font mb-0 text-center" style="color:#fff;font-size: 25px;">
                Stats from Google Cloud Community Days since 2020
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="3" cols="6" style="margin: 0 auto;" v-for="(item, index) in maindata.stats" :key="index"
              class="text-center">
              <p class="google-font mb-0" style="color:#fff;font-size:300%">
                {{ item.count }}
              </p>
              <p class="google-font mb-0" style="color:#fff;font-size: 20px;">
                {{ item.name }}
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import maindata from '@/assets/data/main.json'
export default {
  components: {
  },
  data: () => ({
    maindata: maindata
  })
}
</script>
