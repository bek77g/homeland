import React, { createContext, useEffect, useState } from 'react';

import { housesData } from '../data';

export const HouseContext = createContext();
const HousesContextProvider = ({ children }) => {
	const [houses, setHouses] = useState(housesData);
	const [country, setCountry] = useState('Место (любое)');
	const [countries, setCountries] = useState([]);
	const [property, setProperty] = useState('Недвижимость (любое)');
	const [properties, setProperties] = useState([]);
	const [price, setPrice] = useState('Ценовой диапазон (любое)');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const allCountries = houses.map(house => {
			return house.country;
		});

		const uniqueCountries = ['Место (любое)', ...new Set(allCountries)];
		setCountries(uniqueCountries);
	}, []);

	useEffect(() => {
		const allProperties = houses.map(house => {
			return house.type;
		});

		const uniqueProperties = [
			'Недвижимость (любое)',
			...new Set(allProperties),
		];
		setProperties(uniqueProperties);
	}, []);
	// useEffect(()=>{
	//     const allPrices = houses.map((house)=>{
	//         return house.price
	//     })
	//     console.log(allPrices)
	//     const uniquePrices=['Property (any)',...
	//         new Set(allPrices)]
	//     setPrice(uniquePrices);
	// },[])

	const handleClick = () => {
		setLoading(true);
		const isDefault = str => {
			return str.split(' ').includes('(любое)');
		};
		const minPrice = parseInt(price.split(' ')[0]);
		const maxPrice = parseInt(price.split(' ')[2]);

		const newHouses = housesData.filter(house => {
			const housePrice = parseInt(house.price);
			if (
				house.country === country &&
				house.type === property &&
				housePrice >= minPrice &&
				housePrice <= maxPrice
			) {
				return house;
			}
			if (isDefault(country) && isDefault(property) && isDefault(price)) {
				return house;
			}
			if (!isDefault(country) && isDefault(property) && isDefault(price)) {
				return house.country === country;
			}
			if (!isDefault(property) && isDefault(country) && isDefault(price)) {
				return house.type === property;
			}
			if (!isDefault(price) && isDefault(property) && isDefault(country)) {
				if (housePrice >= minPrice && housePrice <= maxPrice) return house;
			}
			if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
				return house.country === country && house.type === property;
			}
			if (!isDefault(country) && !isDefault(price) && isDefault(property)) {
				if (housePrice >= minPrice && housePrice <= maxPrice) {
					return house.country === country;
				}
			}
			if (isDefault(country) && !isDefault(price) && !isDefault(property)) {
				if (housePrice >= minPrice && housePrice <= maxPrice) {
					return house.type === property;
				}
			}
		});
		setTimeout(() => {
			newHouses.length < 1 ? setHouses([]) : setHouses(newHouses);
			setLoading(false);
		}, 1000);
	};
	return (
		<HouseContext.Provider
			value={{
				country,
				setCountry,
				countries,
				property,
				setProperty,
				properties,
				price,
				setPrice,
				houses,
				loading,
				handleClick,
				setLoading,
			}}>
			{children}
		</HouseContext.Provider>
	);
};

export default HousesContextProvider;
