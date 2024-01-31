import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const baseURL = 'http://api.weatherapi.com/v1/current.json?key=ea25569d59ff48f997b161112243001&q';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  const fetchCurrentUserLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setWeatherData(data));
    });
  };

  useEffect(() => {
    fetchCurrentUserLocationData()
  }, [])
  


    const getData = async () => {
      try {
        const res = await axios.get(`${baseURL}=${searchCity}&aqi=no`);
        setWeatherData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const getWeatherDataForLocation = async (lat, lon) => {
      const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
      return await response.json();
    };


  return (
    <div>
      <Card weatherData={weatherData} searchCity={searchCity} setSearchCity={setSearchCity} getdata={getData}/>
    </div>
  );
}

export default App;
