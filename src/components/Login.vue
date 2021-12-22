<template>
  <div>
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
                <p>Sign in with your username and password:</p>
                <v-form>
                  <v-text-field
                    outline
                    label="Username"
                    type="text"
                    v-model="username"
                  ></v-text-field>
                  <v-text-field
                    outline
                    hide-details
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <v-btn color="indigo" flat> Forgot password? </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  color="indigo"
                  dark
                  flat
                  :medium="$vuetify.breakpoint.smAndUp"
                  @submit="auth.signInAnonymously()"
                >
                  Sign in Anonymously<v-icon right>mdi-login</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-divider></v-divider>
            <v-container text-center>
              <v-btn class="indigo" dark text-center @on-click="signGoogle()"
                ><v-icon dense left color="white">mdi-google</v-icon> Sign in
                with Google</v-btn
              >
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
// import { auth } from "@/components/firebase";
// import firebase from "firebase";
// let provider = new firebase.auth.GoogleAuthProvider();
// firebase
//   .auth()
//   .signInWithPopup(provider)
//   .then((result) => {
//     let token = result.credential.accessToken;
//     let user = result.user;
//     console.log(token); // Token
//     console.log(user); // User that was authenticated
//   })
//   .catch((err) => {
//     console.log(err); // This will give you all the information needed to further debug any errors
//   });
export default {
  data() {
    return {
      //  auth,
      darkTheme: true,
      platformName: "Login",
      password: "",
      username: "",
    };
  },
};
</script>

<style>
#inspire {
  background-color: indigo;
  background: url("../assets/homebg.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
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
