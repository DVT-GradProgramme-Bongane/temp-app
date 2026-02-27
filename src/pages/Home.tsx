export default function HomePage() {
    

    return (
    <>
      <div className="temperature-input-output-container">
        <div className="temperature-input">
          <label htmlFor="celsius">Celcius</label>
          <input id="celsius"/>
        </div>
        <div className="temperature-input">
          <label htmlFor="fahrenheit">Fahrenheight</label>
          <input id="fahrenheit"/>
        </div>
      </div>
    </>
);
}