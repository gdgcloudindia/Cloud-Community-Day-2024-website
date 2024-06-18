<template>
  <v-container fluid class="py-0">
    <!-- Desktop Screen Class hidden-sm-and-down -->
    <v-row justify="center" align="center" class="py-5">
      <v-col md="12" cols="12" class="text-center order-md-2 order-1 posiwrapper"> 
        <div class="d-flex justify-center">
          <!-- <div> -->
            <div class="position-absolute">
              <img src="../../assets/img/introducig.svg"/>
            </div>
            <p class="google-font mb-0 header mr-4" style="font-size: 8.2vh;line-height: 1.22;font-weight:900;color: #fff;">Google Cloud
        </p>
        <v-img
          :src="require('@/assets/img/home-text-firebase.svg')"
          class="image-wrapper"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="white"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img> 
          <!-- </div> -->

        </div>  
        <p class="google-font mb-2 header" style="font-size: 10.2vh;line-height: 1.22;font-weight:900;color: #fff;">Community Days</p>
        <div class="pt-8">
          <v-btn
          depressed
          rel="noreferrer"
          large
          rounded
          dark
          style="text-transform: capitalize;background-color: transparent; border: 1px solid #fff"
          href="javascript:void(0)"
          class="google-font mr-3 mb-3 py-1"
          target="_blank"
          >2024</v-btn
        >
        <a class="google-font mr-3 mb-3 py-1" style="color:#fff;text-decoration: none;font-size: 25px;"  href="javascript:void(0)">Explore</a>
        <v-btn
          depressed
          rel="noreferrer"
          large
          rounded
          dark
          style="text-transform: capitalize;background-color: #076eff; border: 1px solid #076eff"
          href="javascript:void(0)"
          class="google-font mr-3 mb-3 py-1 flip-animation"
          target="_blank"
          >Generative AI</v-btn
        >
        </div>
        <div class="pt-4">
          <span class="google-font mr-3 mb-3 py-1 text-white june-august-btn" style="font-size: 25px;">June to August</span>
          <v-btn
          depressed
          rel="noreferrer"
          large
          rounded
          dark
          style="text-transform: capitalize;background-color: #fff; border: 1px solid #fff;color: #000;padding: 24px 35px;font-weight:600;"
          href="https://gdg.community.dev/"
          class="google-font mr-3 mb-3 py-4"
          target="_blank"
          >Find an event near you!
          <v-icon>mdi-arrow-right-circle</v-icon>
          </v-btn
        >
        </div>
      </v-col> 
    </v-row>
   </v-container>
</template>
<style>
.image-wrapper {
  max-width: 8%;
}
.text-white {
  color: #fff;
}

.posiwrapper {
  position: relative;
  z-index: 1;
  height: 450px;
  padding-top: 30px;
}

.position-absolute {
  position: absolute;
  z-index: -1;
  top:-6%;
  left: 23%;

}

.flip-animation {
  transition: transform 1s;
  transform-style: preserve-3d;
  min-width: 280px !important;
}

.flip-animation:hover {
  transform: rotateY(360deg);
}

@media only screen and (max-width: 668px) {
  .image-wrapper {
    display: none;
  }
  .position-absolute {
    display: none;
  }

  .june-august-btn {
    display: inline-block;  
  }
}
</style>
