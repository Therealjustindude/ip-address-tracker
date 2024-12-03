"use client";
import Image from "next/image";
import { useState } from "react";

export const SearchInput: React.FC<SearchInputProps> = ({
	onSubmit
}) => {
	const [inputVal, setInputVal] = useState('');
	const handleOnSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(inputVal);
		setInputVal('');
	}
	return (
		<div className="relative w-full max-w-xl mx-auto">
			{/* Input field */}
			<input 
				type="text" 
				name="ip-search"
				placeholder="Search for any IP address or domain" 
				className="w-full p-2 pl-6 pr-12 rounded-xl text-gray-800 border border-gray-300 focus:outline-none"
				value={inputVal}
				onChange={(e) => setInputVal(e.target.value)}
			/>

			{/* Button with SVG */}
			<button 
				className="absolute top-0 right-0 h-full bg-gray-900 hover:bg-gray-800 text-white px-4 rounded-r-xl flex items-center justify-center cursor-pointer"
				aria-label="Search"
				type="submit"
				onClick={handleOnSubmit}
			>
				<Image
					id="search-icon"
					src="/icon-arrow.svg"
					alt="Search Icon" 
					width={10} 
					height={10} 
					priority 
				/>
			</button>
		</div>
	);
}

interface SearchInputProps {
  onSubmit: (ip: string) => void;
}