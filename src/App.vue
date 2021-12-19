<template>
  <v-app class="grey" style="background : #EEEEEE">
    <Navbar />
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  <v-footer
    id="default-footer"
    color="indigo"
    absolute
    padless
  >
    <v-card
      flat
      tile
      class="indigo white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <!-- <v-card-text class="white--text pt-0 ">
       Our website focuses on giving a user friendly experience in helping you find various health calculators according to your needs
      </v-card-text> -->

      
    </v-card>
    <links />
    
  </v-footer>
  </v-app>

</template>
<script>
import Navbar from "@/components/Navbar";
import links from '@/components/links';
// import {auth } from"@/components/firebase";

// console.log(auth);
export default {
  components: { Navbar ,
  links,
  },
  name: "App",
  data() {
    return {};
  },
   metaInfo: {
      title: 'App',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    }
};
</script>
