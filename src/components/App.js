import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import RecipeList from '../containers/RecipeList';
import RecipeCard from '../containers/RecipeCard';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={RecipeList} />
        <Route path="/:recipeName" component={RecipeCard} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
