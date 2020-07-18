import React from 'react'
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseDetail from '../house';
import Header from './header';
import HouseFilter from './house-filter';
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
      <Header subtitle="Nice moves" />
      <HouseFilter filterHouses={props.filterHouses}
      countries={props.countries} />
      {activeComponent}
    </div> 
    </Router>

   );
}
 
export default AppPresentation;