export default {

    state: {
        stockList: [{'stock_code':'a'}],
    },

    getters: {
        getStockList: state => state.stockList,
    },

    mutations: {
        "SET_STOCK_LIST": (state, stockList) => state.stockList = stockList,
        "CLEAR_STOCK_LIST": (state) => state.stockList = [],
    },

    actions: {
        "ADD_STOCK_LIST": ({ commit }, stockList) => commit("SET_STOCK_LIST", stockList),
        "CLEAR_STOCK_LIST": ({ commit }) => {
            commit("CLEAR_STOCK_LIST")
        },
    },
}
