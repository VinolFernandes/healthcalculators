<template>
  <div>
    <v-dialog max-width="400">
      <template v-slot:activator="{ on }">
        <v-btn
          slot="activator"
          outlined
          color="teal lighten-3"
          dark
          v-on="on"
          small
          >Update</v-btn
        >
      </template>

      <v-flex>
        <v-card
          height="100%"
          max-width="400"
          elevation="6"
          dark
          class="indigo mx-auto"
        >
          <v-card-title>
            <span class="font-size-heavy display-1">
              BMI Calculator
            </span></v-card-title
          >

          <v-main class="container">
            <div>
              <div>
                <v-text-field
                  v-model="weight"
                  filled
                  dense
                  light
                  clearable
                  label="Weight (kg)"
                  class="px-5 form-control"
                />

                <v-text-field
                  v-model="height"
                  clearable
                  filled
                  light
                  dense
                  label="Height (cm)"
                  class="px-5 form-control"
                />
              </div>
              <div pa-4>
                <v-btn class="info ml-15" @click="calculatebmi"
                  ><v-icon left>mdi-calculator</v-icon> Calculate
                </v-btn>

                <v-btn class="info ml-4" @click="save"
                  ><v-icon left>mdi-content-save</v-icon> Save
                </v-btn>
              </div>
            </div>
            <v-banner sticky class="result">
              <span class="font-size-heavy title">BMI: {{ result }}</span>
            </v-banner>
          </v-main>
        </v-card>
      </v-flex>
    </v-dialog>
  </div>
</template>

<script>
// import { db } from "../main";
// import { fn } from "../main";

export default {
  data() {
    return {
      weight: "",
      height: "",
      result: "",
    };
  },
  methods: {
    calculatebmi() {
      let weight = parseFloat(this.weight);
      let height = parseFloat(this.height) / 100;
      this.result = parseFloat(weight / (height * height)).toFixed(2);
    },
  },
};
</script>

<style></style>
