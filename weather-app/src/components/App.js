import React from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

function App({ location, forecasts }) {
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />

      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

export default App;
