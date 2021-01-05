import { Fragment } from 'react';

const Button = ({ text, functions, children, ...props }: any) => {
  const onClick = functions.find((item: any) => item.name === 'onClick');

  return (
    <Fragment>
      <button onClick={props[onClick.bind]}>{text}</button>
      {children}
    </Fragment>
  );
};

export default Button;
