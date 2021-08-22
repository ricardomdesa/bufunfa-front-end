import ApiService from "../../services/apiService";

export default {
  actions: {
    GET_INVESTMENTS({ dispatch, commit }) {
      return new Promise(resolve => {
        ApiService.post(`/get-investments`, {})
          .then(response => {
            commit("CLEAR_INVESTMENT_LIST");
            dispatch("ADD_INVESTMENT_LIST", response.data.investments_list);
            resolve(response);
          })
          .catch(err => commit("SET_ERROR_BY_CODE", err));
      });
    },
    GET_STOCKS({ dispatch, commit }) {
      return new Promise(resolve => {
        ApiService.post(`/get-stocks`, {})
          .then(response => {
            commit("CLEAR_STOCK_LIST");
            dispatch("ADD_STOCK_LIST", response.data.stock_list);
            resolve(response);
          })
          .catch(err => commit("SET_ERROR_BY_CODE", err));
      });
    },
    GET_DASHBOARD_INFO({ dispatch, commit }) {
      return new Promise(resolve => {
        ApiService.post(`/get-dashboard-info`, {})
          .then(response => {
            commit("CLEAR_DASH_INFO");
            dispatch("ADD_DASH_INFO", response.data.dashboard_info[0]);
            resolve(response);
          })
          .catch(err => commit("SET_ERROR_BY_CODE", err));
      });
    },
    LOAD_STOCKS({ dispatch, commit }, file) {
      console.log(data);
      const data = new FormData();
      data.append("stock_file", file);
      ApiService.post(`/load-stocks`, data, {
        headers: {
          "Content-Type": file.type
        }
      })
        .then(res => {
          dispatch("ADD_INFO_MESSAGE", res.data.message);
          dispatch("CLEAR_FILE");
        })
        .catch(err => commit("SET_ERROR_BY_CODE", err));
    },
    LOAD_INVESTMENTS({ dispatch, commit }, file) {
      const data = new FormData();
      data.append("investment_file", file);
      ApiService.post(`/load-investments`, data, {
        headers: {
          "Content-Type": file.type
        }
      })
        .then(res => {
          dispatch("ADD_INFO_MESSAGE", res.data.message);
          dispatch("CLEAR_FILE");
        })
        .catch(err => commit("SET_ERROR_BY_CODE", err));
    },
    FETCH_PRICES({ dispatch, commit }) {
      ApiService.post("/fetch-current-prices")
        .then(dispatch("GET_INVESTMENTS"))
        .catch(err => commit("SET_ERROR_BY_CODE", err));
    },
    SIGNUP_REQUEST({ dispatch, commit }, data) {
      ApiService.post("/signup", data)
        .then(res => dispatch("ADD_INFO_MESSAGE", res.data.message))
        .catch(err => commit("SET_ERROR_BY_CODE", err));
    },
    INSERT_TRANSACTION({ dispatch, commit }, transactionData) {
      ApiService.post("/insert-transaction", transactionData)
        .then(res => dispatch("ADD_INFO_MESSAGE", res.data.message))
        .catch(err => commit("SET_ERROR_BY_CODE", err));
    }
  }
};
