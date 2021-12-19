<template>
  <nav>
    <v-toolbar flat app color="indigo">
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-app-bar-title shrink-on-scroll class="white--text text-uppercase">
        <span class="font-weight-light">Health</span>
        <span class="font-weight-heavy">Calculator</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <!-- <v-btn flat color="white darken-3">
          <span right>Sign Out</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn> -->
    </v-toolbar>

    <v-navigation-drawer
      flat
      v-model="drawer"
      app
      floating
      width="300"
      absolute
      temporary
      class="indigo"
    >
      <v-card class="mx-auto" width="256" tile> </v-card>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block flat>
            Logout
            <v-icon right>mdi-logout</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
// import Login from "@/components/Login";
export default {
  components: {},
  data() {
    return {
      drawer: false,

      //add webpages to links array
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Account", route: "/account" },
      ],
    };
  },
};
</script>

<style></style>
