export default {

    state: {
        investmentList: [],
    },

    getters: {
        getInvestmentList: state => state.investmentList,
    },

    mutations: {
        "SET_INVESTMENT_LIST": (state, investmentList) => state.investmentList = investmentList,
        "CLEAR_INVESTMENT_LIST": (state) => state.investmentList = [],
    },

    actions: {
        "ADD_INVESTMENT_LIST": ({ commit }, investmentList) => commit("SET_INVESTMENT_LIST", investmentList),
        "CLEAR_INVESTMENT_LIST": ({ commit }) => {
            commit("CLEAR_INVESTMENT_LIST")
        },
    },
}
