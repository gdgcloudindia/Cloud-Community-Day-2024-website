<template>

    <v-container fluid class="ma-0 google-font text-white" style="background: #000">
        <v-row align="center" justify="center" v-if="loading">
            <v-progress-circular indeterminate color="indigo" :width="5" :size="50">
            </v-progress-circular>
        </v-row>
        <v-row v-show="!loading" align="center" justify="center" class="mt-0 pt-0">
            <v-col md="12" lg="12" sm="12" cols="12" class="lighten-5" style="padding: 0; border-radius: 60px;">
                <iframe @load="load"
                    src="https://www.google.com/maps/d/embed?mid=170r7HuPqmC_2IscRoMNk5TgYw8JOjd4&ehbc=2E312F&z=4.7"
                    width="100%" height="500" id="myIframe"
                    style="border:0;border-radius:60px; background-color: #000;">Loading...</iframe>
            </v-col>
        </v-row>
    </v-container>
</template>

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