import Vue from 'vue'
import Vuex from 'vuex'
import {TUsers} from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [] as TUsers
  },
  mutations: {},
  actions: {}
})
