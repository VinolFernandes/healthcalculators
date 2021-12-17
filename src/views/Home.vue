<template>
  <div class="home">
    <h1 class="subheading grey--text">Calculators</h1>
    <v-container class="my-6" id="dashboard-view" tag="section">
      <Login />
    </v-container>
  </div>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
import Login from "../components/Login";
export default {
  name: "Home",

  components: { Login },
};
</script>
