<template>
  <div class="home">
    <v-container  id="dashboard-view" tag="section">
      <DashboardHome />
      <DefaultFooter />
      <!-- <Login /> -->
    </v-container>
  </div>
</template>

<script>
// import Login from "@/components/Login";
import DashboardHome from "@/components/DashboardHome";
// import Footer from '../components/footer.vue';
export default {
  name: "Home",

  components: { DashboardHome,
  // Login,
   },
};
</script>
