import { Fragment } from 'react';

import { ButtonPropsInterface } from '../../interfaces';
import Function from '../Function';

const component = (props: ButtonPropsInterface) => {
  return (
    <Fragment>
      <Function {...props}>
        <button>{props.text}</button>
      </Function>
      {props.children}
    </Fragment>
  );
};

export default component;
