<template>
  <v-bottom-navigation
    grow
    app
    background-color="black"
    color="#4285F4"
    class="hidden-md-and-up"
    style="overflow-x: hidden;"
  >
    <v-btn
      aria-label="Bottom Nav Links"
      v-for="(link, i) in links.filter(res=>res.meta.showBottomNav)"
      :key="i"
      :to="link.to"
      small
      class="ml-0 google-font"
      style="text-transform: capitalize;"
      text
      @click="onClick($event, link)"
    >
      <span>{{ link.text }}</span>
      <v-icon>{{ link.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["links"])
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    }
  }
};
</script>

<style scoped>
.v-size--small {
  min-width: 50px !important;
}
.v-item-group.v-bottom-navigation .v-btn, .v-item-group.v-bottom-navigation .v-btn .v-btn__content {
  color: #fff !important;
}
</style>
