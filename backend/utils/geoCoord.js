const axios = require("axios");

async function getCoord(location) {
  console.log("1. getCoord called:", location);

  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    location,
  )}&format=json&limit=1`;

  console.log("2. Sending request to Nominatim");

  try {
    const result = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent": "Lokaar-App/1.0",
      },
    });

    console.log("3. Nominatim responded");

    if (!result.data || result.data.length === 0) {
      throw new Error(`Location not found: ${location}`);
    }

    console.log("4. Result:", result.data[0]);

    return [Number(result.data[0].lon), Number(result.data[0].lat)];
  } catch (error) {
    console.log("5. Nominatim ERROR:", error.message);
    throw error;
  }
}

module.exports = getCoord;
