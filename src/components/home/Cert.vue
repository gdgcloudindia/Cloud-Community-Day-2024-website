<template>
  <v-container fluid>
    <v-row justify="start" align="center">
      <v-col cols="12">
        <p class="google-font mb-5" style="font-size: 3.5vh;line-height: 1.22;font-weight:500;color:#4285F4">
          Begin your Google Cloud Certification - India journey
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="2">
        <p class="google-font" style="font-size: 3.5vh;line-height: 1.22;font-weight:500">
          <span style="font-size:2.5vh; color: #4285F4;">Google Cloud</span> <span
            style="color: #4285F4;">Certifications</span>
        </p>
        <p>
          Google Cloud certifications validate your expertise and show your
          ability to transform businesses with Google Cloud technology.
        </p>
      </v-col>
      <v-col md="10" class="my-0 py-0 px-0">
        <v-container fluid class="my-0 py-0">
          <v-expansion-panels flat>
            <v-expansion-panel v-for="(item, index) in CertData" :key="index" style="border:1px solid #e0e0e0">
              <v-expansion-panel-header>
                <p class="google-font mb-0" style="font-size: 2.3vh;line-height: 1.22;font-weight:500">
                  {{ item.title }}
                </p>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-container fluid class="py-4 px-md-10" style="background:#F7F9FA">
                  <v-row class="center" align="center">
                    <v-col md="2" sm="3">
                      <v-img :src="require('@/assets/img/cert/' + item.img)" width="40vh"></v-img>
                    </v-col>
                    <v-col md="10" sm="9">
                      <div class="">
                        <p class="google-font" style="font-size:130%">
                          <b>{{ item.title }}</b>
                        </p>
                        <p>{{ item.desc }}</p>

                        <div v-if="item.ability.length > 0">
                          <p class="google-font">
                            The {{ item.title }} exam assesses your ability to:
                          </p>
                          <ul>
                            <li v-for="(itemp, indexp) in item.ability" :key="indexp">
                              {{ itemp.name }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-btn depressed rel="noreferrer" large
        style="text-transform: capitalize;border-radius:5px;border:1px solid #e0e0e0;color:#4285F4;background-color:white"
        href="https://goo.gle/gccj22in" class="google-font mt-8 mr-3 mb-3" target="_blank">Explore Google Cloud Certifications
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    CertData: [
      {
        title: "Associate Cloud Engineer",
        desc:
          "If you support your organization or would like to support in future with enterprise related operations, the Associate Cloud Engineering exam is for you! An Associate Cloud Engineer deploys applications, monitors operations, and manages enterprise solutions. They’re able to use Google Cloud Console and the command-line interface to perform common platform-based tasks to maintain one or more deployed solutions that leverage Google-managed or self-managed services on Google Cloud. In the ACE track, we’d cover use cases generally performed by an ACE and help you understand the answers while we simplify the logic for you! ",
        ability: [
          { name: "Set up a cloud solution environment" },
          { name: "Plan and configure a cloud solution" },
          { name: "Deploy and implement a cloud solution" },
          { name: "Ensure successful operation of a cloud solution" },
          { name: "Configure access and security" },
        ],
        img: "1.png",
      },
      {
        title: "Professional Cloud Architect",
        desc:
          "If you’d to support or support your organization to design, develop and scale highly robust and secure applications, the Professional Cloud Architect exam is for you. A Google Cloud Certified Professional Cloud Architect enables organizations to leverage Google Cloud technologies. Through an understanding of cloud architecture and Google technology, this individual designs, develops, and manages robust, secure, scalable, highly available, and dynamic solutions to drive business objectives. The Cloud Architect should be proficient in all aspects of enterprise cloud strategy, solution design, and architectural best practices",
        ability: [],
        img: "2.png",
      },
      {
        title: "Professional Data Engineer",
        desc:
          "If you support or like to support data driven decision making for your organization, the Professional Data Engineer Exam is for you! A Professional Data Engineer enables data-driven decision making by collecting, transforming, and publishing data. A Data Engineer helps designing, building, operationalizing, securing, and monitoring data processing systems with a particular emphasis on security and compliance; scalability and efficiency; reliability and fidelity; and flexibility and portability.",
        ability: [
          { name: "Design data processing systems" },
          { name: "Build and operationalize data processing systems" },
          { name: "Operationalize machine learning models" },
          { name: "Ensure solution quality" },
        ],
        img: "3.png",
      },
      {
        title: "Professional Machine Learning Engineer",
        desc:
          "If you support or like to support your org with solving data related problems using Machine Learning technologies, the Professional Machine Learning Engineer exam is for you! A Professional Machine Learning Engineer designs, builds, and productionizes ML models to solve business challenges using Google Cloud technologies and knowledge of proven ML models and techniques. The ML Engineer is proficient in all aspects of model architecture, data pipeline interaction, and metrics interpretation and needs familiarity with application development, infrastructure management, data engineering, and security.",
        ability: [
          { name: "Frame ML problems" },
          { name: "Architect ML solutions" },
          { name: "Prepare and process data" },
          { name: "Develop ML models" },
          { name: "Automate & orchestrate ML pipelines" },
          { name: "Monitor, optimize, and maintain ML solutions" },
        ],
        img: "4.png",
      },
    ],
  }),
};
</script>
