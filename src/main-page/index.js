import React, { Component } from 'react'
import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import HouseDetail from '../house';

class App extends Component {

    // initialise states with constructor
   // constructor(props) {
      /* super(props)
      this.state = {}; */
   //}
  
    // ...Alternatively just set initial values
    state = { }

    // Error boundary.
    // Catch errors in a child component
    componentDidCatch(error, info) {
      this.setState({hasError: true})
      console.log(error, info)
    }

    // Just after render. 
    // Do initialisations
    componentDidMount(){
      this.fetchHouses();
    }

    /* 
    Every state updates re-render
    Prevent with 'shouldComponentUpdate' method
    */

    fetchHouses = () => {
      fetch('/houses.json')
      .then( response => response.json())
      // Store allHouses as a private var, not availabe in Render
      .then(allHouses => {
         this.allHouses = allHouses;
         this.determineFeaturedHouse();
         this.determineUniqueCountries();
      })
    }

    filterHouses = (country) => {
      console.log('filtered on', country)
      this.setState({ activeHouse: null })
      const filteredHouses = this.allHouses.filter( h => h.country == country )
      this.setState({filteredHouses})
      this.setState({ country })
    }

    determineFeaturedHouse = () => {
      if (this.allHouses){
        const randomIndex = Math.floor( Math.random() * this.allHouses.length);
        const featuredHouse = this.allHouses[randomIndex];
        // Store in state
        this.setState({ featuredHouse })
      }
    }

    determineUniqueCountries = () => {
      const countries = this.allHouses ?
            Array.from( new Set(this.allHouses.map( (h) => h.country) ))
            : [];
      // Add blank option as first in list
      countries.unshift(null);
      this.setState({countries});
    }

    setActiveHouse = (house) => {
      console.log(house)
      this.setState({ activeHouse: house });
    }

    render() { 
      let activeComponent = null;

      if (this.state.country){
        activeComponent = <SearchResults filteredHouses={this.state.filteredHouses} setActiveHouse={this.setActiveHouse}></SearchResults>
      }
      if (this.state.activeHouse){
        activeComponent = <HouseDetail house={this.state.activeHouse} />
      }
      if( !activeComponent ) {
        activeComponent = <FeaturedHouse house={this.state.featuredHouse} />
      }

      if ( this.state.hasError ) {
        return (
          <div className="container">
            <Header subtitle="Nice moves" />
            <p>Error</p>
          </div>
          );
      }
      return (
          <div className="container">
            <Header subtitle="Nice moves" />
            <HouseFilter filterHouses={this.filterHouses} countries={this.state.countries} />
            {activeComponent}
          </div>
       );
      }
}

export default App;