import { createContext, useEffect, useState, useReducer } from "react";
import * as Reducer from "./reducer";
import { AuthAPI } from "../../api";
import { getfromCookie } from "../../utils/StorageFun";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(
    Reducer.AuthReducer,
    Reducer.initialState
  );

  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState({});
  const [refetch, setRefetch] = useState(true);

  // useEffect(async () => {
  //   if (authState.isAuth) {
  //     await getUserData();
  //     await getUserId();
  //   }
  // }, [refetch]);

  useEffect(() => {
    const fetchData = async () => {
      if (authState.isAuth) {
        await getUserData();
        await getUserId();
      }
    };
    fetchData();
  }, [refetch, authState.isAuth]);

  const getUserData = async () => {
    try {
      const res = await AuthAPI.get("/getprofile");
      setUserData(res.data);
      // console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };
  const getUserId = async () => {
    try {
      const res = await AuthAPI.get("/getprofile");
      setUserId(res.data);
      // console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        userData,
        userId,
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
