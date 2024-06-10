export const API_URL =
  "https://script.google.com/macros/s/AKfycbyYgTn58y8g_j9gAVlx342sBVLK8lYSGA4yEXiEDoXQafZOjw0bo6171uOfOF_UJC51/exec";

export const AGES = [
  {
    id: 1,
    value: "15-25",
  },
  {
    id: 2,
    value: ">25",
  },
];

export const GENDERS = [
  {
    id: 1,
    value: "Male",
  },
  {
    id: 2,
    value: "Female",
  },
];

//auth reducer action types
export const AUTH_ACTION_TYPES = {
  SET_LOGGED_IN_STATUS: "SET_LOGGED_IN_STATUS",
  SET_USER: "SET_USER",
};

//data reducer action types

export const DATA_ACTION_TYPES = {
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
  SET_LOADING_TRUE: "SET_LOADING_TRUE",
  SET_LOADING_FALSE: "SET_LOADING_FALSE",
  FILTER_BY_AGE: "FILTER_BY_AGE",
  FILTER_BY_GENDER: "FILTER_BY_GENDER",
  FILTER_BY_DATE_RANGE: "FILTER_BY_DATE_RANGE",
  RESET_FILTERS: "RESET_FILTERS",
};

