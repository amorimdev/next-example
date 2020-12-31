import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => setCounter(counter + 1);
  const subCounter = () => setCounter(counter - 1);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={addCounter}>Add</button>
      <button onClick={subCounter}>Sub</button>
    </div>
  );
};

export default Counter;
