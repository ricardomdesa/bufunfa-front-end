export default {
  state: {
    file: null
  },
  getters: {
    getFile: state => state.file,
    hasFileSelected: state => (state.file === null ? false : true)
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
