<template>
  <div class="user">

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {mapActions, mapGetters} from 'vuex'

  export default Vue.extend({
    name: 'User',
    props: {
      id: String
    },
    methods: mapActions(['setCurrentUser']),
    computed: mapGetters(['user']),
    mounted(): void {
      this.setCurrentUser(this.id)
    },
    beforeDestroy(): void {
      this.setCurrentUser(null)
    }
  })
</script>