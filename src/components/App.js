import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import RecipeList from '../containers/RecipeList';
import Recipe from './Recipe';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path='/' component={RecipeList} />
        <Route path='/recipe' component={Recipe} />
      </div>
    </BrowserRouter>
  );
}

export default App;
