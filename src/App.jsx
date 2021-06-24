import './App.css';
import Movie from './components/Movie';

function App() {
    const movies = ['1', '2', '3'];
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
    return (

        < div >
            {API_KEY}
            {movies.map(movie => {
                return <Movie />
            })}
        </div>
    );
}

export default App;