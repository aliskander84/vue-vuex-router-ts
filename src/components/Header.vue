<template>
  <v-app-bar
      app
      color="deep-purple accent-4"
      dark
  >
    <v-icon
        v-if="!isIconBtn"
    >{{icon}}
    </v-icon>
    <v-btn
        class="mr-n8"
        icon
        v-if="isIconBtn"
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
            // console.log(this.$route.name)
            return 'Untitled'
        }
      },
      icon() {
        switch (this.$route.name) {
          case 'home':
            return 'mdi-account-group'
          case 'user':
            return 'mdi-arrow-left'
          default:
            // console.log(this.$route.name)
            return 'Untitled'
        }
      },
      isIconBtn() {
        switch (this.$route.name) {
          case 'home':
            return false
          case 'user':
            return true
          default:
            // console.log(this.$route.name)
            return false
        }
      }
    },
    mounted(): void {
      // console.log(this.$route.name)
    }
  })
</script>