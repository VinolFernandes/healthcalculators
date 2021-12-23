<template>
  <v-app id="dashboardbg">
    <Navbar />
    <v-flex class="align-center">
      <v-avatar size="80px">
        <v-img src="person.avatar"></v-img>
      </v-avatar>
      <span> <h1 class="pa-5" id="weldas">Welcome to your Dashboard!</h1></span>
    </v-flex>
    <v-container>
      <v-layout row wrap col>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-content>
                <div class="verline text-left">BMI</div>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="overline ml-2">Your BMI is : {{ bmi }}</div>
              <v-spacer></v-spacer>

              <v-flex class="align-center"><BMI /></v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-content>
                <div class="pverline text-left">BMR</div>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="overline ml-2">Your BMR is : {{ bmi }} calorie</div>
              <v-spacer></v-spacer>
              <v-flex class="align-center"><BMR /></v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-content>
                <div class="pverline text-left">Ideal Weight:</div>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="overline ml-2">
                Your Ideal Weight is : {{ bmi }} KG
              </div>
              <v-spacer></v-spacer>
              <v-flex class="align-center"><Calculator /></v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-content>
                <div class="pverline text-left">Body Fat</div>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="overline ml-2">Your Body fat is : {{ bmi }}%</div>
              <v-spacer></v-spacer>
              <v-flex class="align-center"><bodyfat /></v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapGetters } from "vuex";

import BMI from "@/components/BMI";
import BMR from "@/components/BMR";
import Calculator from "@/components/Calculator";
import bodyfat from "@/components/bodyfat";

export default {
  components: {
    Navbar,
    BMI,
    BMR,
    bodyfat,
    Calculator,
  },
  methods: {
    showBMI() {},
  },

  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>
<style scoped>
#weldas {
  margin-left: 500px;
}
#dashboardbg {
  background-color: indigo;
  background: url("../assets/7.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
  background-position: 50% 50%;
}
</style>
