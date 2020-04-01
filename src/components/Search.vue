<template>
  <v-form class="mx-3 mt-3">
    <v-text-field
      v-model="searchText"
      outlined
      placeholder="Search..."
      :label="searchText ? 'Search' : null"
      :onchange="search(searchText)"
      onblur="console.log('blur')"
    />
  </v-form>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {mapActions} from 'vuex'

  export default Vue.extend({
    name: 'Search',
    data() {
      return {
        searchText: ''
      }
    },
    methods: mapActions(['search'])
  })
</script>