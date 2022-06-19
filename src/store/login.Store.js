import { makeAutoObservable } from "mobx";
import { getToken, http, removeToken, setToken } from "@/utils";

class LoginStore {
  token = getToken() || "";

  constructor() {
    makeAutoObservable(this);
  }

  getToken = async ({ mobile, code }) => {
    const res = await http.post("/authorizations", {
      mobile,
      code,
    });
    this.token = res.data.token;
    setToken(this.token);
  };

  logout = () => {
    this.token = "";
    removeToken();
  };
}

export default LoginStore;
