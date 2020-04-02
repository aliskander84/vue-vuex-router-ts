import Vue from 'vue'
import Vuex from 'vuex'
import {TUser, TUsers, UPDATE_IS_LOADING, UPDATE_SEARCH_TEXT, UPDATE_SEARCH_USERS, UPDATE_USERS} from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fetchUsers(ctx) {
      const limit = this.state.countUsers
      try {
        const res = await fetch(`https://randomuser.me/api/?results=${limit}&inc=id,picture,name`)
        const {results} = await res.json()
        ctx.commit('updateUsers', results)
        ctx.commit('updateIsLoading', false)
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
      ctx.commit('updateSearchUsers', filtered)
      ctx.commit('updateSearchText', text !== null ? text : '')
    }
  },

  mutations: {
    [UPDATE_USERS] (state, users) {
      state.users = users
    },
    [UPDATE_SEARCH_USERS] (state, users) {
      state.searchUsers = users
    },
    [UPDATE_SEARCH_TEXT] (state, text) {
      state.searchText = text
    },
    [UPDATE_IS_LOADING] (state, isLoading) {
      state.isLoading = isLoading
    }
  },

  state: {
    users: [] as TUsers,
    searchUsers: [] as TUsers,
    searchText: '',
    isLoading: true,
    countUsers: 5
  },

  getters: {
    users(state): TUsers {
      const isSearch: boolean = state.searchUsers.length > 0 || state.searchText !== ''
      return isSearch ? state.searchUsers : state.users
    },
    user(state, index): TUser {
      const isSearch: boolean = state.searchUsers.length > 0 || state.searchText !== ''
      return isSearch ? state.searchUsers[index] : state.users[index]
    },
    searchText(state) {
      return state.searchText
    },
    isLoading(state) {
      return state.isLoading
    },
    countUsers(state) {
      return state.countUsers
    }
  }
})
