<template>
  <v-container fluid>
    <v-row>
      <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
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

  export default Vue.extend({
    name: 'Loader',
    computed: mapGetters(['countUsers'])
  })
</script>