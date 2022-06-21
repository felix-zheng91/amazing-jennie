import { makeAutoObservable } from "mobx";
import { http } from "@/utils";

class ChannelStore {
  constructor() {
    makeAutoObservable(this);
  }

  channels = [];

  loadChannels = async () => {
    const res = await http.get("/channels");
    this.setChannels(res.data.channels);
  };

  setChannels = (channels) => {
    this.channels = channels;
  };
}

export default ChannelStore;
