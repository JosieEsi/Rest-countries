import React from 'react';
import { SearchProps } from '../interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' ;
import FilterRegions from './FilterRegions';



const Search = ({searchCountries, setCountries, searchInput}: SearchProps) => {
    return (
        <section className='search-container'>
            <div className='input-block'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
                <input
                type="search"
                name="search"
                id="search"
                placeholder='Search for a country...'
                value={searchInput}
                onChange={(e) => searchCountries(e.target.value)}
                />
            </div>
           <FilterRegions setCountries={setCountries}/>
        </section>
    )

}


export default Search