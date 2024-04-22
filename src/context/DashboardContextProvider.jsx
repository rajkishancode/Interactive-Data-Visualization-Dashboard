import { createContext, useReducer, useContext, useEffect } from "react";
import {API_URL} from "../helper/constants";

export const DashboardContext = createContext({
  state: {},
  dispatch: () => {},
});


const initialState = JSON.parse(localStorage.getItem("dashboardData")) || {
  data: [],
  filteredData: [],
  loading: false,
  error: "",
  filters: {
    age: "15-25",
    gender: "Male",
    dateRange: {
      startDate: "2022-10-01",
      endDate: "2022-10-31",
    },
  },
};



const dashboardReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
     
      return {
        ...state,
        data: action.payload,
        filteredData: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: "Error fetching data",
      };
    case "SET_LOADING_TRUE":
      return {
        ...state,
        loading: true,
      };
    case "SET_LOADING_FALSE":
      return {
        ...state,
        loading: false,
      };
    case "FILTER_BY_AGE":
     
      return {
        ...state,
        filters: { ...state.filters, age: action.payload },
      };
    case "FILTER_BY_GENDER":
      return {
        ...state,
        filters: { ...state.filters, gender: action.payload },
      };
    case "FILTER_BY_DATE_RANGE":
      
      return {
        ...state,
        filters: { ...state.filters, dateRange: action.payload },
       
      };
    default:
      return state;
  }
};

const DashboardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  //state saving in local storage
  localStorage.setItem("dashboardData", JSON.stringify(state));

    const getData = async () => {
      try {
        
        dispatch({ type: "SET_LOADING_TRUE" });

        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const { data } = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
        
      } catch (error) {
        
        dispatch({ type: "FETCH_ERROR" });
      } finally {
        dispatch({ type: "SET_LOADING_FALSE" });
      }
    };

    useEffect(() => {
      getData();
    }, []);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardContextProvider;
