import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Catalogue</a></li>
        <li><a href="/recipes">Recipes</a></li>
        <li>
          Filter by category:
        </li>
        <li>Search recipes</li>
      </ul>
    </nav>
  );
};
 
export default Navbar;