<template>
  <v-app>
    <Navbar/>
    <v-content class="ma-4">
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar' 
import Footer from '@/components/footer'
// import firebas from "@/components/firebase.js";
// import {auth } from"@/components/firebase";

// console.log(auth);
export default {
  components: {Navbar,
 Footer
},
  name: "App",
  data() {
    return {};
  },
   metaInfo: {
      title: 'HealthCalculators',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    }
};
</script>
