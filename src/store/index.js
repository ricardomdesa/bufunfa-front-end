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
  },
  mutations: {
  },
  actions: {
  }
})
