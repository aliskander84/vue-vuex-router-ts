<template>
  <div class="home">
    <Search/>
    <UserCard/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Search from '@/components/Search.vue'
  import UserCard from '@/components/UserCard.vue'

  export default Vue.extend({
    name: 'Home',
    mounted(): void {
      fetch('https://randomuser.me/api/?results=20&inc=id,picture,name')
      .then(res => res.json())
      .then(data => console.log(data))
    },
    components: {
      Search,
      UserCard
    }
  })
</script>