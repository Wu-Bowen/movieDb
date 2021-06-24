import './App.css';
import Movie from './components/Movie';

function App() {
    const movies = ['1', '2', '3'];
    const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + process.env.REACT_APP_MOVIE_API_KEY;
    const IMG_API = "https://image.tmdb.org/t/p/w1280";
    const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=" + process.env.REACT_APP_MOVIE_API_KEY +"&query=";
    return (

        < div >
            {movies.map(movie => {
                return <Movie />
            })}
        </div>
    );
}

export default App;