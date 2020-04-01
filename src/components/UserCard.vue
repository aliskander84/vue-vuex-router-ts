<template>
  <v-card>
    <!--suppress HtmlUnknownTarget -->
    <v-img
        :src="img"
        :alt="`${firstName} ${lastName}`"
    />
    <v-card-title>
      {{this.firstName}} {{this.lastName}}
    </v-card-title>
    <v-card-subtitle>
      ID: {{this.id}}
    </v-card-subtitle>
    <v-card-text>
      {{this.img}}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'UserCard',
    props: {
      id: String,
      img: String,
      firstName: String,
      lastName: String
    }
  })
</script>