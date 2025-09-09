export const weatherCodeMap = {
  0: { label: "Clear", icon: "☀️" },
  1: { label: "Mainly clear", icon: "🌤️" },
  2: { label: "Partly cloudy", icon: "⛅" },
  3: { label: "Overcast", icon: "☁️" },
  45: { label: "Fog", icon: "🌫️" },
  48: { label: "Depositing rime fog", icon: "🌫️" },
  51: { label: "Light drizzle", icon: "🌦️" },
  53: { label: "Moderate drizzle", icon: "🌦️" },
  55: { label: "Dense drizzle", icon: "🌧️" },
  61: { label: "Light rain", icon: "🌧️" },
  63: { label: "Moderate rain", icon: "🌧️" },
  65: { label: "Heavy rain", icon: "🌧️" },
  71: { label: "Snow", icon: "❄️" },
  80: { label: "Rain showers", icon: "🌧️" },
  81: { label: "Moderate showers", icon: "🌧️" },
  82: { label: "Violent showers", icon: "⛈️" },
  95: { label: "Thunderstorm", icon: "⛈️" },
  96: { label: "Thunderstorm with hail", icon: "⛈️" },
  99: { label: "Severe thunderstorm", icon: "⛈️" },
};

export function codeToLabel(code) {
  return weatherCodeMap[code] ? weatherCodeMap[code].label : "Unknown";
}
export function codeToIcon(code) {
  return weatherCodeMap[code] ? weatherCodeMap[code].icon : "🌈";
}

export function formatDateISO(isoDateStr) {
  const d = new Date(isoDateStr);
  return d.toLocaleDateString(undefined, { weekday: "short", day: "2-digit", month: "short" });
}
