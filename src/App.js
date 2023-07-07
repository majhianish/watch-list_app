import React from "react";
import {useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import nextIcon from './prev.png';
import prevIcon from './next.png';
import MovieCard from './MovieCard';
import LoginButton from './LoginButton';

// f554ee08

let page = 1;

const API_URL = 'http://www.omdbapi.com/?apikey=f554ee08';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}&plot=full`);
        const data = await response.json();

        setMovies(data.Search);
        // console.log(data.Search);
    };

    const nextMovies = async (title, page) => {
        const response = await fetch(`${API_URL}&s=${title}&page=${page}`);
        const data = await response.json();

        setMovies(data.Search);
    };
    
    useEffect(() => {
        searchMovies('spiderman');
    }, []);

    return (
        <div className='app'>
            <h1>My WatchList</h1>
            <div className="search">
            <LoginButton />
                <input 
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon} 
                    alt='search'
                    onClick={ () => searchMovies(searchTerm)}
                />
            </div>

            {
                movies.length > 0 
                ? (
                    <div className="container">
                        { movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies found</h2>
                    </div>
                ) 
            }
            <div>
                <img src={nextIcon}
                    alt="search"
                    onClick={() => nextMovies(searchTerm, --page)}
                />
                <img src={prevIcon}
                    alt="search"
                    onClick={() => nextMovies(searchTerm, ++page)}
                />
            </div>

        </div>
    );
}

export default App;