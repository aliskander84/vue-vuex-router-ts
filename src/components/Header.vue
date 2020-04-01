<template>
  <v-app-bar
      app
      color="deep-purple accent-4"
      dark
  >
    <v-icon>mdi-account-group</v-icon>
    <v-toolbar-title class="ml-3 headline">Random users</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Header'
  })
</script>