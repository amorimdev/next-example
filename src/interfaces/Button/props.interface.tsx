import { PropsInterface } from '../props.interface';
import { FunctionPropsInterface } from '../Function/props.interface';

export interface ButtonPropsInterface extends PropsInterface {
  text: string;
  functions: FunctionPropsInterface[];
  [key: string]: any;
}
