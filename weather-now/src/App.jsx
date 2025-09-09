import React, { useEffect, useState } from "react";
import { geocodeCity, fetchWeather } from "./api";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

export default function App() {
  const [lastCity, setLastCity] = useState(() => localStorage.getItem("lastCity") || "");
  const [selectedPlace, setSelectedPlace] = useState(null); 
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (lastCity) {
      handleSearch({ input: lastCity, auto: true });
    }
  }, []);

  async function handleSearch({ input, auto = false }) {
    setError("");
    setWeather(null);
    setSuggestions([]);
    setLoading(true);

    try {
      const results = await geocodeCity(input);
      if (!results.length) {
        throw new Error("No places found");
      }
      const exact = results.find(
        (r) => r.name.toLowerCase() === input.toLowerCase() && r.country
      );
      const chosen = exact || results[0];

      setSelectedPlace(chosen);
      localStorage.setItem("lastCity", chosen.name);
      setLastCity(chosen.name);

      const w = await fetchWeather({
        latitude: chosen.latitude,
        longitude: chosen.longitude,
        days: 5,
        timezone: "auto",
      });
      setWeather(w);
    } catch (e) {
      setError(e.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Weather Now</h1>
        <p className="subtitle">Current weather + 5-day forecast</p>
      </header>

      <SearchBar onSelect={handleSearch} />

      {loading && <div className="status">Loading…</div>}
      {error && <div className="status error">Error: {error}</div>}

      {selectedPlace && weather && weather.current_weather && (
        <>
          <WeatherCard
            place={`${selectedPlace.name}, ${selectedPlace.country || ""}`}
            current={weather.current_weather}
          />

          {weather.daily && <Forecast daily={weather.daily} />}
        </>
      )}

      {/* <footer className="footer">
        <div>Candidate ID: <strong>Naukri0925</strong></div>
      </footer> */}
    </div>
  );
}
