import React from "react";
import { formatDateISO, codeToIcon, codeToLabel } from "../utils";
import { getBackgroundColor } from "../utils/weatherUtils";

export default function Forecast({ daily }) {
  if (!daily) return null;
  const {
    time = [],
    temperature_2m_max = [],
    temperature_2m_min = [],
    weathercode = [],
  } = daily;

  return (
    <div className="forecastRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
      {time.map((iso, i) => (
        <div
          className="forecastItem p-3 rounded-xl shadow-md text-center transition-colors duration-300"
          key={iso}
          style={{ backgroundColor: getBackgroundColor(weathercode[i]) }}
        >
          <div className="fDate font-medium">{formatDateISO(iso)}</div>
          <div className="fIcon text-3xl my-2">{codeToIcon(weathercode[i])}</div>
          <div className="fTemps flex justify-center gap-2 text-lg">
            <span className="max font-semibold">
              {Math.round(temperature_2m_max[i])}°
            </span>
            <span className="min text-gray-700">
              {Math.round(temperature_2m_min[i])}°
            </span>
          </div>
          <div className="fLabel text-sm mt-1">{codeToLabel(weathercode[i])}</div>
        </div>
      ))}
    </div>
  );
}
