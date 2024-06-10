import { DATA_ACTION_TYPES } from "../helper/constants";

const {
  FETCH_SUCCESS,
  FETCH_ERROR,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  FILTER_BY_AGE,
  FILTER_BY_GENDER,
  FILTER_BY_DATE_RANGE,
  RESET_FILTERS,
} = DATA_ACTION_TYPES;

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        filteredData: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: "Error fetching data",
      };
    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case FILTER_BY_AGE:
      return {
        ...state,
        filters: { ...state.filters, age: action.payload },
      };
    case FILTER_BY_GENDER:
      return {
        ...state,
        filters: { ...state.filters, gender: action.payload },
      };
    case FILTER_BY_DATE_RANGE:
      return {
        ...state,
        filters: { ...state.filters, dateRange: action.payload },
      };

    case RESET_FILTERS:
      return {
        ...state,
        filters: {
          age: "15-25",
          gender: "Male",
          dateRange: {
            startDate: "2022-10-01",
            endDate: "2022-10-31",
          },
        },
      };

    default:
      return state;
  }
};

export {dashboardReducer}