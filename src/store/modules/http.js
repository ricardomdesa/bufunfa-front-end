import ApiService from "../../services/apiService"
import apiURL from "@/environment.js";

export default {

    actions: {
        async EXPORT_REPORT_REQUEST({ dispatch }, { startDate, endDate }) {
            return new Promise((resolve) => {
                ApiService.post(`${apiURL}/export-converter-utilization-data`, { start_date: startDate, end_date: endDate })
                    .then(resp => {
                        resolve(resp)
                    })
                    .catch(err => dispatch('ADD_ERROR_MESSAGE', err.response.data.message))
            });
        },
        EXPORT_CATEGORIES({ commit }) {
            return new Promise((resolve) => {
                ApiService.post(`${apiURL}/export-categories`, {})
                    .then(response => resolve(response))
                    .catch(err => commit("SET_ERROR_BY_CODE", err))
            });
        },
        UPDATE_CATEGORIES({ dispatch, commit }, data) {
            ApiService.post(`${apiURL}/refresh-categories-map`, data)
                .then(res => dispatch("ADD_INFO_MESSAGE", res.data.message))
                .catch(err => commit("SET_ERROR_BY_CODE", err));
        },
        EXPORT_DIMENSIONS({ commit }) {
            return new Promise((resolve) => {
                ApiService.post(`${apiURL}/export-categories-dimensions`, {})
                    .then(response => resolve(response))
                    .catch(err => commit("SET_ERROR_BY_CODE", err))
            });
        },
        UPDATE_DIMENSIONS({ dispatch, commit }, data) {
            ApiService.post(`${apiURL}/refresh-categories-dimensions`, data)
                .then(res => dispatch("ADD_INFO_MESSAGE", res.data.message))
                .catch(err => commit("SET_ERROR_BY_CODE", err));
        }
    },
}