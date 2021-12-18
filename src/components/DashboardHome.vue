<template>
  <div id="app">
    <v-app id="inspire">
      <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 sm12>
            <v-card class="darken-3">
              <v-layout row wrap pa-3>
                <v-flex xs10 sm6 md4 v-for="i in 6" :key="`4${i}`">
                  <v-card hover>
                    <div class="">
                      <label for="check"></label>
                    </div>
                    <v-card-text></v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm6 md3 v-for="i in 4" :key="`4${i}`"> </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>
<script>
export default {};
</script>

<style></style>
