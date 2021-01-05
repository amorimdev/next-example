import {
  useState,
  Children,
  cloneElement,
  Fragment,
  ReactElement,
} from 'react';

const Counter = ({ children }: { children: ReactElement[] }) => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => setCounter(counter + 1);
  const subCounter = () => setCounter(counter - 1);

  const childrenWithProps = Children.map(children, (element: ReactElement) =>
    cloneElement(element, { addCounter, subCounter })
  );

  return (
    <Fragment>
      <div>{counter}</div>
      {childrenWithProps}
    </Fragment>
  );
};

export default Counter;
