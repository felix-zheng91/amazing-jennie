import React from "react";
import LoginStore from "@/store/login.Store";

class RootStore {
  constructor() {
    this.loginStore = new LoginStore();
  }
}

const context = React.createContext(new RootStore());

export const useStore = () => {
  return React.useContext(context);
};
