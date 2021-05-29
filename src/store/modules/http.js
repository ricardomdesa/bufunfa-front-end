import ApiService from "../../services/apiService"

export default {

    actions: {
        GET_INVESTMENTS({ dispatch, commit }) {
            return new Promise((resolve) => {
                ApiService.post(`/get-investments`, {})
                    .then(response => {
                        commit("CLEAR_INVESTMENT_LIST")
                        dispatch("ADD_INVESTMENT_LIST", response.data.investments_list)
                        resolve(response)
                    })
                    .catch(err => commit("SET_ERROR_BY_CODE", err))
            });
        },
        LOAD_STOCKS({ dispatch, commit }, data) {
            ApiService.post(`/load-stocks`, data)
                .then(res => dispatch("ADD_INFO_MESSAGE", res.data.message))
                .catch(err => commit("SET_ERROR_BY_CODE", err));
        },
        LOAD_INVESTMENTS({ dispatch, commit }, data) {
            ApiService.post(`/load-investments`, data)
                .then(res => dispatch("ADD_INFO_MESSAGE", res.data.message))
                .catch(err => commit("SET_ERROR_BY_CODE", err));
        },
        SIGNUP_REQUEST({ dispatch, commit }, data) {
            ApiService.post('/signup', data)
                .then(res => dispatch("ADD_INFO_MESSAGE", res.data.message))
                .catch(err => commit("SET_ERROR_BY_CODE", err));
        }
    },
}