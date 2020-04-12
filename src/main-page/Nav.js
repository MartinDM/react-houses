import React from 'react';
import { Link } from 'react-router-dom'


const Nav = () => {
  return ( 
   <nav>
    <p>Logo</p>
      <ul>
       <Link to="/"><li>Home</li></Link>
       <Link to="/about"><li>About</li></Link>
       <Link to="/shop"><li>Shop</li></Link>
    </ul>
   </nav>
  );
}
 
export default Nav