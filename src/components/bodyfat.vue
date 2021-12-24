<template>
  <div>
    <v-dialog max-width="400">
      <template v-slot:activator="{ on }">
        <v-btn
          slot="activator"
          outlined
          color="blue lighten-3"
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
          elevation="4"
          dark
          color="#0C6FF9"
          class="mx-auto"
        >
          <v-card-title>
            <span class="font-size-heavy display-1">
              Body Fat Calculator
            </span></v-card-title
          >

          <v-main class="container">
            <div>
              <div>
                <v-radio-group v-model="gender" row>
                  <v-radio
                    clearable
                    filled
                    dense
                    label="Male"
                    class="form-control ml-4 px-2"
                    value="male"
                  />
                  <v-radio
                    clearable
                    filled
                    dense
                    label="Female"
                    class="form-control"
                    value="female"
                  />
                </v-radio-group>

                <v-text-field
                  v-model="age"
                  filled
                  dense
                  clearable
                  label="Age"
                  class="form-control px-2"
                />

                <v-text-field
                  v-model="weight"
                  filled
                  dense
                  clearable
                  label="Weight (kg)"
                  class="form-control px-2"
                />

                <v-text-field
                  v-model="height"
                  clearable
                  filled
                  dense
                  label="Height (cm)"
                  class="form-control px-2"
                />
              </div>
              <div pa-4>
                <v-btn class="info ml-15" @click="calculatebodyfat"
                  ><v-icon left>mdi-calculator</v-icon> Calculate
                </v-btn>

                <v-btn class="info ml-4" @click="save"
                  ><v-icon left>mdi-content-save</v-icon> Save
                </v-btn>
              </div>
            </div>
            <v-banner sticky class="result">
              <span class="font-size-heavy title pa-4">
                Body Fat: {{ bfp }}%</span
              >
            </v-banner>
          </v-main>
        </v-card>
      </v-flex>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weight: "",
      height: "",
      bfp: "",
      age: "",
    };
  },
  methods: {
    calculatebodyfat() {
      let age = parseInt(this.age);
      let weight = parseFloat(this.weight);
      let height = parseFloat(this.height) / 100;
      let gender = this.gender;

      if (gender == "male") {
        let bmi = parseFloat(weight / (height * height)).toFixed(2);
        this.bfp = parseFloat(1.2 * bmi + 0.23 * age - 16.2).toFixed(2);
      } else if (gender == "female") {
        let bmi = parseFloat(weight / (height * height)).toFixed(2);
        this.bfp = parseFloat(1.2 * bmi + 0.23 * age - 5.4).toFixed(2);
      }
    },
  },
};
</script>

<style></style>
