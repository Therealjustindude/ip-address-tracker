'use client';
import Image from "next/image";
import { IpInformation } from "./IpInformation";
import { SearchInput } from "./SearchInput";
import { Suspense, useState } from "react";
import { rubik } from "../fonts";
import { useGetIpAddress } from "../utils/actions/useGetIpAddress";
import { MapFallback } from "./MapFallback";
import MapLeaflet from "./MapLeaflet";


export const Main = () => {
	const [ip, setIp] = useState('');
	const { data: ipData } = useGetIpAddress(ip);
	const handleOnSubmit = (searchIpVal: string) => {
		setIp(searchIpVal)
	}
	const { location: { lat, lng } = {} } = ipData || {};
	return (
		<main className="relative w-full h-screen">
			{/* Background Layer */}
			<div className="absolute flex flex-col z-10">
				<Image
					id="desktop-image"
					src="/pattern-bg-desktop.png"
					width={1440}
					height={280}
					priority
					alt="Screenshots of the dashboard project showing desktop version"
					className="hidden md:block object-cover"
				/>
				{/* Mobile Background Image */}
				<Image
					id="mobile-image"
					src="/pattern-bg-mobile.png"
					width={375}
					height={300}
					priority
					alt="Background pattern"
					className="md:hidden object-cover"
				/>
				<Suspense fallback={<MapFallback />}>
					<MapLeaflet latitude={ lat } longitude={ lng } />
				</Suspense>
			</div>

			{/* Foreground Content */}
			<div className="relative z-10 flex flex-col items-center foreground-content">
				<h1 className={`${rubik.className} text-3xl font-semibold text-white`}>
					IP Address Tracker
				</h1>

				<SearchInput onSubmit={handleOnSubmit}/>

				<IpInformation ipData={ ipData } />
			</div>
		</main>
	);
}

// export interface IMainProps {
// 	// initialIpData: IpInformation
// }