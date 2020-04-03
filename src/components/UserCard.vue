<template>
  <v-hover
      v-slot:default="{ hover }"
  >
    <v-card
        :elevation="hover ? 9 : 3"
        class="d-flex align-center"
        height="90px"
    >
      <v-avatar class="ml-3" left style="border-radius: 50%">
        <!--suppress HtmlUnknownTarget -->
        <v-img
            :alt="`${firstName} ${lastName}`"
            :src="img"
        />
      </v-avatar>
      <div class="flex-grow-1">
        <v-card-title class="pt-2">
          {{firstName}} {{lastName}}
        </v-card-title>
        <v-card-subtitle class="pb-2 d-flex justify-space-between align-center">
          <span>ID: {{userId ? userId : '---'}}</span>
          <v-btn
              small
              text
          >
            <router-link
                :to="{name: 'user', params: {id: index.toString()}}"
                style="text-decoration: none"
            >
              Details >
            </router-link>
          </v-btn>
        </v-card-subtitle>
      </div>
    </v-card>
  </v-hover>
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