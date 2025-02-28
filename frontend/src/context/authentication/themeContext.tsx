"use client";

import React, { createContext, useReducer } from "react";
import * as Reducer from "./reducer";

export const ThemeContext = createContext("");

const ThemeProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(
    Reducer.ThemeReducer,
    Reducer.themeInitialState
  );

  return (
    <ThemeContext.Provider
      value={{
        themeState,
        themeDispatch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
