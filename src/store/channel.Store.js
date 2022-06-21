import { makeAutoObservable } from "mobx";
import { http } from "@/utils";

class ChannelStore {
  constructor() {
    makeAutoObservable(this);
  }

  channels = [];

  loadChannels = async () => {
    const res = await http.get("/channels");
    this.channels = res.data.channels;
  };
}

export default ChannelStore;
