<template>

  <div class="loader">
    <v-skeleton-loader
        class="mt-3"
        type="card"
        height="90"
        v-for="l in countUsers"
        :key="l"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  import {gridColNumber} from '@/constants/functions'

  export default Vue.extend({
    name: 'Loader',
    computed: {
      ...mapGetters(['countUsers']),
      cols(): number {
        return gridColNumber(this.$vuetify.breakpoint.name)
      }
    }
  })
</script>