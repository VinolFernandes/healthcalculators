<template>
  <v-container>
    <v-row align="center">
      <v-card-text class="white--text pt-0 text-center py-5">
       Our website focuses on giving a user friendly experience in helping you find various health calculators according to your needs
      </v-card-text>
      <v-divider></v-divider>
      <v-col
        v-for="(link, i) in links"
        :key="i"
        class="text-center white--text"
        cols="6"
        md="auto"
      >
        <a
          :href="link.href"
          class="text-decoration-none text-uppercase text-caption font-weight-regular"
          rel="noopener"
          target="_blank"
          v-text="link.text"
        />
      </v-col>

      <v-spacer class="hidden-sm-and-down" />

      <v-col
        cols="12"
        md="auto"
      >
        <div class="text-body-1 font-weight-light pt-6 pt-md-0 text-center white--text">
          &copy; {{ (new Date()).getFullYear() }}, Made by 
          <a
            href="https://github.com/saeyesss/healthcalculators"
            class="text-decoration-none white--text"
          >SVR</a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'links',

    data: () => ({
      links: [
        {
          href: 'https://www.linkedin.com/in/vinol-fernandes/',
          text: 'Vinol Fernandes',
        },
        {
          href: 'https://www.linkedin.com/in/shreyas-n-1568b2228/',
          text: 'Shreyas N',
        },
        {
          href: 'https://www.linkedin.com/in/ranjan-ranjan-19a3bb1ab/',
          text: 'Ranjan',
        },
      ],
    }),
  }
</script>

 <style lang="sass" scoped>
    a
     color: inherit !important
 </style>
