import React from 'react';
import MovieCard from '../components/MovieCard';
import { recentlyAdded } from '../data/movies';

export default function LatestReviews() {
    return (
        <main className="main-content" style={{ marginTop: '8rem' }}>
            <section className="movies-section">
                <h2 className="section-title">Latest Reviews</h2>
                <div className="movies-grid">
                    {recentlyAdded.map((movie) => (
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
