import {
  ComponentType,
  useState,
  Children,
  cloneElement,
  Fragment,
} from 'react';

const Counter = ({ children }: { children: ComponentType[] }) => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => setCounter(counter + 1);
  const subCounter = () => setCounter(counter - 1);

  const childrenWithProps = Children.map(children, (element) =>
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
