<template>
  <v-main>
    <v-container fluid class="mb-16">
      <v-row justify="start" align="center">
        <v-col cols="12">
          <p class="google-font mb-5" style="font-size: 3.5vh;line-height: 1.22;font-weight:500;color:#4285F4">
            Events Map
          </p>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" v-if="loading">
        <v-progress-circular indeterminate color="indigo" :width="5" :size="50">
        </v-progress-circular>
      </v-row>
      <v-row v-show="!loading" align="center" justify="center" class="mt-0 pt-0">
        <v-col md="12" lg="12" sm="12" cols="12" class="text-center grey lighten-5">
          <iframe @load="load"
            src="https://www.google.com/maps/d/embed?mid=1jdtS_Hh9zyzgHIOeRQvRXBXxBzE33j8&ehbc=2E312F&z=4.7&noprof=1"
            width="100%" height="500" id="myIframe" style="border:0;border-radius:12px">Loading...</iframe>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style>
#myIframe .i4ewOd-pzNkMb-haAclf {
  display: none !important;
}
</style>

<script>
export default {
  name: "Events",
  data: () => ({
    loading: true,
  }),
  methods: {
    load() {
      console.log("loaded");
      this.loading = false;
    },
  },
};
</script>
