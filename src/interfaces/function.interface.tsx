import { FunctionPropsInterface } from './Function/props.interface';

export interface FunctionInterface {
  functions: FunctionPropsInterface[];
  [key: string]: any;
}
