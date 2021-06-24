import './App.css';
import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { makeStyles } from "@material-ui/core/styles";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + process.env.REACT_APP_MOVIE_API_KEY;
const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=" + process.env.REACT_APP_MOVIE_API_KEY + "&query=";
const IMG_API = "https://image.tmdb.org/t/p/w500";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        width: "90%",
        height: "80%",
        backgroundColor: "#39445a",
        border: "1px solid #282c34",
        borderRadius: 10,
        color: "white",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1, 3),
    },
}));

function App() {
    const classes = useStyles();
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});
    const [video, setVideo] = useState({});

    useEffect(() => {
        if (window.location.href.includes('search?=')) {
            const search = Search_API + window.location.href.substring(window.location.href.indexOf('search?=') + 8);
            getMovies(search);
        } else {
            getMovies(FEATURED_API);
        }
    }, [])

    const getMovies = (API) => {
        fetch(API)
            .then(res => res.json())
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

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    const handleClick = (movie) => {
        setSelectedMovie(movie);
        fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                setVideo(data.results[0]?.key);
            })
        setModalOpen(true);
    }
    return (
        <>
            <header>
                <MenuIcon />
                <span className="title">
                    🎬 MovieDB 🎥
                </span>
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
                    return (
                        <button
                            type="button"
                            key={movie.id}
                            className={"button"}
                            onClick={() => handleClick(movie)}
                        >
                            <Movie  {...movie} />
                        </button>
                    )
                })}
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={modalOpen}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modalOpen}>
                    {selectedMovie && (
                        <div className={classes.paper}>
                            <div className="ContentModal">
                                <img
                                    src={
                                        selectedMovie.poster_path
                                            ? IMG_API + selectedMovie.poster_path
                                            : "https://www.movienewz.com/img/films/poster-holder.jpg"
                                    }
                                    alt={selectedMovie.name || selectedMovie.title}
                                    className="ContentModal__portrait"
                                />
                                <img
                                    src={
                                        selectedMovie.backdrop_path
                                            ? IMG_API + selectedMovie.backdrop_path
                                            : "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg"
                                    }
                                    alt={selectedMovie.name || selectedMovie.title}
                                    className="ContentModal__landscape"
                                />
                                <div className="ContentModal__about">
                                    <span className="ContentModal__title">
                                        {selectedMovie.name || selectedMovie.title} (
                                        {(
                                            selectedMovie.first_air_date ||
                                            selectedMovie.release_date ||
                                            "-----"
                                        ).substring(0, 4)}
                                        )
                                    </span>
                                    {selectedMovie.tagline && (
                                        <i className="tagline">{selectedMovie.tagline}</i>
                                    )}

                                    <span className="ContentModal__description">
                                        {selectedMovie.overview}
                                    </span>

                                    {/* <div>
                                        <Carousel id={id} media_type={media_type} />
                                    </div> */}

                                    <Button
                                        variant="contained"
                                        startIcon={<YouTubeIcon />}
                                        color="secondary"
                                        target="__blank"
                                        href={`https://www.youtube.com/watch?v=${video}`}
                                    >
                                        Watch the Trailer
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </Fade>
            </Modal>
        </>
    );
}

export default App;