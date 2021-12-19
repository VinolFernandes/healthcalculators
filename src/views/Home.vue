<template>
  <div class="home">
    <h1 class="subheading grey--text">Calculators</h1>
    <v-container class="my-6" id="dashboard-view" tag="section">
      <DashboardHome />
    </v-container>
  </div>
</template>

<script>
import DashboardHome from "@/components/DashboardHome";
export default {
  name: "Home",

  components: { DashboardHome },
};
</script>
