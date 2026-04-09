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
                    <div className="movie-detail-meta">
                        <span className="movie-badge">{movie.year}</span>
                        <span className="movie-badge">{movie.length}</span>
                        <span className="movie-badge">{movie.language}</span>
                        <span className="movie-badge highlight">{movie.genre}</span>
                    </div>
                    <div className="movie-detail-rating">★ {movie.rating}</div>

                    <div className="movie-director">
                        <span className="director-label">Director:</span> {movie.director}
                    </div>

                    <p className="movie-detail-description">
                        {movie.review}
                        <br /><br />
                        Immerse yourself into the world of {movie.title}. With stunning visuals and breathtaking acting, this film takes you on a journey through the perspectives of its deeply written characters. Sit back and see why it received {movie.rating}.
                    </p>
                    <Link to="/" className="back-link">&larr; Back Highlights</Link>
                </div>
            </div>
        </main>
    );
}
