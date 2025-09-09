import React from "react";
import { codeToIcon, codeToLabel } from "../utils";
import { getBackgroundColor, getWeatherMessage } from "../utils/weatherUtils";

export default function WeatherCard({ place, current }) {
  if (!current) return null;

  const { temperature, windspeed, winddirection, weathercode, time } = current;

  return (
    <div
      className="weatherCard flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl shadow-md text-gray-800 transition-colors duration-300"
      style={{ backgroundColor: getBackgroundColor(weathercode) }}
    >
      <div className="left flex items-center gap-3">
        <div className="icon text-5xl sm:text-6xl">{codeToIcon(weathercode)}</div>
        <div className="temp text-3xl sm:text-4xl font-semibold">
          {Number(temperature).toFixed(1)}°C
        </div>
      </div>

      <div className="right flex flex-col text-center sm:text-left text-sm">
        <div className="place text-lg font-medium">{place}</div>
        <div className="desc text-gray-700">{codeToLabel(weathercode)}</div>
        <div className="meta mt-1 space-y-1">
          <div>Wind: {windspeed} km/h</div>
          <div>Dir: {winddirection}°</div>
          <div className="time text-xs text-gray-600">
            Updated: {new Date(time).toLocaleString()}
          </div>
        </div>

        {/* Weather safety message */}
        <p className="text-center sm:text-left text-sm italic text-gray-700 mt-3">
          {getWeatherMessage(weathercode)}
        </p>
      </div>
    </div>
  );
}
