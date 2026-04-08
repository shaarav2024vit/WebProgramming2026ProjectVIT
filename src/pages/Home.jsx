import React from 'react';
import HeroSection from '../components/HeroSection';
import MovieCard from '../components/MovieCard';
import { featuredMovies, recentlyAdded } from '../data/movies';

export default function Home() {
    return (
        <main className="main-content">
            <HeroSection />

            <section className="movies-section">
                <h2 className="section-title">Featured Reviews</h2>
                <div className="movies-grid">
                    {featuredMovies.map((movie) => (
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

            <section className="movies-section">
                <h2 className="section-title">Recently Added</h2>
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
