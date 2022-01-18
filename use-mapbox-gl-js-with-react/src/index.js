import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App title="Mount Si" mapstyle="mapbox://styles/kevek/ckfmq9lqb017x19l9zsuvjwvo" Lat={47.495} Lng={-121.737} />
  </React.StrictMode>,
  document.getElementById('root')
);
