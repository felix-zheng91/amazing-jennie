import { makeAutoObservable } from "mobx";
import { getToken, http, setToken } from "@/utils";

class LoginStore {
  token = getToken() || "";

  constructor() {
    makeAutoObservable(this);
  }

  getToken = async ({ mobile, code }) => {
    const res = await http.post("http://geek.itheima.net/v1_0/authorizations", {
      mobile,
      code,
    });
    this.token = res.data.token;
    setToken(this.token);
  };
}

export default LoginStore;