import { createStore } from 'vuex'
import auth from './modules/auth'
import messages from './modules/messages'
import investments from './modules/investments'
import http from './modules/http'

export default createStore({
  modules: {
    auth,
    messages,
    investments,
    http
  },
  state: {
    currentTab: "investimentos"
  },
  getters: {
    getCurrentTab: state => state.currentTab
  },
  mutations: {
    SET_CURRENT_TAB: (state, tab) => state.currentTab = tab
  },
  actions: {
    CHANGE_CURRENT_TAB: ({ commit }, tab) => commit("SET_CURRENT_TAB", tab)
  }
})
