<template>
  <v-app>
    <Header/>
    <v-content
        class=".d-none-xs grey lighten-5"
    >
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Header from '@/components/Header.vue'

  export default Vue.extend({
    name: 'App',
    components: {
      Header
    }
  })
</script>
