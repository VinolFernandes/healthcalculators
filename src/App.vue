<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
// import {auth } from"@/components/firebase";

// console.log(auth);
export default {
  components: { Navbar },
  name: "App",
  data() {
    return {};
  },
};
</script>
