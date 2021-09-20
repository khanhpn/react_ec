import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import App from './App';

const store = configureStore();
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
