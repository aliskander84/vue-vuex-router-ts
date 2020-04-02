<template>
  <div class="home mx-3">
    <Search class="mt-3"/>
    <Loader v-if="isLoading"/>
    <v-container fluid>
      <v-row>
        <v-col
            class="pa-1"
            :cols="cols"
            :key="index"
            v-for="(user, index) in users"
        >
          <div class="users" v-if="!isLoading">
            <UserCard
                class=""
                :first-name="user.name.first"
                :img="user.picture.large"
                :index="index"
                :last-name="user.name.last"
                :userId="user.id.name"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div
        class="not-results mt-3 mx-3 d-flex justify-center"
        v-if="users.length === 0 && !isLoading"
    >
      No results for query
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {mapGetters, mapActions} from 'vuex'
  import Loader from '@/components/Loader.vue'
  import Search from '@/components/Search.vue'
  import UserCard from '@/components/UserCard.vue'
  import {gridColNumber} from '@/constants/functions'

  export default Vue.extend({
    name: 'Home',
    computed: {
      ...mapGetters(['users', 'isLoading']),
      cols(): number {
        return gridColNumber(this.$vuetify.breakpoint.name)
      }
    },
    methods: mapActions(['fetchUsers']),
    mounted() {
      this.fetchUsers()
    },
    components: {
      Loader,
      Search,
      UserCard
    }
  })
</script>