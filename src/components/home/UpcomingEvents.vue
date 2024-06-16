<template>
    <v-container id="upcoming-events" fluid class="google-font text-white">
        <div class="">
            <h2 style="
            font-size: 36px;
            font-weight: 600;
            line-height: 40px;
            text-align: center;
          ">
                Find Latest upcoming events
            </h2>
        </div>
        <v-carousel :show-arrows="false">
            <v-carousel-item>
                <v-row align="center" justify="center" class="py-10" v-if="chapters.length > 0">
                    <template v-for="(eventData) in chapters">
                        <v-col cols="12" sm="12" md="6" lg="4" v-for="(communityData, evIndex) in eventData"
                            :key="evIndex">
                            <v-card class="pa-10"
                                style="background: #000; border-color:#1f2023; border-width: 2px; border-radius: 60px; border-style: solid;">
                                <div :class="`pa-5 mb-5 d-flex flex-column align-center ${getStyle(evIndex)}`"
                                    style="border-radius: 60px;">
                                    <h1><strong>{{ communityData.city }}</strong></h1>
                                </div>

                                <h2 class="text-white">On {{ getformatedDate(communityData.date) }}</h2>
                                <h5 class="text-white">at {{ communityData.place }}</h5>
                                <div class="d-flex flex-column">
                                    <v-btn large rounded dark :href="`${communityData.rsvp}`" target="_blank" style="
                      background: linear-gradient(145.24deg,#076eff 541.5%,#69a3ff 8780.84%);
                      border-radius: 90px;
                      text-transform: capitalize;
                    " class="py-7 px-4 mt-4 google-font"><strong>Register Now</strong>
                                    </v-btn>
                                    <v-btn dark large rounded outlined :href="`${communityData.link}`" target="_blank"
                                        style="text-transform: capitalize;" class="mt-4 google-font"><strong>Learn
                                            More</strong></v-btn>
                                </div>
                            </v-card>
                        </v-col>
                    </template>
                </v-row>
            </v-carousel-item>
        </v-carousel>
        <v-row align="center" justify="center" v-if="chapters.length == 0">
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

import CommunityData from "@/assets/data/community.json";
import moment from "moment";

const CHUNK_SIZE = 3;
const DATE_FORMAT = "DD/MM/YYYY";
const DATE_DISPLAY_FORMAT = "D MMM YYYY"

const chunkArray = (givenArray) => {
    let finalArray = []
    for (let i = 0; i < givenArray.length; i += CHUNK_SIZE) {
        const chunk = givenArray.slice(i, i + CHUNK_SIZE);
        finalArray.push(chunk)
    }
    return finalArray;
}
export default {
    methods: {
        getStyle(indexNumber) {
            switch (indexNumber % CHUNK_SIZE) {
                default:
                    return "blue-head";
                case 1:
                    return "green-head";
                case 2:
                    return "red-head"
                case 3:
                    return "yellow-head"
            }
        },
        getformatedDate(givenDate) {
            return moment(givenDate, DATE_FORMAT).format(DATE_DISPLAY_FORMAT)
        }
    },
    data: () => ({
        chapters: chunkArray(CommunityData.filter(x => moment(x.date, DATE_FORMAT).isValid() && moment(x.date, DATE_FORMAT).isAfter(moment(), "date")).sort((a, b) => {
            let dateA = moment(a.date, DATE_FORMAT);
            let dateB = moment(b.date, DATE_FORMAT);
            if (dateA.isSame(dateB, "date")) {
                return 0;
            }
            return dateA.isBefore(dateB, "date") ? -1 : 1;
        })),
        certs: [
            {
                "type": "Associate",
                "title": "Cloud Engineer",
                "img": "ace.png"
            },
            {
                "type": "Professional",
                "title": "Data Engineer",
                "img": "pde.png"
            },
            {
                "type": "Professional",
                "title": "Machine Learning Engineer",
                "img": "pme.png"
            },
            {
                "type": "Professional",
                "title": "Cloud Architect",
                "img": "pca.png"
            },
            {
                "type": "Professional",
                "title": "Cloud Developer",
                "img": "pcd.png"
            },
            {
                "type": "Professional",
                "title": "Cloud DevOps Engineer",
                "img": "pcdo.png"
            }
        ]
    })
}
</script>
