import {
  useState,
  Children,
  cloneElement,
  Fragment,
  ReactElement,
} from 'react';

import { CounterPropsInterface } from '../../interfaces';

const component = (props: CounterPropsInterface) => {
  const [counter, setCounter] = useState(props.counter);

  const addCounter = () => setCounter(counter + 1);
  const subCounter = () => setCounter(counter - 1);

  const childrenWithProps = Children.map(
    props.children,
    (element: ReactElement) => cloneElement(element, { addCounter, subCounter }),
  );

  return (
    <Fragment>
      <div>{counter}</div>
      {childrenWithProps}
    </Fragment>
  );
};

export default component;
