import { createContext, useReducer } from "react";
import reducer from "./reducer";

const defaults = {
  map: {
    width: "100vw",
    height: "100vh",
    latitude: 47.5162,
    longitude: 14.5501,
    zoom: 3,
  },
  markers: [],
  tips: [],
  addEditMarkerLocation: null,
  containerRef: null,
  formRef: null,
  showPopup: {},
  loading: false,
  showTips: true,
};

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaults);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
