import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export let counter = 0;
let Timer = () => {

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

  counter++;
  return counter;

}

setInterval(Timer, 1000);