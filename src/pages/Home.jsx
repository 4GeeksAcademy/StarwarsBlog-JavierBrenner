import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CardCharacter } from "../components/CardCharacter.jsx"
import { useEffect } from "react";
import { getCharacters, getLocations } from "../services/APIServices.js";
import { CardLocation } from "../components/CardLocation.jsx";



export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const getData = async () => {
		try { 
			const charactersList = await getCharacters();
			dispatch({
				type: 'get_characters',
				payload: charactersList
			})

			const locationsList = await getLocations();
			dispatch({
				type: 'get_location',
				payload: locationsList
			})

		
		} catch (err){
			console.log('ERROR to get data', err);
		}
	}

	useEffect(() => {
		getData()
		
	},[])

	

	return (
		<div>
			<h1 className="cardTitle">CHARACTERS</h1>
			<div className="characterCard overflow-auto text-center mt-5">
				 
				{store.characters.map((character) => (
					<CardCharacter character={character} key={character.id}/>
				))}
			</div>
			<h1 className="cardTitle">LOCATIONS</h1>
			<div className="locationCard overflow-auto text-center mt-5">
				
				{store.locations.map((locations) => (
					<CardLocation locations={locations} key={locations.id} />
				))}
			</div>
			
		</div>


	);
}; 