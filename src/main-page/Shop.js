import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router , Link, Switch, Route} from 'react-router-dom'

const Shop = () => {

  useEffect( () => {
    console.log('effecting');
    fetchItems()
    // only runs when component mounts
  }, [])
  
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch( `http://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=${process.env.REACT_APP_NEWS_KEY}`);
    let items = await data.json();
    console.log(items)
    items = items.articles;
    console.log(items)
    setItems(items)
  }


  return ( 
    <div>
      <h1>Shop page</h1>
      {
        items.map( (item, i) => {
          return (
            <h4 key={i}>
              <Link to={`/shop/${item.title.replace(' ', '-')}`}>{item.title}</Link>
            </h4>
          )
        })
      }
    </div>
  );
}
 
export default Shop;