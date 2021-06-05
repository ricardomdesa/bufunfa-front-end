import ApiService from "../../services/apiService";

export default {
  state: {
    token: window.sessionStorage.getItem("access-token") || "",
    username: null,
  },

  getters: {
    hasToken: (state) => Boolean(state.token),
    getUsername: (state) => state.username,
  },

  mutations: {
    AUTH_SUCCESS: (state) =>
      (state.token = window.sessionStorage.getItem("access-token")),
    AUTH_LOGOUT(state) {
      state.token = null;
    },
    SET_USERNAME: (state, username) => (state.username = username),
  },

  actions: {
    AUTH_REQUEST({ dispatch, commit }, { username, password }) {
      return new Promise((resolve) => {
        ApiService.postToken({ username, password })
          .then((resp) => {
            commit("SET_USERNAME", username);
            commit("AUTH_SUCCESS");
            resolve(resp);
          })
          .catch((err) => {
            if (err.response) {
              dispatch("ADD_ERROR_MESSAGE", err.response.data.message);
            } else {
              dispatch("ADD_ERROR_MESSAGE", err);
            }
          });
      });
    },
    AUTH_LOGOUT({ commit }) {
      ApiService.logout();
      commit("SET_USERNAME", "");
      commit("AUTH_LOGOUT");
    },
  },
};
