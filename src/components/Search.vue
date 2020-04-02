<template>
  <v-form
      class=""
      ref="searchForm"
  >
    <v-text-field
        :counter="count"
        :error-messages="isValid ? null : `No more than ${count} symbols, please!`"
        :value="searchText"
        @input="search"
        autocomplete="off"
        clearable
        :hint="`Type search text here (no more than ${count} symbols)`"
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
      searchForm(): Vue & { resetValidation: () => boolean } {
        return this.$refs.searchForm as Vue & { resetValidation: () => boolean }
      },
      isValid(): boolean {
        return this.value.length <= this.count
      }
    },
    methods: mapActions(['search', 'clearSearch']),
  })
</script>