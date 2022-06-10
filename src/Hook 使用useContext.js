import React, { createContext, useContext, useState } from "react";

// useContext 参数传递
const Context = createContext();

function ComA() {
  const count = useContext(Context);
  return (
    <div>
      This is ComA
      <p>{count} From App</p>
      <ComC />
    </div>
  );
}

function ComC() {
  const count = useContext(Context);
  return (
    <div>
      This is ComC <p>{count} From App</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <Context.Provider value={count}>
      <div>
        <ComA />
        <button onClick={() => setCount(count + 1)}>Change Count</button>
      </div>
    </Context.Provider>
  );
}

export default App;
