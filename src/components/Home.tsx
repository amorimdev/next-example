import { ComponentType } from 'react';

const Home = ({
  url,
  children,
}: {
  url: string;
  children: ComponentType[];
}) => {
  return (
    <div>
      <h1>Home {url}</h1>
      {children}
    </div>
  );
};

export default Home;
