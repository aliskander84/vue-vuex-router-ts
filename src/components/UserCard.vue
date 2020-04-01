<template>
  <v-card class="mx-3">
    <v-img
        :src="pic"
        width="200px"
    />
    <v-card-title>
      Title
    </v-card-title>
    <v-card-subtitle>
      Subtitle
    </v-card-subtitle>
    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate deserunt dolor eligendi eveniet excepturi
      maxime quibusdam quisquam sapiente tempora voluptate.
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'UserCard',
    props: {
      id: String,
      pic: String,
      firstName: String,
      lastName: String
    }
  })
</script>