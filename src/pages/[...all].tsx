import { useRouter } from 'next/router';
import swr from 'swr';
import dynamic from 'next/dynamic';

import { ComponentInterface } from '../interfaces';
import { fetcher } from '../utils';

const recursiveComponentsGenerate = (
  components: ComponentInterface[],
): ComponentInterface[] =>
  components.map((item: ComponentInterface) => ({
    ...item,
    Component: dynamic(() => import(`../components/${item.name}`)),
    ...(item.childrens && {
      childrens: recursiveComponentsGenerate(item.childrens),
    }),
  }));

const recursiveComponentsRender = (components: ComponentInterface[]) =>
  components.map(
    (
      { Component, name, props, childrens }: ComponentInterface,
      index: number,
    ) => (
      <Component key={name + index} {...props}>
        {childrens && recursiveComponentsRender(childrens)}
      </Component>
    ),
  );

const component = () => {
  const router = useRouter();
  const { data, error } = swr(`/api${router.pathname}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const components: ComponentInterface[] = recursiveComponentsGenerate(
    data.components,
  );

  return <div>{recursiveComponentsRender(components)}</div>;
};

export default component;
