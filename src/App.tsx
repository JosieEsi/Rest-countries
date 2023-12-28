import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./sectors/Header"
import Search from './sectors/Search';


// Import necessary packages and icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon as solidMoon } from '@fortawesome/free-solid-svg-icons';
import {faMoon as regularMoon} from '@fortawesome/free-regular-svg-icons';


// Add the icons to the library
library.add(solidMoon, regularMoon);

// ... rest of your code

const App = () => {

  const [countries, setCountries] = useState([]);
  const handleSearch = (value: string) => {
    // Implement your search logic here
  };
  return (
    <React.Fragment>
      <Header />
      <Search 
        searchCountries={handleSearch} 
        setCountries={setCountries} 
        searchInput={``}
      
      />
    </React.Fragment>
    
     
  );
}

export default App;
