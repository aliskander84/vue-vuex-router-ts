<template>
  <v-app-bar
      app
      color="deep-purple accent-4"
      dark
  >
    <v-btn
        class="mr-n8"
        icon
        v-if="isBackBtn"
    >
      <router-link
          :to="{name: 'home'}"
          style="text-decoration: none; color: inherit"
      >
        <v-icon>{{icon}}</v-icon>
      </router-link>
    </v-btn>

    <v-toolbar-title class="ml-3 headline">{{title}}</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Header',
    computed: {
      title() {
        switch (this.$route.name) {
          case 'home':
            return 'Random users'
          case 'user':
            return 'User details'
          default:
            return 'Untitled'
        }
      },
      icon() {
        switch (this.$route.name) {
          case 'home':
            return 'mdi-refresh'
          case 'user':
            return 'mdi-arrow-left'
          default:
            return 'Untitled'
        }
      },
      isBackBtn() {
        switch (this.$route.name) {
          case 'home':
            return false
          case 'user':
            return true
          default:
            return false
        }
      }
    }
  })
</script>