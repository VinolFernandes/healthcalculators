<template>
  <div class="home">
    <h1 class="subheading grey--text">Calculators</h1>
    <v-container class="my-6" id="dashboard-view" tag="section">
      <v-card><Login /></v-card>
      <!-- <BMI /> -->
      <BMR />
      <!-- <bodyfat/> -->
      <!-- <idealw/> -->
    </v-container>
  </div>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
// import Login from "../components/Login";
// import BMI from "../components/BMI";
import BMR from"../components/BMR";
// import bodyfat from "@/components/bodyfat";
// import idealw from "@/components/idealw";

export default {
  name: "Home",

  components: { BMR},
};
</script>
