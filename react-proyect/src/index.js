import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner/Banner';
import './app.scss'


ReactDOM.render(
  <React.StrictMode>
    <Banner title="Mi pagina en React" subtitle="Bajada de react"></Banner>
  </React.StrictMode>,
  document.getElementById('app')
);