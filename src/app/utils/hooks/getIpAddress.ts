export const getIpAddress = async (ip: string | null) => {
  try {
    if (ip === null) {
      throw new Error('No IP address provided as input');
    }

    // Fetch user's public IP address if `ip` is an empty string
    if (ip === '') {
      const ipRes = await fetch('https://api64.ipify.org?format=json');
      if (!ipRes.ok) {
        throw new Error(`Failed to fetch user's public IP address. Status: ${ipRes.status} ${ipRes.statusText}`);
      }
      const { ip: fetchedIp } = await ipRes.json();
      if (!fetchedIp) {
        throw new Error('User\'s public IP address fetch returned an invalid response');
      }
      ip = fetchedIp;
    }

    // Fetch geolocation data for the IP address
    const geoRes = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_IP_GEOLOCATION_API}&ipAddress=${ip}`);
    if (!geoRes.ok) {
      throw new Error(`Failed to fetch geolocation data for IP address: ${ip}. Status: ${geoRes.status} ${geoRes.statusText}`);
    }

    const data = await geoRes.json();
    console.log(data)
    if (!data) {
      throw new Error(`Geolocation fetch for IP: ${ip} returned an invalid response`);
    }

    return data;
  } catch (error) {
    throw error;
  }
};