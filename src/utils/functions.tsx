import { FunctionInterface, FunctionPropsInterface } from '../interfaces';

export const functions = (props: FunctionInterface) => {
  const functionProps: { [key: string]: () => void } = {};

  props.functions
    .map((item: FunctionPropsInterface) => ({
      ...item,
      func: props[item.bind],
    }))
    .forEach((item) => {
      functionProps[item.name] = item.func;
    });

  return functionProps;
};
