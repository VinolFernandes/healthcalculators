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
        max-width="400"
        elevation="4"
        dark
        color="#0C6FF9"
        class="mx-auto"
      >
        <v-card-title>
          <span class="font-size-heavy" style="font-size:25px">
            Ideal Weight Calculator
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
                  class="ml-4 px-2"
                  value="male"
                />
                <v-radio
                  clearable
                  filled
                  dense
                  label="Female"
                  
                  value="female"
                />
              </v-radio-group>
              <v-text-field
                v-model="height"
                clearable
                filled
                dense
                label="Height (cm)"
                class="px-4"
              />
            </div>
            <div pa-4>
              <v-btn class="ml-15" light @click="calculateidealw"
                ><v-icon left>mdi-calculator</v-icon> Calculate
              </v-btn>

              <v-btn class="ml-4" light @click="save"
                ><v-icon left>mdi-content-save</v-icon> Save
              </v-btn>
            </div>
          </div>
          <v-banner sticky class="result">
            <span class="font-size-heavy title"
              >Ideal Weight: {{ result }} kg</span
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
      //   age: "",
      height: "",
      gender: "",
      result: "",
    };
  },
  // CALCULATEIDEALW DOES NOT WORK, PLEASE FIX
  methods: {
    calculateidealw() {
      let height = parseFloat(this.height);
      //   let age= parseInt(this.age);
      let gender = this.gender;
      if (gender == "male") {
        this.result = parseFloat(
          52 + 1.9 * ((height - 152.4) * 0.393701)
        ).toFixed(2);
      } else if (gender == "female") {
        this.result = parseFloat(
          49 + 1.7 * ((height - 152.4) * 0.393701)
        ).toFixed(2);
      }
    },
    // save() {}
    // category(result){
    //   if(result<);    overweight etc
  },
};
</script>

<style></style>
