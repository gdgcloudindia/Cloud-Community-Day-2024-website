<template>
    <v-container id="upcoming-events" fluid class="ma-0 google-font text-white">
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
        <v-row align="center" justify="center" class="py-10"  v-if="chapters.length > 0">
            <v-col cols="12" sm="12" md="6" lg="4" v-for="(eventData, index) in chapters" :key="index">
                <v-card class="pa-10" style="background: #1f2023; border-radius: 60px">
                    <div :class="`pa-5 mb-5 d-flex flex-column align-center ${getStyle(index)}`"
                        style="border-radius: 60px;">
                        <h1><strong>{{ eventData.city }}</strong></h1>
                    </div>

                    <h2 class="text-white">On {{ eventData.date }}</h2>
                    <h5 class="text-white">at {{ eventData.place }}</h5>    
                    <div class="d-flex flex-column">   
                        <v-btn large rounded dark :href="`${eventData.rsvp}`" target="_blank" style="
                  background: linear-gradient(145.24deg,#076eff 541.5%,#69a3ff 8780.84%);
                  border-radius: 90px;
                  text-transform: capitalize;
                " class="py-7 px-4 mt-4 google-font"><strong>Register Now</strong>
                        </v-btn>
                        <v-btn dark large rounded outlined :href="`${eventData.link}`" target="_blank"
                            style="text-transform: capitalize;" class="mt-4 google-font"><strong>Learn
                                More</strong></v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>
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
</style>


<script>

import CommunityData from "@/assets/data/community.json";
import moment from "moment";
export default {
    methods: {
        getStyle(indexNumber) {
            switch (indexNumber % 3) {
                default:
                    return "blue-head";
                case 1:
                    return "green-head";
                case 2:
                    return "red-head"
            }
        }
    },
    data: () => ({
        chapters: CommunityData.sort((a, b) => {
            let dateA = moment(a.date);
            let dateB = moment(b.date);
            if (dateA.isSame(dateB, "date")) {
                return 0;
            }
            return dateA.isBefore(dateB, "date") ? 1 : -1;
        }).slice(0, 3),
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
