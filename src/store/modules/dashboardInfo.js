export default {
  state: {
    dashboardInfo: { assets: 0, income_perc: 0, income_value: 0 }
  },

  getters: {
    getDashInfo: state => state.dashboardInfo
  },

  mutations: {
    SET_DASH_INFO: (state, dashboardInfo) =>
      (state.dashboardInfo = dashboardInfo),
    CLEAR_DASH_INFO: state => (state.dashboardInfo = [])
  },

  actions: {
    ADD_DASH_INFO: ({ commit }, dashboardInfo) =>
      commit("SET_DASH_INFO", dashboardInfo),
    CLEAR_DASH_INFO: ({ commit }) => {
      commit("CLEAR_DASH_INFO");
    }
  }
};
