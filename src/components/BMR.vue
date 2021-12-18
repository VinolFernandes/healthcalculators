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

              <v-text-field
                v-model="Age"
                filled
                dense
                clearable
                label="Age"
                class="form-control pa-4"
              />
            <v-radio-group
            v-model="Gender"
            row>
                
              <v-radio
                clearable
                filled
                dense
                label="Male"
                class="form-control ml-4"
                value="Male"
              />
              <v-radio
                clearable
                filled
                dense
                label="Female"
                class="form-control"
                value="Female"
              />
              </v-radio-group>
                
              <v-text-field
                v-model="weight"
                filled
                dense
                clearable
                label="Weight (kg)"
                class="form-control pa-4"
              />

              <v-text-field
                v-model="height"
                clearable
                filled
                dense
                label="Height (cm)"
                class="form-control pa-4"
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
            <span class="font-size-heavy title"> BMR: {{ result }}</span>
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
    // save() {}
    // category(result){
    //   if(result<);    overweight etc
  },
};
</script>

<style></style>
