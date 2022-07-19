import { FC, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "antd";

const App: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Button type={"primary"} onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </div>
  );
};

export default App;
