import { useState, type BaseSyntheticEvent } from "react";

export default function HomePage() {
    const [temperature, setTemperature] = useState<number>();
    
    function handleTempOnChange(event: BaseSyntheticEvent){
      setTemperature(event.target.value);
    }

    return (
    <>
      <header>
        <h1 className="temperature-header">
            Temperature Converter
        </h1>
      </header>

      
      <div className="temperature-input-output-container">
        <div className="temperature-input">
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
        </div>
      </div>
    </>
);
}