import Cookies from "js-cookie";

const addToCookie = (key, value) => {
  Cookies.set(key, value);
};

// Change the parameter name from 'value' to 'cookieValue'
const getfromCookie = (key) => {
  const cookieValue = `; ${document.cookie}`; // Use 'cookieValue' here
  const parts = cookieValue.split(`; ${key}=`); // Use 'key' to fetch the desired cookie
  if (parts.length === 2) return parts.pop().split(";").shift();
};

const removefromCookie = (key) => {
  Cookies.remove(key);
};

export { addToCookie, getfromCookie, removefromCookie };
