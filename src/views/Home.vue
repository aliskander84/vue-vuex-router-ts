<template>
  <div class="home">
    <Search/>
    <Loader v-if="isLoading"/>
    <div class="users" v-if="!isLoading">
      <UserCard
          :class="`mx-3 mt-3 ${index === users.length - 1 ? 'mb-3' : ''}`"
          :first-name="user.name.first"
          :index="index"
          :userId="user.id.name"
          :img="user.picture.large"
          :key="index"
          :last-name="user.name.last"
          v-for="(user, index) in users"
      />
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
    computed: mapGetters(['users']),
    methods: mapActions(['fetchUsers']),
    data() {
      return {
        isLoading: true
      }
    },
    mounted() {
      this.fetchUsers(5)
      this.isLoading = false
      console.log(this.users)
    },
    components: {
      Loader,
      Search,
      UserCard
    }
  })
</script>