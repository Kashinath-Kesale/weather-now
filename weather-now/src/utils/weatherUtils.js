export function getBackgroundColor(weatherCode) {
  if (!weatherCode && weatherCode !== 0) return "#f1f5f9"; 

  switch (true) {
    // ☀️
    case weatherCode === 0:
      return "#fef08a"; 

    // Mainly clear / partly cloudy
    case [1, 2, 3].includes(weatherCode):
      return "#bae6fd"; 

    // Fog, mist
    case [45, 48].includes(weatherCode):
      return "#e2e8f0"; 

    // Light rain
    case [51, 53, 55, 56, 57, 61, 63, 65].includes(weatherCode):
      return "#93c5fd"; 

    // Thunderstorm
    case [95, 96, 99].includes(weatherCode):
      return "#818cf8";

    // Snow
    case [71, 73, 75, 77, 85, 86].includes(weatherCode):
      return "#e0f2fe"; 

    // Heavy rain
    case [80, 81, 82].includes(weatherCode):
      return "#60a5fa"; 

    // Default 
    default:
      return "#f1f5f9"; 
  }
}

export function getWeatherMessage(weatherCode) {
  if (!weatherCode && weatherCode !== 0) return "Stay safe and enjoy your day!";

  switch (true) {
    case weatherCode === 0:
      return "Enjoy the sunshine! Don’t forget sunscreen 😎";

    case [1, 2, 3].includes(weatherCode):
      return "Partly cloudy skies — a pleasant day ahead ⛅";

    case [45, 48].includes(weatherCode):
      return "Low visibility due to fog — drive carefully 🌫️";

    case [51, 53, 55, 56, 57, 61, 63, 65].includes(weatherCode):
      return "Light rain expected — carry an umbrella 🌂";

    case [80, 81, 82].includes(weatherCode):
      return "Heavy showers today — stay dry and safe 🌧️";

    case [95, 96, 99].includes(weatherCode):
      return "Severe thunderstorm risk — stay indoors ⛈️";

    case [71, 73, 75, 77, 85, 86].includes(weatherCode):
      return "Snowy conditions — bundle up and stay warm ❄️";

    default:
      return "Stay safe and enjoy your day!";
  }
}
