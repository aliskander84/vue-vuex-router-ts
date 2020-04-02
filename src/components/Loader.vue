<template>
  <v-container fluid>
    <v-row>
      <v-col
          :cols="cols"
          :key="l"
          class="pa-1"
          v-for="l in countUsers"
      >
        <v-skeleton-loader
            class=""
            height="90"
            type="card"
        />
      </v-col>
    </v-row>
  </v-container>
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