<template>
  <div id="app" >
    <v-app>
      <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 sm12>
            <v-layout row wrap pa-10>
              <v-flex ma-5 pa-3 xs12 sm6 md5>
                <v-card elevation="0">
                  <!-- <v-card-text>BMI Calculator</v-card-text> -->
                  <BMI />
                </v-card>
              </v-flex>

              <v-flex ma-5 pa-3 xs12 sm6 md5>
                <v-card elevation="0">
                  <!-- <v-card-text>Ideal Weight Calculator</v-card-text> -->
                  <idealw />
                </v-card>
              </v-flex>

              <v-flex ma-5 pa-3 xs12 sm6 md5>
                <v-card elevation="0">
                  <!-- <v-card-text>BMR Calculator</v-card-text> -->
                  <BMR />
                </v-card>
              </v-flex>

              <v-flex ma-5 pa-3 xs12 sm6 md5>
                <v-card elevation="0">
                  <!-- <v-card-text>Body FatCalculator</v-card-text> -->
                  <bodyfat />
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>
<script>
import BMI from "@/components/BMI";
import BMR from "@/components/BMR";
import bodyfat from "@/components/bodyfat";
import idealw from "@/components/idealw";

export default {
  name: "DashboardHome",
  components: { BMI, BMR, bodyfat, idealw },
  calculatorcards: [
    { text: "BMI Calculator", component: BMI },
    { text: "Ideal Weight Calculator", component: idealw },
    { text: "BMR Calculator", component: BMR },
    { text: "Body Fat Calculator", component: bodyfat },
  ],
};
</script>

<style></style>
