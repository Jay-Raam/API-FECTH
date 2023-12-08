import React, { useEffect, useState } from 'react';
import "./api.css";
const API = () => {
  const [data, setData] = useState(null);
  const [showCountryDetails, setShowCountryDetails] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
        console.log(fetchedData);
      })
      .catch((error) => console.log(error));
  }, []);

  const toggleClick = () => {
    setShowCountryDetails(!showCountryDetails);
  };

  return (
    <div className="container">
      <button onClick={toggleClick}>{showCountryDetails ? 'Country' : 'Country'}</button>
      {data && (
        <ul className="onee">
          {data.map((country) => (
            <li className="twoo" key={country.name.common}>
              {showCountryDetails ? (
                <>
                  <h2>{country.name.common}</h2>
                  {country.flags && (
                    <img
                      src={country.flags.svg}
                      className="image"
                      alt={country.name.common}
                      style={{ maxWidth: '200px' }}
                    />
                  )}
                  <div>
                    {country.capital && <p className="para">Capital: {country.capital}</p>}
                    {country.demonyms?.eng?.m && <p className="para">{country.demonyms?.eng?.m}</p>}
                    {country.currencies && (
                      <div>
                        <ul>
                          {Object.keys(country.currencies).map((currencyCode) => (
                            <li key={currencyCode}>
                              {country.currencies[currencyCode].name} ({country.currencies[currencyCode].symbol})
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default API;
