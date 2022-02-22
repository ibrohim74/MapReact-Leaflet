import axios from "axios";

async function getAddressOfCoordinates(lat, lng) {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json? ",
    {
      params: {
        key: "9a5f1751cec04fc78355b4e4358d7c88",
        q: `${lat}+${lng}`,
        language: "uz"
      }
    }
  );

  return response;
}

export default getAddressOfCoordinates;
