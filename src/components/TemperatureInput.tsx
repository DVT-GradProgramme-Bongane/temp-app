import type { BaseSyntheticEvent } from "react";
import { type Temperature } from "../data/temperatures";
import "../styles/TemperatureInput.css";

interface TemperatureInputProps {
  temperature: Temperature;
  handleTempOnChange: (event: BaseSyntheticEvent) => void;
}

export default function TemperatureInputComponent({
  temperature,
  handleTempOnChange,
}: TemperatureInputProps) {
  return (
    <>
      <div className="temperature-input">
        <input
          type="number"
          step={1}
          id={temperature.type}
          value={temperature.value}
          onChange={handleTempOnChange}
        />
        <label htmlFor={temperature.type}>{temperature.symbol}</label>
      </div>
    </>
  );
}
