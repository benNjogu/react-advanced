import { Fragment, useState } from "react";

const CounterF = () => {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </Fragment>
  );
};

export default CounterF;
