import React from 'react';
import MovieCard from '../components/MovieCard';
import { topRatedMovies } from '../data/movies';

export default function TopRated() {
    return (
        <main className="main-content" style={{ marginTop: '8rem' }}>
            <section className="movies-section">
                <h2 className="section-title">Top Rated Movies</h2>
                <div className="movies-grid">
                    {topRatedMovies.map((movie) => (
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
            </section>
        </main>
    );
}
