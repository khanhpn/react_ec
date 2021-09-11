import { FC } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

interface Props {
  name: string;
  age?: number;
}

const App: FC<Props> = () => {
  return <div>test</div>;
};

export default App;
