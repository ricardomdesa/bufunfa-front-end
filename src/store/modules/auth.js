import ApiService from "../../services/apiService";

export default {
  state: {
    token: window.sessionStorage.getItem("access-token") || ""
  },

  getters: {
    hasToken: state => Boolean(state.token)
  },

  mutations: {
    AUTH_SUCCESS: state =>
      (state.token = window.sessionStorage.getItem("access-token")),
    AUTH_LOGOUT(state) {
      state.token = null;
    }
  },

  actions: {
    AUTH_REQUEST({ dispatch, commit }, { username, password }) {
      return new Promise(resolve => {
        ApiService.postToken({ username, password })
          .then(resp => {
            commit("AUTH_SUCCESS");
            resolve(resp);
          })
          .catch(err => {
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
      commit("AUTH_LOGOUT");
      commit("user", {
        name: "",
        email: "",
        avatar: ""
      });
    }
  }
};
