import Vue from 'vue'
import Vuex from 'vuex'
import {TUsers} from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async getUsers(ctx, limit = 5) {
      try {
        const res = await fetch(`https://randomuser.me/api/?results=${limit}&inc=id,picture,name`)
        const {results} = await res.json()
        ctx.commit('updateUsers', results)
      } catch (e) {
        console.log(e)
      }
    }
  },
  mutations: {
    updateUsers (state, users) {
      state.users = users
    }
  },
  state: {
    users: [] as TUsers
  },
  getters: {
    users(state): TUsers {
      return state.users
    }
  }
})
