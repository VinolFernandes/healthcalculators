<template>
  <div id="app" >
    <v-app>
      <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 sm12>
            <v-layout row wrap pa-10>
              <v-flex ma-5 pa-3 xs12 sm6 md5>
                <v-card elevation="0">
                  <BMI />
                </v-card>
              </v-flex>

              <v-flex ma-5 pa-3 xs12 sm6 md5>
                <v-card elevation="0">
                  <idealw />
                </v-card>
              </v-flex>

              <!-- <v-flex ma-5 pa-5 xs10 sm6 md4>

                <v-card elevation="0">
                  <BMR />
                </v-card>
              </v-flex> -->

              <v-flex ma-5 pa-3 xs12 sm6 md5>
                <v-card elevation="0">
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
// import BMR from "@/components/BMR";
import bodyfat from "@/components/bodyfat";
import idealw from "@/components/idealw";

export default {
  name: "DashboardHome",
  components: { BMI, bodyfat, idealw },
};
</script>

<style></style>
