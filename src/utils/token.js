// 封装local Storage 存取token
const key = "pc_key";

const setToken = (token) => {
  return window.localStorage.setItem(key, token);
};

const getToken = () => {
  return window.localStorage.getItem(key);
};

const removeToken = () => {
  return window.localStorage.removeItem(key);
};

export { setToken, getToken, removeToken };
