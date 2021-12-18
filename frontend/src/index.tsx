import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { config } from './overmind';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

const overmind = createOvermind(config);

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <ScopedCssBaseline>
        <App />
      </ScopedCssBaseline>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
