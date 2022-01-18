import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App title="Mount Si" mapstyle="mapbox://styles/kevek/ckfmq9lqb017x19l9zsuvjwvo" Lat={47.495} Lng={-121.737} />
    <App title="Mount Teneriffe" mapstyle="mapbox://styles/kevek/cky2bl03a0idf14myft9wh1ao" Lat={47.502} Lng={-121.697} />
    <App title="Mailbox Peak" mapstyle="mapbox://styles/kevek/ckyhun2330gf214pdia09g6qj" Lat={47.461} Lng={-121.653} />
  </React.StrictMode>,
  document.getElementById('root')
);
