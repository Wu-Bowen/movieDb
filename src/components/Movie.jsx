import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average }) => {
    return (
        <div className="movie">


            <div>
                <img src={IMG_API + poster_path} alte={title} />
            </div>
            <h3>{title}</h3>
            <span> {vote_average} </span>
        </div>
    )

}
export default Movie;