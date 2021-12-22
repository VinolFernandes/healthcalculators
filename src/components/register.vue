<template>
  <div >
    <v-app
      :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }"
      :dark="darkTheme"
      id="inspire"
    >
      <v-container class="py-15">
        <v-layout wrap>
          <v-flex sm12 md6 offset-md3>
            <v-card elevation="4" dark class="indigo" tag="section">
              <v-card-title>
                <v-layout align-center justify-space-between>
                  <h3 class="headline">
                    {{ platformName }}
                  </h3>
                </v-layout>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-form>
                  <v-text-field
                    outline
                    label="Full name"
                    type="text"
                    v-model="name"
                    filled
                  ></v-text-field>
                   <v-text-field
                    outline
                    label="Email"
                    type="text"
                    v-model="email"
                    filled
                  ></v-text-field>
                  <v-text-field
                    outline
                    hide-details
                    label="Password"
                    type="password"
                    v-model="password"
                    filled
                  ></v-text-field>
                  <v-text-field
                    outline
                    hide-details
                    label="Confirm Password"
                    type="password"
                    v-model="password"
                    filled
                    class="mt-5"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <v-btn >Register</v-btn>
              </v-card-actions>
            </v-card>   
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
// import { auth } from "@/components/firebase";

export default {
  data() {
    return {
    //  auth,
      darkTheme: true,
      platformName: "Register",
      password: "",
      username: "",
      email: "",
    };
  },
};
</script>

<style>
#inspire{
   background-color: indigo;
  background:url('../assets/homebg.png') no-repeat center center;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  background-size: cover;
}
.v-btn,
.v-card {
  border-radius: 10px;
}

.v-card__title {
  text-transform: uppercase;
}
</style>
