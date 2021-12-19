<template>
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
</template>

<script>
  // Components
  import links from '@/components/links'

  export default {
    name: 'DefaultFooter',

    components: {
      links
      },
  }
</script>

