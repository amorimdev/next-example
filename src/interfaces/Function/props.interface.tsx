import { PropsInterface } from '../props.interface';

export interface FunctionPropsInterface extends PropsInterface {
  name: string;
  bind: string;
  func: () => void;
}
