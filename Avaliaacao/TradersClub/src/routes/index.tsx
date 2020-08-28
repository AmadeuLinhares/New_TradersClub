import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Listagem from '../pages/Listagem';
import Editar from '../pages/Editar';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Cadastro" component={Cadastro} />
      <Route path="/Editar/:id" exact component={Editar} />
      <Route path="/Listagem" component={Listagem} />
    </Switch>
  );
};
export default Routes;
