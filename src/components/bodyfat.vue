<template>
  <div>
    <v-flex>
      <v-card max-width="400" elevation="4" dark class="indigo mx-auto">
        <v-card-title>
          <span class="font-size-heavy display-1">
            Body Fat Calculator
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
            <v-radio-group
            v-model="gender"
            row>
                
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
              <!-- <v-text-field
                v-model="height"
                clearable
                filled
                dense
                label="Height (cm)"
                class="form-control px-2"
              />
              <v-text-field
                v-model="neck"
                clearable
                filled
                dense
                label="Neck (cm)"
                class="form-control px-2"
              />
              <v-text-field
                v-model="waist"
                clearable
                filled
                dense
                label="Waist(cm)"
                class="form-control px-2"
              /> -->
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
            <span class="font-size-heavy title pa-4"> Body Fat: {{ bfp }}%</span>
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
      bfp: "",
      age: "",
    //   neck:"",
    //   waist:""
    };
  },
  methods: {
    calculatebodyfat() {
        // let gender= this.gender;
    //   let weight = parseFloat(this.weight);
    //   let height = parseFloat(this.height) / 100;
    //   let neck= parseFloat(this.neck);
    //   let waist = parseFloat(this.waist);
      let age = parseInt(this.age);
    //   if(gender='male')
    //   this.result = parseFloat((495)/(1.0324-0.19077*Math.log10(waist-neck)+0.15456*Math.log10(height))).toFixed(2);
    //   else{
    //           this.result = parseFloat((495)/(1.0324-0.19077*Math.log10(waist-neck)+0.15456*Math.log10(height))).toFixed(2);
    //   }

    let weight = parseFloat(this.weight);
      let height = parseFloat(this.height) / 100;
      let bmi = parseFloat(weight / (height * height)).toFixed(2);
      this.bfp=parseFloat(1.2*bmi+0.23*age-16.2).toFixed(2);
    },
    // save() {}
    // category(result){
    //   if(result<);    overweight etc
  },
};
</script>

<style></style>
