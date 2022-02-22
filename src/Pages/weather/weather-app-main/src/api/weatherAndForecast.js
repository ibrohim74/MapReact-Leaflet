import axios from "axios";

async function getWeatherAndForecast(coordinates) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        exclude: "minutely,hourly,alerts",
        appid: "0f201ceb17dfa8c740969ba7387cb729",
        units: "metric"
      }
    }
  );

  return response;
}

export default getWeatherAndForecast;
