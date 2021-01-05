import { Children, cloneElement, Fragment, ReactElement } from 'react';

import { FunctionInterface, FunctionPropsInterface } from '../../interfaces';
import { functions } from '../../utils';

const component = (props: FunctionInterface) => {
  props.functions = props.functions.map((item: FunctionPropsInterface) => ({
    ...item,
    func: props[item.bind],
  }));

  const childrenWithProps = Children.map(
    props.children,
    (element: ReactElement) => cloneElement(element, { ...functions(props) })
  );

  return <Fragment>{childrenWithProps}</Fragment>;
};

export default component;
