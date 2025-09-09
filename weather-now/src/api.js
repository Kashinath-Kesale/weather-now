const GEOCODING = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST = "https://api.open-meteo.com/v1/forecast";


export async function geocodeCity(name) {
  if (!name) throw new Error("Empty query");
  const url = `${GEOCODING}?name=${encodeURIComponent(name)}&count=5&language=en`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Geocoding error (${res.status})`);
  const json = await res.json();
  return json.results || []; 
}


export async function fetchWeather({ latitude, longitude, days = 5, timezone = "auto" }) {
  const daily = "temperature_2m_max,temperature_2m_min,weathercode";
  const url = `${FORECAST}?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=${daily}&forecast_days=${days}&timezone=${encodeURIComponent(timezone)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Forecast error (${res.status})`);
  return await res.json();
}
