<template>
  <div class="home">
    <Search/>
    <Loader/>
    <!--    <UserCard-->
<!--      :id="users[0].id.name"-->
<!--      :pic="users[0].picture.large"-->
<!--      :first-name="users[0].name.first"-->
<!--      :last-name="users[0].name.last"-->
<!--    />-->
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
        users: [] as TUsers
      }
    },
    async mounted() {
      const res = await fetch('https://randomuser.me/api/?results=20&inc=id,picture,name')
      const users: TUsers = await res.json()
      this.users = users
    },
    components: {
      Loader,
      Search,
      // UserCard
    }
  })
</script>