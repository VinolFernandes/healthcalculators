<template>
  <div class="account">
    <div class="fluid m-0 p-0">
      <Navbar />
      <h1 class="subheading grey--text">Account</h1>
    </div>

    <v-container class="my-6" id="dashboard-view" tag="section"> </v-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>
