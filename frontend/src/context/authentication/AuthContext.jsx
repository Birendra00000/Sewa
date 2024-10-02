import { createContext, useEffect, useState, useReducer } from "react";
import * as Reducer from "./reducer";
import { AuthAPI, JWT_TOKEN } from "../../api";
import { getfromCookie } from "../../utils/StorageFun";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(
    Reducer.AuthReducer,
    Reducer.initialState
  );
  console.log("authState1111", authState);
  const [userData, setUserData] = useState({});
  const [refetch, setRefetch] = useState(false); // Changed to false initially

  // console.log("AUTHCONTEXT", userData);

  useEffect(() => {
    const fetchData = async () => {
      if (authState.isAuth) {
        await getUserData();
      }
    };

    fetchData();
  }, [refetch, authState.isAuth]);

  const getUserData = async () => {
    try {
      const token = getfromCookie(JWT_TOKEN); // Use getFromCookie to get the token
      const res = await AuthAPI.get("/getprofile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(res.data);
      setRefetch(false); // Reset refetch to false after fetching data
    } catch (err) {
      console.log("Error fetching user data:", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        userData,
        authDispatch,
        setRefetch,
        refetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
