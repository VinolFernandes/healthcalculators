<template>
<v-footer
    id="default-footer"
    color="indigo"
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
    <Links />  
  </v-footer>
</template>

<script>
import Links from '@/components/links'

export default ({
   components:{
       Links,
   }
})
</script>

  