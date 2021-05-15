import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fontawesome'
import "leaflet/dist/leaflet.css"
ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
serviceWorker.unregister();
