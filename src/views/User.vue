<template>
  <div class="user">
    User {{$route.params}}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'User',
    // data() {
    //   return {
    //     $route.params.id
    //   }
    // }
  })
</script>