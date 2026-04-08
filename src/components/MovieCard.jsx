import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ id, title, poster, rating, review, delay }) => {
    return (
        <div className="movie-card" style={{ animationDelay: delay }}>
            <div className="movie-card-inner">
                <div className="movie-poster-container">
                    <img src={poster} alt={`${title} Poster`} className="movie-poster" />
                    <div className="movie-rating">{rating}</div>
                </div>
                <div className="movie-content">
                    <h3 className="movie-title">{title}</h3>
                    <p className="movie-review">{review}</p>
                    <Link to={`/movie/${id}`} className="read-more-btn">Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
