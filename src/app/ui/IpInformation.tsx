export const IpInformation: React.FC<IpInformationProps> = ({ ipData }) => {
	return (
		<div className="flex justify-evenly bg-white text-black px-6 py-8 rounded-xl shadow-lg w-[80%]">
			{/* IP Address */}
			<div className="flex flex-col justify-center">
				<label className="font-medium text-xs text-gray-500">IP ADDRESS</label>
				<p className="text-gray-800 font-medium text-md">{ipData ? ipData?.ip : 'N/A'}</p>
			</div>

			{/* Divider */}
			<div className="h-auto border-l mx-4" />

			{/* Location */}
			<div className="flex flex-col justify-center">
				<label className="font-medium text-xs text-gray-500">LOCATION</label>
				<p className="text-gray-800 font-medium text-md">
					{ipData ? `${ipData?.location?.city}, ${ipData?.location?.region} ${ipData?.location?.postalCode}` : 'N/A'}
				</p>
			</div>

			{/* Divider */}
			<div className="h-auto border-l mx-4" />

			{/* Time Zone */}
			<div className="flex flex-col justify-center">
				<label className="font-medium text-xs text-gray-500">TIME ZONE</label>
				<p className="text-gray-800 font-medium text-md">{ipData ? `UTC ${ipData?.location?.timezone}` : 'N/A'}</p>
			</div>

			{/* Divider */}
			<div className="h-auto border-l mx-4" />

			{/* ISP */}
			<div className="flex flex-col justify-center">
				<label className="font-medium text-xs text-gray-500">ISP</label>
				<p className="text-gray-800 font-medium text-md">{ipData ? ipData?.isp : 'N/A'}</p>
			</div>
		</div>
	);
}

export interface IpInformationProps {
	ipData?: IpInformation
}

export type IpInformation = {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
  domains: string[]; 
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
};