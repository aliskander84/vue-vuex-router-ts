<template>
  <v-form class="">
    <v-text-field
        :value="searchText"
        @input="search"
        autocomplete="off"
        hint="Type search text here"
        outlined
        placeholder="Search..."
        clearable
    />
  </v-form>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {mapActions, mapGetters} from 'vuex'

  export default Vue.extend({
    name: 'Search',
    computed: mapGetters(['searchText']),
    methods: mapActions(['search', 'clearSearch'])
  })
</script>