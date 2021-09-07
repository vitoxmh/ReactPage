import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Nosotros from './pages/nosotros/Nosotros';
import Contacto from './pages/contacto/Contacto';
import Galeria from './pages/galeria/Galeria';

function App() {
  return (
  <Router>
      <div>
        <h1>Hola Mundo</h1>
        <nav className="nav">
          <NavLink to="/" activeClassName="sel" exact>Inicio</NavLink>
          <NavLink to="/nosotros" activeClassName="sel">Nosotros</NavLink>
          <NavLink to="/contacto" activeClassName="sel">Contacto</NavLink>
          <NavLink to="/galeria" activeClassName="sel">Galeria</NavLink>
        </nav>
        <hr />
        <Switch>
          <Route path="/contacto">
            <Contacto></Contacto>
          </Route>
          <Route path="/nosotros">
            <Nosotros></Nosotros>
          </Route>
          <Route path="/galeria">
           <Galeria></Galeria>
          </Route>
          <Route path="/">
            Pagina de Inicio
          </Route>
        </Switch>
      </div>

  </Router>
  );
}

export default App;
