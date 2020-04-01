<template>
  <v-card class="d-flex align-center" style="cursor: pointer">
    <v-avatar class="ml-3" left style="border-radius: 50%">
      <!--suppress HtmlUnknownTarget -->
      <v-img
          :alt="`${firstName} ${lastName}`"
          :src="img"
      />
    </v-avatar>

    <div class="">
      <v-card-title class="pt-2">
        <router-link to="/">
          {{this.firstName}} {{this.lastName}}
        </router-link>
      </v-card-title>

      <v-card-subtitle class="pb-2">
        ID: {{this.id ? this.id : '---'}}
      </v-card-subtitle>
    </div>
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