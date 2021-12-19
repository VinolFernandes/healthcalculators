<template>
  <div>
    <v-flex>
      <v-card max-width="400" elevation="4" dark class="indigo mx-auto">
        <v-card-title>
          <span class="font-size-heavy display-1">
            BMR Calculator
          </span></v-card-title
        >

        <v-main class="container">
          <div>
            <div>
              <!-- <v-label
              dark
              v-model="weight"
              class="col-xs-4 control-label font-weight-heavy"
              >Weight <em>(in kg)</em></v-label
            > -->

              <v-radio-group v-model="Gender" row>
                <v-radio
                  clearable
                  filled
                  dense
                  label="Male"
                  class="form-control ml-4"
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
                v-model="Age"
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
              <v-btn class="info ml-15" @click="calculatebmr"
                ><v-icon left>mdi-calculator</v-icon> Calculate
              </v-btn>

              <v-btn class="info ml-4" @click="save"
                ><v-icon left>mdi-content-save</v-icon> Save
              </v-btn>
            </div>
          </div>
          <v-banner sticky class="result">
            <span class="font-size-heavy title">
              Basal Metabloic Rate: calories</span
            >
            <p>{{ bmr }}</p>
          </v-banner>
        </v-main>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: "",
      age: "",

      weight: "",
      height: "",
      bmr: "",
    };
  },

  // CALCULATEBMR NOT WORKING PLEASE FIX
  methods: {
    calculatebmr() {
      let gender = this.gender;

      let height = parseFloat(this.height);
      let weight = parseFloat(this.weight);
      let age = parseInt(this.age);
      if (gender == "male") {
        this.bmr = parseFloat(
          10 * weight + 6.25 * height - 5 * age + 5
        ).toFixed(2);
      } else if (gender == "female") {
        this.bmr = parseFloat(
          10 * weight + 6.25 * height - 5 * age - 161
        ).toFixed(2);
      }
    },
  },
};
</script>

<style></style>
