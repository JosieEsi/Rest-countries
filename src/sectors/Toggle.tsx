
import React, { useState } from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/'
import { faMoon as solidMoon } from '@fortawesome/free-solid-svg-icons'
import {faMoon as regularMoon} from '@fortawesome/free-regular-svg-icons'




function Toggle () {
const [darkMode, setDarkMode] = useState(false)   
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  }
  return(
    <div className = "toggle" onClick={toggleDarkMode}>
        {darkMode ? (
            <div className="toggle-light">
            <FontAwesomeIcon icon={regularMoon} />
              <p>Light Mode</p>
            </div>
            ):(
            <div className="toggle-dark">
                 <FontAwesomeIcon icon={solidMoon} />
               <p>Dark Mode</p> 
            </div>
            )
        }
    </div>
  );
}

export default Toggle