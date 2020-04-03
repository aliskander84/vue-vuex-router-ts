<template>
  <v-container
      fluid
      class="px-3 grey lighten-5"
  >
    <v-row
        class="px-3 justify-center"
    >
      <v-col
          class="pa-0"
          cols="12"
          sm="9"
          md="6"
          lg="4"
          xl="3"
      >
        <!--suppress HtmlUnknownTarget -->
        <v-img
            :src="img"
            alt="user-photo"
            class="elevation-3"
            style="border-radius: 15px"
        />
        <v-card class="elevation-3 mt-3">
          <v-card-title class="subheading font-weight-bold justify-center">
            {{name}}
          </v-card-title>

          <v-divider/>

          <v-list dense>
            <v-list-item>
              <v-list-item-content>Address:</v-list-item-content>
              <v-list-item-content class="align-end">
                <div>{{address.country}}</div>
                <div>{{address.state}}</div>
                <div>{{address.postcode}} {{address.city}}</div>
                <div>{{address.streetNum}}, {{address.street}}</div>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>Email:</v-list-item-content>
              <v-list-item-content class="align-end">{{email}}</v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>Gender:</v-list-item-content>
              <v-list-item-content class="align-end">{{gender}}</v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>Date of birth:</v-list-item-content>
              <v-list-item-content class="align-end">
                <div>
                  {{dob | day}} {{dob | month}} {{dob | year}}
                </div>
                <div>
                  {{age}}
                </div>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>Phone:</v-list-item-content>
              <v-list-item-content class="align-end">{{phone}}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

<!--      <v-col-->
<!--          class="px-1 py-2"-->
<!--          cols="12"-->
<!--          sm="9"-->
<!--          md="6"-->
<!--          lg="4"-->
<!--          xl="3"-->
<!--      >-->

<!--      </v-col>-->
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {mapActions, mapGetters} from 'vuex'

  export default Vue.extend({
    name: 'User',
    props: {
      id: String
    },
    data() {
      return {}
    },
    filters: {
      day: function (date: Date) {
        return date.getDate()
      },
      month: function (date: Date) {
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ]
        return months[date.getMonth()]
      },
      year: function (date: Date) {
        return date.getFullYear()
      }
    },
    methods: mapActions(['setCurrentUser']),
    computed: {
      ...mapGetters(['user']),
      img() {
        return this.user.picture.large
      },
      name() {
        const n = this.user.name
        const title = n.title + ' '
        const first = n.first + ' '
        const last = n.last
        return `${title}${first}${last}`
      },
      address() {
        const l = this.user.location
        const country = l.country
        const state = l.state
        const postcode = l.postcode
        const city = l.city
        const streetNum = l.street.number
        const street = l.street.name
        return {
          country,
          state,
          postcode,
          city,
          streetNum,
          street
        }
      },
      email() {
        return this.user.email
      },
      gender() {
        return this.user.gender
      },
      dob() {
        return new Date(this.user.dob.date)
      },
      age() {
        const age = this.user.dob.age
        return `${age} years old`
      },
      phone() {
        return this.user.phone
      }
    },
    beforeMount(): void {
      this.setCurrentUser(this.id)
    },
    beforeDestroy(): void {
      this.setCurrentUser(null)
    }
  })
</script>