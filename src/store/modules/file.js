export default {
  state: {
    file: null
  },
  getters: {
    getFile: state => state.file
  },
  mutations: {
    SET_FILE: (state, file) => (state.file = file),
    RM_FILE: state => (state.file = null)
  },
  actions: {
    ADD_FILE: ({ commit }, file) => commit("SET_FILE", file),
    CLEAR_FILE: ({ commit }) => commit("RM_FILE")
  }
};
