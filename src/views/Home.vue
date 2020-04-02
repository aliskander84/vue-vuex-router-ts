<template>
  <div class="home mx-3">
    <Search class="mt-3"/>
    <Loader v-if="isLoading"/>
    <div class="users" v-if="!isLoading">
      <UserCard
          :class="`mt-3 ${index === users.length - 1 ? 'mb-3' : ''}`"
          :first-name="user.name.first"
          :img="user.picture.large"
          :index="index"
          :key="index"
          :last-name="user.name.last"
          :userId="user.id.name"
          v-for="(user, index) in users"
      />
    </div>
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

  export default Vue.extend({
    name: 'Home',
    computed: mapGetters(['users', 'isLoading']),
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