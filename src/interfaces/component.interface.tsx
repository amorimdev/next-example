import { ComponentType } from 'react';

export interface ComponentInterface {
  name: string;
  props: object;
  childrens: ComponentInterface[];
  Component: ComponentType;
}
