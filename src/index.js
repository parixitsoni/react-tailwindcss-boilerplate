import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react"
import { createStore } from 'redux';
import allReducers from './reducers';
import './tailwind.output.css';
import './index.css';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
