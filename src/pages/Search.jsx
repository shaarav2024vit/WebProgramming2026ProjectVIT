import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { featuredMovies, recentlyAdded } from '../data/movies';

export default function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const allMovies = [...featuredMovies, ...recentlyAdded];

    // Ensure we don't have duplicates based on mapping ID 
    const uniqueMoviesMap = new Map();
    allMovies.forEach(movie => uniqueMoviesMap.set(movie.id, movie));
    const uniqueMovies = Array.from(uniqueMoviesMap.values());

    const filteredMovies = useMemo(() => {
        if (!query.trim()) return [];
        return uniqueMovies.filter(movie =>
            movie.title.toLowerCase().includes(query.toLowerCase()) ||
            movie.review.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, uniqueMovies]);

    return (
        <main className="main-content" style={{ marginTop: '8rem' }}>
            <section className="movies-section">
                <h2 className="section-title">Search Results for "{query}"</h2>
                {filteredMovies.length > 0 ? (
                    <div className="movies-grid">
                        {filteredMovies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                poster={movie.poster}
                                rating={movie.rating}
                                review={movie.review}
                                delay={movie.delay}
                            />
                        ))}
                    </div>
                ) : (
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '2rem' }}>
                        No movies found matching your search.
                    </p>
                )}
            </section>
        </main>
    );
}
