import { makeAutoObservable } from "mobx";
import { getToken, http, removeToken, setToken } from "@/utils";

class LoginStore {
  token = getToken() || "";

  constructor() {
    makeAutoObservable(this);
  }

  getToken = async ({ username, password }) => {
    const res = await http.post("/user/authorizations", {
      username,
      password,
    });
    this.token = res.data;
    setToken(this.token);
  };

  logout = () => {
    this.token = "";
    removeToken();
  };
}

export default LoginStore;
