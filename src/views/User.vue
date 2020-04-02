<template>
  <div class="user">
<!--        User {{id}}-->
    <v-img
        src=""
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {mapGetters} from 'vuex'

  export default Vue.extend({
    name: 'User',
    props: {
      id: String
    },
    computed: mapGetters(['user']),
    mounted(): void {
      // console.log(this.user)
      // console.log(this.$route)
      // console.log(this.$props)
    }
  })
</script>