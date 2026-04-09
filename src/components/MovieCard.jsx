import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ id, title, poster, rating, review, delay }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('movies_favorites') || '[]');
        setIsFavorite(storedFavorites.some(movie => movie.id === id));
    }, [id]);

    const toggleFavorite = (e) => {
        e.preventDefault();
        e.stopPropagation();

        let storedFavorites = JSON.parse(localStorage.getItem('movies_favorites') || '[]');
        if (isFavorite) {
            storedFavorites = storedFavorites.filter(movie => movie.id !== id);
        } else {
            storedFavorites.push({ id, title, poster, rating, review, delay });
        }

        localStorage.setItem('movies_favorites', JSON.stringify(storedFavorites));
        setIsFavorite(!isFavorite);
        window.dispatchEvent(new Event('favoritesUpdated'));
    };

    return (
        <div className="movie-card" style={{ animationDelay: delay }}>
            <div className="movie-card-inner">
                <div className="movie-poster-container">
                    <img src={poster} alt={`${title} Poster`} className="movie-poster" />
                    <div className="movie-rating">{rating}</div>
                    <button className={`favorite-btn ${isFavorite ? 'active' : ''}`} onClick={toggleFavorite} aria-label="Toggle Favorite">
                        <svg viewBox="0 0 24 24" fill={isFavorite ? "#e50914" : "rgba(0,0,0,0.5)"} stroke={isFavorite ? "#e50914" : "rgba(255, 255, 255, 0.8)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
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
