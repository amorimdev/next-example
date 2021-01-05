import { useRouter } from 'next/router';
import useSWR from 'swr';
import dynamic from 'next/dynamic';

import { ComponentInterface } from '../interfaces';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const recursiveComponentsGenerate = (
  components: ComponentInterface[]
): ComponentInterface[] =>
  components.map((component: ComponentInterface) => ({
    ...component,
    Component: dynamic(() => import(`../components/${component.name}`)),
    ...(component.childrens && {
      childrens: recursiveComponentsGenerate(component.childrens),
    }),
  }));

const recursiveComponentsRender = (components: ComponentInterface[]) =>
  components.map(
    (
      { Component, name, props, childrens }: ComponentInterface,
      index: number
    ) => (
      <Component key={name + index} {...props}>
        {childrens && recursiveComponentsRender(childrens)}
      </Component>
    )
  );

const Shell = () => {
  const router = useRouter();
  const { data, error } = useSWR(`/api${router.pathname}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const components: ComponentInterface[] = recursiveComponentsGenerate(
    data.components
  );

  return <div>{recursiveComponentsRender(components)}</div>;
};

export default Shell;
