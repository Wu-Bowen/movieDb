import './App.css';
import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + process.env.REACT_APP_MOVIE_API_KEY;
const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=" + process.env.REACT_APP_MOVIE_API_KEY + "&query=";

function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (window.location.href.includes('search?=')) {
            const search = Search_API + window.location.href.substring(window.location.href.indexOf('search?=') + 8);
            getMovies(search);
        } else {
            getMovies(FEATURED_API);
        }
    }, [])

    const getMovies = (API) => {
        fetch(API).then(res => res.json())
            .then(data => {
                setMovies(data.results);
            });
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            getMovies(Search_API + searchTerm);
            setSearchTerm('');
            window.history.pushState({}, null, window.location.href.split('/')[0] + 'search?=' + searchTerm);
        }
    }
    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }
    return (
        <>
            <header>
                <form onSubmit={handleOnSubmit}>
                    <input
                        className="search"
                        type="search"
                        placeholder="Search Movies..."
                        value={searchTerm}
                        onChange={handleOnChange}
                    />
                </form>
            </header>
            < div className="movie-container">

                {movies.length > 0 && movies.map(movie => {
                    return <Movie key={movie.id} {...movie} />
                })}
            </div>
        </>
    );
}

export default App;