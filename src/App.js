import React, { Component, useEffect, useRef } from "react";

// useRef
class TestComponent extends Component {
  state = {
    msg: "Test MSG",
  };

  logInfo = () => {
    console.log(this.state.msg);
  };

  render() {
    return <div>Test Component</div>;
  }
}

function App() {
  const ref = useRef(null);
  const h1 = useRef(null);

  useEffect(() => {
    console.log(ref);
    console.log(h1);
    ref.current.logInfo();
    console.log(h1.current);
    console.log(ref.current.state.msg);
    return () => {};
  }, []);

  return (
    <div>
      <TestComponent ref={ref} />
      <h1 ref={h1}>this is h1</h1>
    </div>
  );
}

export default App;
