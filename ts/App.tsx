import { FC } from 'react';

interface Props {
  name: string;
  age?: number;
}

const App: FC<Props> = () => {
  return <div>test</div>;
};

export default App;
