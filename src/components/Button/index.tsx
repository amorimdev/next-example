import { Fragment } from 'react';

import { ButtonPropsInterface, FunctionPropsInterface } from '../../interfaces';
import Function from '../Function';

const component = (props: ButtonPropsInterface) => {
  return (
    <Fragment>
      <Function
        {...props}
        functions={props.functions.map((item: FunctionPropsInterface) => ({
          ...item,
          func: props[item.bind],
        }))}
      >
        <button>{props.text}</button>
      </Function>
      {props.children}
    </Fragment>
  );
};

export default component;
