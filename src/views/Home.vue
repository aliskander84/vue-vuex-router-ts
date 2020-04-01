<template>
  <div class="home">
    Home
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
    components: {
      Search,
      UserCard
    }
  })
</script>