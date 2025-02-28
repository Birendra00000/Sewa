"use client";
import axios from "axios";
import { BASE_URL } from "../utils/BaseUrl";
import { getfromCookie } from "../utils/StorageFun";

export const JWT_TOKEN = "user_data_token";

let authToken;

if (typeof window !== "undefined") {
  let authUser = JSON.parse(localStorage.getItem("AuthUser"));
  if (authUser) {
    authToken = authUser.token;
  }
}

const API = axios.create({
  baseURL: BASE_URL,
});
// * axios with header
const AuthAPI = axios.create({
  baseURL: BASE_URL,
});
// * axios intercepting changes in storage
AuthAPI.interceptors.request.use(
  (config) => {
    const authToken = getfromCookie(JWT_TOKEN);
    const token = authToken;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    console.log("121121212 error", error);
    return Promise.reject(error);
  }
);

AuthAPI.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    const errorDetails = JSON.parse(JSON.stringify(error));
    console.log(errorDetails);
    return Promise.reject(error);
  }
);

export { API, AuthAPI };
