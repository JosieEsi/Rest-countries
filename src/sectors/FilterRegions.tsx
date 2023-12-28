import React, {useState} from 'react'
import { CountriesInterface, RegionsInterface } from '../interface'

const regions: RegionsInterface[] =[
    {
        label: "Africa",
        name: "africa",
    },
    {
        label:"America",
        name: "america",
    },
    {
        label:"Asia",
        name:"asia",
    },
    {
        label:"Europe",
        name:"europe",
    },
    {
        label:"Oceania",
        name:"oceania",
    },
]

const FilterRegions = ({setCountries}: {setCountries: (value: CountriesInterface) => void}) => {

    const [isVisible, setVisibility] = useState(false)
    const [activeRegion, setActiveRegion] = useState("")

const fetchRegion = async (regionName: string) => {
    let url = "https://restcountries.com/v2/all";

    if (regionName !== "all") {
      url = `https://restcountries.com/v2/region/${regionName}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
  };

  const toggleDropdown = () => {
    setVisibility(!isVisible);
  };

  return (
    <section className={isVisible ? "active-regions select-region" : "select-region"} id="regions">
      <summary onClick={toggleDropdown}>
        {activeRegion ? activeRegion : "Filter by Region"}
      </summary>
      {isVisible ? (
        <div className="region-list">
          {regions.map((region) => (
            <li
              onClick={() => {
                fetchRegion(region.name);
                setActiveRegion(region.label);
                toggleDropdown();
              }}
              value={region.name}
              key={region.label}
            >
              {region.label}
            </li>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default FilterRegions;