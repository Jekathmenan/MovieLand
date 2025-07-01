import { useState, useEffect } from "react";
import './App.css';

// Importing required components
import { Movie, Search } from './components/';

// Declaring required API Constants
const API_KEY = process.env.REACT_APP_OMDB_API_KEY; //'642180a4';
const API_URL = process.env.REACT_APP_OMDB_API_URL + API_KEY

const App = () => {
    const [movies, setMovies] = useState([]);


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() => {

    }, []);
    return (

        <div className="app">
            <h1>MovieLand</h1>

            <Search searchMovies={searchMovies} />
            {
                movies?.length > 0
                    ? (
                        <div className="movies">
                            {
                                movies.map(
                                    (movie) => <Movie key={movie.imdbID} movie={movie} />
                                )
                            }

                        </div>
                    )
                    : (
                        <div><h2>No movies found!</h2></div>
                    )
            }

        </div >
    );
}

export default App;