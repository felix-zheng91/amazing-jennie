import React from "react";
import { useWindowScroll } from "./hooks/useWindowScroll";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [y] = useWindowScroll();
  const [message, setMessage] = useLocalStorage("Hook-key", "寻欢");

  setTimeout(() => {
    setMessage("阿飞");
  }, 5000);

  return (
    <div style={{ height: "1200px" }}>
      {y}:{message}
    </div>
  );
}

export default App;
