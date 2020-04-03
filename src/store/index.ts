import Vue from 'vue'
import Vuex from 'vuex'
import {
  TUser,
  TUsers,
  UPDATE_CURRENT_USER,
  UPDATE_IS_LOADING,
  UPDATE_SEARCH_TEXT,
  UPDATE_SEARCH_USERS,
  UPDATE_USERS
} from './types'
import {joinAPILink} from '@/api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fetchUsers(ctx) {
      const limit = this.state.countUsers
      try {
        const res = await fetch(joinAPILink(limit))
        const {results} = await res.json()
        ctx.commit(UPDATE_USERS, results)
        ctx.commit(UPDATE_IS_LOADING, false)
      } catch (e) {
        console.log(e)
      }
    },
    search(ctx, text) {
      const filtered = this.state.users.filter(u => {
        const first: string = u.name.first
        const last: string = u.name.last
        const matchFirst: string[] | null = first.match(new RegExp(text, 'gi'))
        const matchLast: string[] | null = last.match(new RegExp(text, 'gi'))
        return matchFirst || matchLast
      })
      ctx.commit(UPDATE_SEARCH_USERS, filtered)
      ctx.commit(UPDATE_SEARCH_TEXT, text !== null ? text : '')
    },
    setCurrentUser(ctx, index) {
      ctx.commit(UPDATE_CURRENT_USER, index)
    }
  },

  mutations: {
    [UPDATE_USERS](state, users) {
      state.users = users
    },
    [UPDATE_SEARCH_USERS](state, users) {
      state.searchUsers = users
    },
    [UPDATE_SEARCH_TEXT](state, text) {
      state.searchText = text
    },
    [UPDATE_IS_LOADING](state, isLoading) {
      state.isLoading = isLoading
    },
    [UPDATE_CURRENT_USER](state, index) {
      state.currentUserIndex = index
    }
  },

  state: {
    users: [] as TUsers,
    searchUsers: [] as TUsers,
    searchText: '',
    isLoading: true,
    countUsers: 20,
    currentUserIndex: null
  },

  getters: {
    users(state): TUsers {
      const isSearch: boolean = state.searchUsers.length > 0 || state.searchText !== ''
      return isSearch ? state.searchUsers : state.users
    },
    user(state): TUser | undefined {
      const i = state.currentUserIndex
      const isSearch: boolean = state.searchUsers.length > 0 || state.searchText !== ''
      if (i !== null) return isSearch ? state.searchUsers[i] : state.users[i]
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
