import ApiService from "../../services/apiService"
import apiURL from "@/environment.js";

export default {

    actions: {
        GET_INVESTMENTS({ dispatch, commit }) {
            return new Promise((resolve) => {
                ApiService.post(`http://localhost:8002/get-investments`, {})
                    .then(response => {
                        commit("CLEAR_INVESTMENT_LIST")
                        dispatch("ADD_INVESTMENT_LIST", response.data.investments_list)
                        resolve(response)
                    })
                    .catch(err => commit("SET_ERROR_BY_CODE", err))
            });
        },
        LOAD_STOCKS({ dispatch, commit }, data) {
            ApiService.post(`${apiURL}/load-stocks`, data)
                .then(res => dispatch("ADD_INFO_MESSAGE", res.data.message))
                .catch(err => commit("SET_ERROR_BY_CODE", err));
        },
        LOAD_INVESTMENTS({ dispatch, commit }, data) {
            ApiService.post(`${apiURL}/load-investments`, data)
                .then(res => dispatch("ADD_INFO_MESSAGE", res.data.message))
                .catch(err => commit("SET_ERROR_BY_CODE", err));
        },
    },
}