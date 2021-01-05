import { Children, cloneElement, Fragment, ReactElement } from 'react';

import { FunctionInterface } from '../../interfaces';
import { functions } from '../../utils';

const component = (props: FunctionInterface) => {
  const childrenWithProps = Children.map(
    props.children,
    (element: ReactElement) => cloneElement(element, { ...functions(props) })
  );

  return <Fragment>{childrenWithProps}</Fragment>;
};

export default component;
