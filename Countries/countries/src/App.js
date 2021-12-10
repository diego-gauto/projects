import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [ordenedCountries, setOrdenedCountries] = useState([]);
  const [values, setValues] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const handleChange = (event) => {
    const beginCountryName = event.target.value;
    setValues(beginCountryName);
    console.log(beginCountryName);
    getCountries(beginCountryName);
  };

  async function getCountries(beginCountryName) {
    let searchQuery = "https://restcountries.com/v3.1/all";
    if (beginCountryName)
      searchQuery = `https://restcountries.com/v3.1/name/${beginCountryName}`;

    const response = await fetch(searchQuery);
    const countries = await response.json();
    console.log(countries);
    setSelectedCountries(countries);

    const countriesName = countries
      .map((element) => {
        return element.name.official;
      })
      .sort();
    setOrdenedCountries(countriesName);
  }

  return (
    <>
      <div>
        <input
          id="country"
          name="country"
          type="text"
          value={values}
          onChange={handleChange}
        />
        <h1>Listado de paises por nombre</h1>
        <ul>
          {ordenedCountries.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
        {selectedCountries.length === 1 ? (
          <img src={selectedCountries[0].flags.svg} alt="flag" />
        ) : (
          <p>Hay mas de un pais en la busqueda</p>
        )}
      </div>
    </>
  );
}

export default App;
