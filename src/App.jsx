import React, { useEffect, useState } from "react";
import './App.css';
import Card from './Card';
const App = ()=>{
   
    const [searchItem, setSearchItem] =useState("");
    const [movies,setMovies] = useState([]);
    const movieurl='https://www.omdbapi.com/?apikey=d308c665';
    const searchMovie = async(title)=>{
        const response = await fetch(`${movieurl}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data.Search);
    }
    useEffect(() => {
        searchMovie('superman');
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
                onChange={(e)=>setSearchItem(e.target.value)}
                />
                <button
                onClick={()=>searchMovie(searchItem)}
                >SEARCH</button>
            </div> 
            <div className="card-container">
                {movies.map((mov)=><Card movie={mov}/>)}
            </div>
        </section>
        <footer>
            Made with ❤ by Harivardhan
        </footer>

        </>
    )
}
export default App;