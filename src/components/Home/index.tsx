import { HomePropsInterface } from '../../interfaces';

const component = (props: HomePropsInterface) => {
  return (
    <div>
      <h1>Home {props.url}</h1>
      {props.children}
    </div>
  );
};

export default component;
