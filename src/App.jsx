import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import LatestReviews from './pages/LatestReviews';
import TopRated from './pages/TopRated';
import MovieDetail from './pages/MovieDetail';
import Search from './pages/Search';

function App() {
    return (
        <Router>
            <div className="app-container">
                {/* <ParticleBackground /> */}
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/latest" element={<LatestReviews />} />
                    <Route path="/top-rated" element={<TopRated />} />
                    <Route path="/movie/:id" element={<MovieDetail />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
