import React, { useEffect, useState } from "react";
import './App.css';
import Card from './Card';
const App = () => {

	const [searchItem, setSearchItem] = useState("superman");
	const [movies, setMovies] = useState([]);
	const movieurl = 'https://www.omdbapi.com/?apikey=d308c665';

	const searchMovie = async () => {
		const response = await fetch(`${movieurl}&s=${searchItem}`);
		const data = await response.json();
		setMovies(data.Search);
	}

	useEffect(() => {
		searchMovie();
	}, [])

	return (
		<>
			<section>
				<h1> HV Movie Application</h1>
				<div className="container">
					<input
						type='text'
						placeholder="search for your favourite movies"
						value={searchItem}
						onChange={(e) => setSearchItem(e.target.value)}
					/>
					<button
						onClick={() => searchMovie()}
					>SEARCH</button>
				</div>
				<div className="card-container">
					{(movies) ? movies.map((mov, index) => <Card movie={mov} key={index} />) : `No movies with ${searchItem} name. Please try with other movie name.`}
				</div>
			</section>
			<footer>
				Made with ❤ by Harivardhan
			</footer>

		</>
	)
}
export default App;