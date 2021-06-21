export default {
  state: {
    errorMessages: [],
    infoMessages: []
  },

  getters: {
    hasErrorMessages: state => state.errorMessages.length !== 0,
    hasInfoMessages: state => state.infoMessages.length !== 0,
    getErrorMessages: state => state.errorMessages,
    getInfoMessages: state => state.infoMessages
  },

  mutations: {
    ADD_ERROR_MESSAGE: (state, errorMessage) =>
      state.errorMessages.push(errorMessage),
    ADD_INFO_MESSAGE: (state, infoMessage) =>
      state.infoMessages.push(infoMessage),
    CLEAR_ERROR_MESSAGES: state => (state.errorMessages = []),
    CLEAR_INFO_MESSAGES: state => (state.infoMessages = []),
    SET_ERROR_BY_CODE: (state, err) => {
      let errorMessage = "";
      if (err.response.status !== 401) {
        if (err.response.data.message) {
          errorMessage = err.response.data.message;
        } else {
          errorMessage = err;
        }
      } else {
        errorMessage = "Sessão expirou";
        state.errorMessages = [];
      }
      state.errorMessages.push(errorMessage);
    }
  },

  actions: {
    ADD_ERROR_MESSAGE: ({ commit }, errorMessage) =>
      commit("ADD_ERROR_MESSAGE", errorMessage),
    ADD_INFO_MESSAGE: ({ commit }, infoMessage) =>
      commit("ADD_INFO_MESSAGE", infoMessage),
    CLEAR_ERROR_MESSAGES: ({ commit }) => {
      commit("CLEAR_ERROR_MESSAGES");
    },
    CLEAR_INFO_MESSAGES: ({ commit }) => {
      commit("CLEAR_INFO_MESSAGES");
    }
  }
};
