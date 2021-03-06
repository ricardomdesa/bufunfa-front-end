export default {
  state: {
    investmentList: []
  },

  getters: {
    getInvestmentList: state => state.investmentList,
    getTreeMapInfo: state =>
      state.investmentList.map(a => {
        return { x: a.codigo, y: a.rendimento };
      }),
    getInvestmentExtraData: state =>
      state.investmentList.map(inv => {
        let total = 0;
        total = inv.valor_investido_atual * inv.quantidade;
        return { ...total };
      })
  },

  mutations: {
    SET_INVESTMENT_LIST: (state, investmentList) =>
      (state.investmentList = investmentList),
    CLEAR_INVESTMENT_LIST: state => (state.investmentList = [])
  },

  actions: {
    ADD_INVESTMENT_LIST: ({ commit }, investmentList) =>
      commit("SET_INVESTMENT_LIST", investmentList),
    CLEAR_INVESTMENT_LIST: ({ commit }) => {
      commit("CLEAR_INVESTMENT_LIST");
    }
  }
};
