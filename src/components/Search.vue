<template>
  <v-form
      @submit.prevent=""
  >
    <v-text-field
        :counter="count"
        :error-messages="isValid ? null : `No more than ${count} symbols, please!`"
        :hint="`Type search text here (no more than ${count} symbols)`"
        :value="searchText"
        @input="search"
        autocomplete="off"
        background-color="white"
        clearable
        outlined
        placeholder="Search..."
        v-model="value"
    />
  </v-form>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {mapActions, mapGetters} from 'vuex'

  export default Vue.extend({
    name: 'Search',
    data() {
      return {
        value: '',
        count: 9
      }
    },
    computed: {
      ...mapGetters(['searchText']),
      isValid(): boolean {
        return this.value.length <= this.count
      }
    },
    methods: mapActions(['search', 'clearSearch'])
  })
</script>