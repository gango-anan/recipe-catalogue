import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import RecipeList from '../containers/RecipeList';
import Recipe from './Recipe';
import RecipeCard from '../containers/RecipeCard';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={RecipeList} />
          <Route path='/recipe' component={Recipe} />
          <Route path='/:recipeName' component={RecipeCard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
