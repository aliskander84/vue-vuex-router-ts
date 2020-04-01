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
    },
    search (ctx, text) {
      const filtered = this.state.users.filter(u => {
        const first: string = u.name.first
        const last: string = u.name.last
        const matchFirst: string[] | null = first.match(new RegExp(text, 'gi'))
        const matchLast: string[] | null = last.match(new RegExp(text, 'gi'))
        return matchFirst || matchLast
      })
      console.log(text)
      ctx.commit('updateSearchUsers', filtered)
      ctx.commit('updateSearchText', text)
    }
  },
  mutations: {
    updateUsers (state, users) {
      state.users = users
    },
    updateSearchUsers (state, users) {
      state.searchUsers = users
    },
    updateSearchText (state, text) {
      state.searchText = text
    }
  },
  state: {
    users: [] as TUsers,
    searchUsers: [] as TUsers,
    searchText: ''
  },
  getters: {
    users(state): TUsers {
      const isSearch: boolean = state.searchUsers.length > 0 || state.searchText !== ''
      return isSearch ? state.searchUsers : state.users
    }
  }
})
