<template>
  <div>
    <v-flex>
      <v-card max-width="400" elevation="4" dark class="indigo mx-auto">
        <v-card-title>
          <span class="font-size-heavy display-1">
            Ideal Weight Calculator
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
                v-model="height"
                clearable
                filled
                dense
                label="Height (cm)"
                class="form-control px-4"
              />
              <!-- <v-text-field
                v-model="Age"
                filled
                dense
                clearable
                label="Age"
                class="form-control pa-4"
              /> -->
            </div>
            <div pa-4>
              <v-btn class="info ml-15" @click="calculateidealw"
                ><v-icon left>mdi-calculator</v-icon> Calculate
              </v-btn>

              <v-btn class="info ml-4" @click="save"
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
      let gender = this.gender;
      let height = parseFloat(this.height);
      //   let age= parseInt(this.age);
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
