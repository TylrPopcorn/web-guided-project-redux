import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';

//0-0-0-0-0-0-0-\\
import { Provider } from 'react-redux'
import { legacy_createStore } from 'redux'; //redux toolkit
import rootReducer from "./reducers/combinedReducers"

const store = legacy_createStore(rootReducer)

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  rootElement);

//Redux - state management tool. {State, setSate, props}
//Redux Features:
//1. Global management of state 
//2. Connection to components 
//3. Scalability