import { useState, type BaseSyntheticEvent } from "react";
import { temperatureData } from "../data/temperatures";

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
        if (temp.calculate) {
          return {
            ...temp,
            value: temp.convertFromKelvin(temp.value ? temp.value : 0),
          };
        } else {
          return { ...temp, value: Number(event.target.value) };
        }
      });
    console.log(newTemperatureStates);
    setTemperature(newTemperatureStates);
  }

  return (
    <>
      <header>
        <h1 className="temperature-header">Temperature Converter</h1>
      </header>

      <div className="temperature-input-output-container">
        {temperatures.map((temperature) => {
          return (
            <div className="temperature-input">
              <label htmlFor={temperature.type}>{temperature.type}</label>
              <input
                type="number"
                step={1}
                id={temperature.type}
                value={temperature.value}
                onChange={handleTempOnChange}
              />
            </div>
          );
        })}
        {/* <div className="temperature-input">
          <label htmlFor="celsius">Celcius</label>
          <input
            id="celsius"
            value={temperature}
            onChange={handleTempOnChange}
          />
        </div>
        <div className="temperature-input">
          <label htmlFor="fahrenheit">Fahrenheit</label>
          <input
            id="fahrenheit"
            value={temperature}
            onChange={handleTempOnChange}
          />
        </div> */}
      </div>
    </>
  );
}
