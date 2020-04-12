import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router , Link, Switch, Route} from 'react-router-dom'

const Article = ({match}) => {

  useEffect( () => {
    console.log('effecting');
    console.log(match.params.name);
    // only runs when component mounts
  }, [])
  
  const [item, setItem] = useState({});
  
  return ( 
    <div>
      <h1>Article page</h1>
      {match.params.name}
    </div>
  );
}
 
export default Article;