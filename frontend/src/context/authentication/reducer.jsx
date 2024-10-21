// import { API, JWT_TOKEN } from "../../api";
// import { addToCookie } from "../../utils/storageFunc";
import { addToCookie, removefromCookie } from "../../utils/StorageFun";
import { API, JWT_TOKEN } from "../../api/index";

import * as ACTION_TYPES from "./type";
let token, account_type, lastName, firstName;
if (typeof window !== "undefined") {
  // const userData = localStorage.getItem("AuthUser")
  //   ? JSON.parse(localStorage.getItem("AuthUser"))
  //   : "";
  // console.log("userData", userData);
  firstName = localStorage.getItem("AuthUser")
    ? JSON.parse(localStorage.getItem("AuthUser"))?.firstName
    : "";
  lastName = localStorage.getItem("AuthUser")
    ? JSON.parse(localStorage.getItem("AuthUser"))?.lastName
    : "";
  token = localStorage.getItem("AuthUser")
    ? JSON.parse(localStorage.getItem("AuthUser")).token
    : "";
  account_type = localStorage.getItem("AuthUser")
    ? JSON.parse(localStorage.getItem("AuthUser"))?.role
    : "";
}
export const initialState = {
  isAuth: token ? true : false,
  token: "" || token,
  lastName: "" || lastName,
  firstName: "" || firstName,
  account_type: "" || account_type,
  loading: false,
};

export const themeInitialState = {
  darkMode: false,
  light: {
    background: "white",
    color: "black",
  },
  dark: {
    background: "black",
    color: "white",
  },
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      addToCookie(JWT_TOKEN, action.payload.token);
      localStorage.setItem("AuthUser", JSON.stringify(action.payload));
      return {
        ...state,
        isAuth: true,
        account_type: action.payload.account_type,
        lastName: action.payload.lastName,
        firstName: action.payload.firstName,
        token: action.payload.token,
      };

    case ACTION_TYPES.LOGOUT:
      console.log("Executing LOGOUT action..."); // Ensure it's being hit      removefromCookie(JWT_TOKEN);
      console.log("Clearing local storage...");
      localStorage.removeItem("AuthUser");
      return {
        ...state,
        isAuth: false,
        account_type: "",
        lastName: "",
        firstName: "",
        token: "",
      };

    default:
      return state;
  }
};

export const ThemeReducer = (state = themeInitialState, themeAction) => {
  switch (themeAction.type) {
    case ACTION_TYPES.LIGHTHMODE:
      return { darkMode: false };

    case ACTION_TYPES.DARKMODE:
      return { darkMode: true };

    default:
      return state;
  }
};
