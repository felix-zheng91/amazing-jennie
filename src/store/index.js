import React from "react";
import LoginStore from "@/store/login.Store";
import UserStore from "@/store/user.Store";
import ChannelStore from "@/store/channel.Store";

class RootStore {
  constructor() {
    this.loginStore = new LoginStore();
    this.userStore = new UserStore();
    this.channelStore = new ChannelStore();
  }
}

const context = React.createContext(new RootStore());

export const useStore = () => {
  return React.useContext(context);
};
