<template>
  <div>
    <Navbar />
    <v-flex sm6 xs12 md3>
      <v-avatar size="80px">
        <v-img src="person.avatar"></v-img>
      </v-avatar>
      <h1>Welcome to your Dashboard!</h1>
    </v-flex>
    <v-container>
      <v-layout>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-content>
                <div class="pverline text-left">BMI</div>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="overline ml-2">Your BMI is : {{ bmi }}</div>
              <v-spacer></v-spacer>
              <v-btn outlined color="teal lighten-3" dark v-on="on" small
                >Update</v-btn
              >
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
              <v-btn outlined color="teal lighten-3" dark v-on="on" small
                >Update</v-btn
              >
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
              <v-btn outlined color="teal lighten-3" dark v-on="on" small
                >Update</v-btn
              >
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
              <v-btn outlined color="teal lighten-3" dark v-on="on" small
                >Update</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapGetters } from "vuex";
export default {
  components: {
    Navbar,
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>
