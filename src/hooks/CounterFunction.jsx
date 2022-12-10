import { Fragment, useEffect, useState } from "react";

const CounterF = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `${name} has clicked ${count} times`;

    return () => {
      //component will unmount
      console.log("Clean up");
    };
  }, []);

  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {" "}
        {name} has clicked {count} times!
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </Fragment>
  );
};

export default CounterF;
