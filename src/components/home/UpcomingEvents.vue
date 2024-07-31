
  <template>
    <v-container id="upcoming-events" fluid class="google-font text-white">
      <div class="">
        <h2 style="
          font-size: 36px;
          font-weight: 600;
          line-height: 40px;
          text-align: center;
        ">
          Find Our Latest Events
        </h2>
      </div>
  
      <div v-if="chunkedUpcomingEvents.length > 0">
        <h3 style="text-align: center; color: #076EFF;">Upcoming Events</h3>
        <v-carousel :show-arrows="true">
          <v-carousel-item v-for="(chunk, index) in chunkedUpcomingEvents" :key="index">
            <v-row align="center" justify="center" class="py-10">
              <v-col cols="12" sm="12" md="4" lg="4" v-for="(event, evIndex) in chunk" :key="evIndex">
                <v-card class="pa-10"
                  style="background: #000; border-color:#1f2023; border-width: 2px; border-radius: 60px; border-style: solid;">
                  <div :class="`pa-5 mb-5 d-flex flex-column align-center ${getStyle(evIndex)}`"
                    style="border-radius: 60px;">
                    <h1><strong>{{ event.city }}</strong></h1>
                  </div>
                  <h2 class="text-white">On {{ getFormattedDate(event.date) }}</h2>
                  <h5 class="text-white">at {{ event.place }}</h5>
                  <div class="d-flex flex-column">
                    <v-btn large rounded dark :href="`${event.rsvp}`" target="_blank" style="
                      background: linear-gradient(145.24deg,#076eff 541.5%,#69a3ff 8780.84%);
                      border-radius: 90px;
                      text-transform: capitalize;
                    " class="py-7 px-4 mt-4 google-font"><strong>Register Now</strong>
                    </v-btn>
                    <v-btn dark large rounded outlined :href="`${event.link}`" target="_blank"
                      style="text-transform: capitalize;" class="mt-4 google-font"><strong>Learn
                        More</strong></v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </div>
  
      <div v-if="chunkedPastEvents.length > 0">
        <h3 style="text-align: center; color: #EA4355;">Past Events</h3>
        <v-carousel :show-arrows="true">
          <v-carousel-item v-for="(chunk, index) in chunkedPastEvents" :key="index">
            <v-row align="center" justify="center" class="py-10">
              <v-col cols="12" sm="12" md="4" lg="4" v-for="(event, evIndex) in chunk" :key="evIndex">
                <v-card class="pa-10"
                  style="background: #000; border-color:#1f2023; border-width: 2px; border-radius: 60px; border-style: solid;">
                  <div :class="`pa-5 mb-5 d-flex flex-column align-center ${getStyle(evIndex)}`"
                    style="border-radius: 60px;">
                    <h1><strong>{{ event.city }}</strong></h1>
                  </div>
                  <h2 class="text-white">On {{ getFormattedDate(event.date) }}</h2>
                  <h5 class="text-white">at {{ event.place }}</h5>
                  <div class="d-flex flex-column">
                    <v-btn large rounded dark :href="`${event.rsvp}`" target="_blank" style="
                      background: linear-gradient(145.24deg,#076eff 541.5%,#69a3ff 8780.84%);
                      border-radius: 90px;
                      text-transform: capitalize;
                    " class="py-7 px-4 mt-4 google-font"><strong>Register Now</strong>
                    </v-btn>
                    <v-btn dark large rounded outlined :href="`${event.link}`" target="_blank"
                      style="text-transform: capitalize;" class="mt-4 google-font"><strong>Learn
                        More</strong></v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </div>
  
      <v-row align="center" justify="center" v-if="chunkedUpcomingEvents.length == 0 && chunkedPastEvents.length == 0">
        <v-col cols="12" sm="12" md="6" lg="4">
          <div>
            <img src="../../assets/img/no-data-available.png" alt="no data" style="width:100%" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <style>
  .blue-head {
    background-color: #076EFF33;
    color: #076EFF;
  }
  
  .red-head {
    background-color: #EA435533;
    color: #EA4355;
  }
  
  .green-head {
    background-color: #36A85233;
    color: #36A852;
  }
  
  .yellow-head {
    background-color: #F4B40033;
    color: #F4B400;
  }
  </style>
  
  <script>
  import moment from "moment";
  import CommunityData from "@/assets/data/community.json";

  
  const DATE_FORMAT = "DD/MM/YYYY";
  const DATE_DISPLAY_FORMAT = "D MMM YYYY";
  let CHUNK_SIZE = 2;
  if(window.innerWidth < 998) {
    CHUNK_SIZE = 1;
  }
  
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  
  export default {
    methods: {
      getStyle(indexNumber) {
        const styles = ["blue-head", "green-head", "red-head", "yellow-head"];
        return styles[indexNumber % styles.length];
      },
      getFormattedDate(givenDate) {
        return moment(givenDate, DATE_FORMAT).format(DATE_DISPLAY_FORMAT);
      }
    },
    data: () => ({
      upcomingEvents: CommunityData.filter(event => moment(event.date, DATE_FORMAT).isAfter(moment(), "date")),
      pastEvents: CommunityData.filter(event => moment(event.date, DATE_FORMAT).isBefore(moment(), "date")),
      chunkedUpcomingEvents: chunkArray(
        CommunityData.filter(event => moment(event.date, DATE_FORMAT).isAfter(moment(), "date")),
        CHUNK_SIZE
      ),
      chunkedPastEvents: chunkArray(
        CommunityData.filter(event => moment(event.date, DATE_FORMAT).isBefore(moment(), "date")),
        CHUNK_SIZE
      )
    })
  };
  </script>
