'use client';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import L from "leaflet";
import { useEffect, useRef } from "react";
import { Map as LeafletMap } from "leaflet";


export const MapLeaflet: React.FC<IMapProps> = ({
	latitude = 38,
	longitude = -97 
}) => {
	const mapRef = useRef<LeafletMap | null>(null);
	const icon = L.icon({
		iconUrl: "./icon-location.svg",
		iconSize: [32, 32], // Adjust the size of the marker icon (width, height)
		iconAnchor: [16, 32], // Set the point of the icon which will be placed at the marker's position
		popupAnchor: [0, -32], // Set the position of the popup relative to the marker
	});

	useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([latitude, longitude]);
    }
  }, [latitude, longitude]);

  return ( 
		<MapContainer center={[latitude, longitude]} zoom={15} ref={mapRef} zoomControl={false} style={{height: "100vh", width: "100vw"}}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[latitude, longitude]} icon={icon}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
  );
}

export default MapLeaflet;

interface IMapProps {
	longitude?: number;
	latitude?: number;
}