import React from 'react'
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseDetail from '../house';
import Header from './header';
import HouseFilter from './house-filter';

import About from './About';
import Article from './Article';
import Shop from './Shop';
import Nav from './Nav';
import { BrowserRouter as Router , Link, Switch, Route} from 'react-router-dom'

const AppPresentation = (props) => {

  let activeComponent = null; 
  if (props.country){
    activeComponent = <SearchResults country={props.country} filteredHouses={props.filteredHouses} setActiveHouse={props.setActiveHouse}></SearchResults>
  }
  if (props.activeHouse){
    activeComponent = <HouseDetail house={props.activeHouse} />
  }
  if( !activeComponent ) {
    activeComponent = <FeaturedHouse house={props.featuredHouse} />
  }

  return (
    <Router>
      <div className="container">
      <Nav />
      <Header subtitle="Nice moves" />
      <HouseFilter filterHouses={props.filterHouses}
      countries={props.countries} />
      {activeComponent}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/:name" component={Article} />
      </Switch>
    </div> 
    </Router>

   );
}

export const Home = () => {
  return ( 
    <div>
      <h1>Home</h1>
    </div>
    );
} 
 
export default AppPresentation;