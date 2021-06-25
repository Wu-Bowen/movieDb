import React, { useState, useEffect } from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";


const handleDragStart = (e) => e.preventDefault();
function CarouselComponent({ id }) {
    const [credits, setCredits] = useState([]);
    const CREDIT_API = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
    const IMG_API = "https://image.tmdb.org/t/p/w300";
    const items = credits.map((cast) => (
        <div className="carouselItem">
            <img
                src={cast.profile_path ? `${IMG_API}${cast.profile_path}` : "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"}
                alt={cast?.name}
                onDragStart={handleDragStart}
                className="carouselItem__img"
            />
            <b className="carouselItem__txt">{cast?.name}</b>
        </div>
    ));
    const responsive = {
        0: {
            items: 3,
        },
        512: {
            items: 5,
        },
        1024: {
            items: 7,
        },
    };
    useEffect(() => {
        fetch(CREDIT_API)
            .then(res => res.json())
            .then(data => {
                setCredits(data.cast);
            })
    }, [])
    return (
        <AliceCarousel
            mouseTracking
            infinite
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
        />
    )
}

export default CarouselComponent;
