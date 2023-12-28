import React from "react";
import ReactDOM from 'react-dom'
import Toggle from "./Toggle"

const Header = () => {
    return (
      <header>
       <nav>
        <h1>Where in the World!</h1>
        <Toggle />
       </nav>
      </header>
    );
  }

  export default Header