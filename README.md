# IP Address Tracker

![App Preview](/ip-address-tracker-snapshot.png)

## Overview

This project is an **IP Address Tracker** built using **Next.js**. It allows users to search for an IP address or domain and view the associated geographical location on an interactive map. The app provides key information such as the IP address, location, timezone, and ISP.

## Features

- Displays the user's IP address location on the map upon initial load.
- Allows users to search for any valid IP address or domain.
- Provides location details including city, state, and timezone.
- Fully responsive layout that works seamlessly on all device sizes.
- Interactive map using **Leaflet.js** for precise location visualization.

## Tech Stack

- **Next.js** for the framework.
- **Leaflet.js** for map rendering.
- **TanStack React Query** for data fetching and caching.
- **Tailwind CSS** for responsive styling.
- **IPify API** for IP geolocation.

## Challenges Faced

1. **Media Queries**  
   - Ensuring the layout was optimized for different screen sizes took considerable effort. Tailwind CSS simplified this process but still required fine-tuning.

2. **Leaflet.js in Next.js**  
   - Encountered the error `ReferenceError: window is not defined` due to server-side rendering in Next.js.  
   - Tried various approaches to work around this, but Leaflet's reliance on `window` caused complications that remain unresolved.

## Installation

To run this app locally:

1. Clone this repository:
   ```git clone https://github.com/your-repo/ip-address-tracker.git```

2.	Navigate to the project directory:
	```cd ip-address-tracker```

3. Install dependencies:
	```npm install```
	Or
	```pnpm install```
4.	Add your IPify API key:
	- Create a .env.local file in the root directory.
	- Add your API key: ```NEXT_PUBLIC_IPIFY_API_KEY=your_api_key```

5. 	Run the development server:
	```npm run dev```
	Or
	```pnpm dev```

6.	Open http://localhost:3000 in your browser to see the app.


## API Usage

The app uses the IPify API to fetch geolocation data. You can sign up for a free account here [IP Geolocation API by IPify](https://geo.ipify.org/) to get your API key.


## Contributing

Feel free to fork this repository and create a pull request with any improvements or fixes.

## License

This project is licensed under the MIT License.