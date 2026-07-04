const axios = require("axios");

async function getCoord(address) {
  let result = await axios.get(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      address,
    )}&format=json&limit=1`,
    {
      headers: {
        "User-Agent": "havenly-app",
      },
    },
  );

  if (!result.data || result.data.length === 0) {
    throw new Error(`Location not found: ${address}`);
  }
  return [Number(result.data[0].lon), Number(result.data[0].lat)];
}

module.exports = getCoord;
