
import "./style.css"

const Card = ({ weatherData, searchCity, setSearchCity, getdata }) => {

  return (
    <div className="container">
      <div className="wrapper">
        <input
        id="search"
          type="text"
          placeholder="Search City"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <button onClick={getdata}>Search</button>
        {weatherData && (
          <>
            <img src={weatherData.current.condition.icon} />
            <h1>{weatherData.current.temp_c} <span>&#176;</span>c</h1>
            <h3>{weatherData.location.name}, {weatherData.location.country}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
