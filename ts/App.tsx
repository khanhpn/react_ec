import { FC } from 'react';
import {arrT, makeArr, test1} from './lib/index';

interface Props {
  name?: string;
  age?: number;
}

const App: FC<Props> = () => {
  console.log(arrT([1,2]));
  console.log(makeArr("1"));
  console.log(makeArr(2));

  console.log(test1(1, "2"));
  return <div>test</div>;
};

export default App;
