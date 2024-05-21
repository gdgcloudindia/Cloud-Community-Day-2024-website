<template>
  <v-container fluid class="ma-0 google-font text-white">
    <h2 style="font-size: 36px; font-weight: 600; line-height: 40px">
      Watch what it's like
    </h2>
    <div
      class="mt-10"
      style="position: relative; overflow: hidden; padding-top: 56.25%"
    >
      <iframe
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        "
        src="https://www.youtube.com/embed/uTg0XAqStaM?si=h2iU_8YwPa7ZtlhS"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>

    <div class="mt-15 d-flex align-stretch flex-column align-sm-center justify-sm-space-between flex-sm-row">
      <h2 style="font-size: 36px; font-weight: 500; line-height: 40px">
        <strong style="font-weight: 700;"><span style="color: #4285f4;">#</span>GCCD</strong>Playlist
      </h2>

      <v-btn
        dark
        rounded
        href="https://www.youtube.com/@GDGIndia"
        target="_blank"
        style="text-transform: capitalize"
        class="mt-5 mt-sm-0"
        >Subscribe to GDG India <v-icon class="ps-2" color="#FF0000">mdi-youtube</v-icon>
      </v-btn>
    </div>
    <v-row class="mt-10">
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="4"
        v-for="(playlist, index) in playlist"
        :key="index"
      >
        <div style="position: relative; overflow: hidden; padding-top: 56.25%">
          <iframe
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border: 0;
            "
            :src="playlist.video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    playlist: [
      {
        video: "https://www.youtube.com/embed/1q6EFTdRmH8?si=FM-Q04VocoqQK-zJ",
      },
      {
        video: "https://www.youtube.com/embed/GKEk1FzAN1A?si=gaEuulvlm7wa5_PG",
      },
      {
        video: "https://www.youtube.com/embed/rPZyJjkVb8k?si=HwQGvCIIoRs6C3kh",
      },
      {
        video: "https://www.youtube.com/embed/_MsrtZ0LbJI?si=iGhJ_FAisRUrKiut",
      },
      {
        video: "https://www.youtube.com/embed/nhwYc4StHIc?si=_I05VlzguM13IYmd",
      },
      {
        video: "https://www.youtube.com/embed/rmQovUuR5O4?si=a3Bz-vQ4QLKh36Bc",
      },
    ],
  }),
};
</script>
