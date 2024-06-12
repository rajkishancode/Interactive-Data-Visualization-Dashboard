import { createContext, useReducer, useContext, useEffect } from "react";
import { API_URL } from "../helper/constants";
import { dashboardReducer } from "../reducer";

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

const DashboardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  useEffect(() => {
    localStorage.setItem("dashboardData", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
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
