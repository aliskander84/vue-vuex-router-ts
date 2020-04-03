<template>
  <div class="home mx-3">
    <Search class="mt-3"/>
    <Loader v-if="isLoading"/>
    <v-container fluid>
      <v-row>
        <v-col
            :key="index"
            class="pa-1"
            cols="12"
            lg="3"
            md="4"
            sm="6"
            v-for="(user, index) in users"
            xl="2"
        >
          <div class="users" v-if="!isLoading">
            <UserCard
                :first-name="user.name.first"
                :img="user.picture.thumbnail"
                :index="index"
                :last-name="user.name.last"
                :userId="user.id.name"
                class=""
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div
        class="not-results mt-3 mx-3 d-flex justify-center"
        v-if="users.length === 0 && !isLoading"
    >
      <v-card-title>
        No results for query
      </v-card-title>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {mapGetters, mapActions} from 'vuex'
  import Loader from '@/components/Loader.vue'
  import Search from '@/components/Search.vue'
  import UserCard from '@/components/UserCard.vue'

  export default Vue.extend({
    name: 'Home',
    computed: mapGetters(['users', 'isLoading']),
    methods: mapActions(['fetchUsers']),
    mounted() {
      // debugger
      if (this.users.length === 0) this.fetchUsers()
    },
    components: {
      Loader,
      Search,
      UserCard
    }
  })
</script>