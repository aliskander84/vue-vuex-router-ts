<template>
  <div class="home">
    <Search/>
    <Loader v-if="isLoading"/>
    <div class="users" v-if="!isLoading">
      <UserCard
          :first-name="user.name.first"
          :id="user.id.name"
          :img="user.picture.large"
          :key="index"
          :last-name="user.name.last"
          v-for="(user, index) in users"
          :class="`mx-3 mt-3 ${index === users.length - 1 ? 'mb-3' : ''}`"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Loader from '@/components/Loader.vue'
  import Search from '@/components/Search.vue'
  import UserCard from '@/components/UserCard.vue'
  import {TUsers} from '@/store/types'

  export default Vue.extend({
    name: 'Home',
    data() {
      return {
        users: [] as TUsers,
        isLoading: true
      }
    },
    async mounted() {
      try {
        const res = await fetch('https://randomuser.me/api/?results=5&inc=id,picture,name')
        const users = await res.json()
        this.users = users.results
        this.isLoading = false
      } catch (e) {
        console.log(e)
      }
    },
    components: {
      Loader,
      Search,
      UserCard
    }
  })
</script>