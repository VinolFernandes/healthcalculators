<template>
  <nav>
    <v-toolbar flat app color="indigo">
      <v-toolbar-title>
        <span class="font-weight-light">Health</span>
        <span class="font-weight-heavy">Cal</span>
      </v-toolbar-title>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" },
      ],
    };
  },
};
</script>

<style></style>
