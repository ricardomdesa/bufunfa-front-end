import { createStore } from 'vuex'
import auth from './modules/auth'
import messages from './modules/messages'
import investments from './modules/investments'
import http from './modules/http'
import file from './modules/file'
import stocks from './modules/stocks'

export default createStore({
  modules: {
    auth,
    messages,
    investments,
    http,
    file,
    stocks
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
