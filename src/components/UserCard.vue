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
        <router-link :to="{name: 'User', params: {id: index.toString()}}">
          {{firstName}} {{lastName}}
        </router-link>
      </v-card-title>

      <v-card-subtitle class="pb-2">
        ID: {{userId ? userId : '---'}}
      </v-card-subtitle>
    </div>
  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'UserCard',
    props: {
      index: Number,
      userId: String,
      img: String,
      firstName: String,
      lastName: String
    }
  })
</script>