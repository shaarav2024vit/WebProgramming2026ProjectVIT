import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    const fetchFavorites = () => {
        const stored = JSON.parse(localStorage.getItem('movies_favorites') || '[]');
        setFavorites(stored);
    };

    useEffect(() => {
        fetchFavorites();

        window.addEventListener('favoritesUpdated', fetchFavorites);
        return () => window.removeEventListener('favoritesUpdated', fetchFavorites);
    }, []);

    return (
        <main className="main-content" style={{ marginTop: '8rem' }}>
            <section className="movies-section">
                <h2 className="section-title">Your Favorites</h2>
                {favorites.length > 0 ? (
                    <div className="movies-grid">
                        {favorites.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                poster={movie.poster}
                                rating={movie.rating}
                                review={movie.review}
                                delay="0s"
                            />
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '5rem 2rem', color: '#a0a0a0', fontSize: '1.2rem' }}>
                        No favorites added yet. Browse movies and click the heart icon to add them to your watchlist!
                    </div>
                )}
            </section>
        </main>
    );
}
