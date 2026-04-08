import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { featuredMovies, recentlyAdded } from '../data/movies';
import './MovieDetail.css';

export default function MovieDetail() {
    const { id } = useParams();
    const allMovies = [...featuredMovies, ...recentlyAdded];
    const movie = allMovies.find(m => m.id === parseInt(id));

    if (!movie) {
        return (
            <main className="main-content" style={{ marginTop: '8rem', textAlign: 'center' }}>
                <h2 className="section-title">Movie Not Found</h2>
                <Link to="/" className="back-link">Return Home</Link>
            </main>
        );
    }

    return (
        <main className="main-content" style={{ marginTop: '7rem', display: 'flex', justifyContent: 'center' }}>
            <div className="movie-detail-container">
                <div className="movie-detail-poster-wrapper">
                    <img src={movie.poster} alt={movie.title} className="movie-detail-poster" />
                </div>
                <div className="movie-detail-info">
                    <h1 className="movie-detail-title">{movie.title}</h1>
                    <div className="movie-detail-rating">Rating: {movie.rating}</div>
                    <p className="movie-detail-description">
                        {movie.review}
                        <br /><br />
                        (Full movie synopsis extended gracefully here within the dynamic aesthetic view.)
                    </p>
                    <Link to="/" className="back-link">&larr; Back to Movies</Link>
                </div>
            </div>
        </main>
    );
}
