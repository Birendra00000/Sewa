import Cookies from "js-cookie";

const addToCookie = (key, value) => {
  Cookies.set(key, value);
};

const getfromCookie = (key, value) => {
  Cookies.get(key);
};

const removefromCookie = (key, value) => {
  Cookies.remove(key);
};

export { addToCookie, getfromCookie, removefromCookie };
