import { useState, type BaseSyntheticEvent } from "react";
import { temperatureData } from "../data/temperatures";
import TemperatureInputComponent from "../components/TemperatureInput";
import "../styles/Home.css";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const [temperatures, setTemperature] = useState(temperatureData);

  function handleTempOnChange(event: BaseSyntheticEvent) {
    const kelvinUpdate = temperatures.find(
      (temperature) => temperature.type === event.target.id,
    );
    console.log(kelvinUpdate);

    let newTemperatureStates = temperatures
      .map(
        // Intermediate step to create a "normalized" value or value that
        // all temperature units can convert from including temperature scales
        // such as the Rankine scale etc.
        (temp) => {
          // A 2 step mapping, determines which value should not be calculated
          // and which should as well as "normalizing" the scale
          if (temp.type === event.target.id) {
            temp.calculate = false;
          } else {
            temp.calculate = true;
          }
          return {
            ...temp,
            value: kelvinUpdate?.convertToKelvin(Number(event.target.value)),
          };
        },
      )
      .map((temp) => {
        let color: string;
        if (temp.value) {
          if (temp.value < 10 + 273.15) {
            color = "#3498db"; // Cold - Blue
          } else if (temp.value < 25 + 273.15) {
            color = "#f1c40f"; // Mild - Yellow
          } else {
            color = "#e74c3c"; // Hot - Red
          }
        }

        if (temp.calculate) {
          return {
            ...temp,
            value: temp.convertFromKelvin(temp.value ? temp.value : 0),
            color: color,
          };
        } else {
          return { ...temp, value: Number(event.target.value), color: color };
        }
      });
    console.log(newTemperatureStates);
    setTemperature(newTemperatureStates);
  }

  return (
    <>
      <Navbar />
      <header>
        <h1 className="temperature-header">TEMPERATURE CONVERTER</h1>
      </header>

      <div
        className="temperature-input-output-container"
        style={{ color: color }}
      >
        {temperatures.map((temperature) => {
          return (
            <TemperatureInputComponent
              temperature={temperature}
              handleTempOnChange={handleTempOnChange}
            />
          );
        })}
      </div>
    </>
  );
}
