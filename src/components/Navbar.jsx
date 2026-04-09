import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
        }
    };

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-content">
                <h1 className="navbar-logo">Movie Reviews</h1>
                <nav>
                    <ul className="nav-links">
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                        <li><NavLink to="/latest" className={({ isActive }) => (isActive ? 'active' : '')}>Latest Reviews</NavLink></li>
                        <li><NavLink to="/top-rated" className={({ isActive }) => (isActive ? 'active' : '')}>Top Rated</NavLink></li>
                        <li><NavLink to="/favorites" className={({ isActive }) => (isActive ? 'active' : '')}>Favorites</NavLink></li>
                        <li className="dropdown">
                            <span className="dropbtn">Genres ▼</span>
                            <div className="dropdown-content">
                                <NavLink to="/search?genre=Action">Action</NavLink>
                                <NavLink to="/search?genre=Sci-Fi">Sci-Fi</NavLink>
                                <NavLink to="/search?genre=Thriller">Thriller</NavLink>
                                <NavLink to="/search?genre=Adventure">Adventure</NavLink>
                                <NavLink to="/search?genre=Crime">Crime</NavLink>
                                <NavLink to="/search?genre=Drama">Drama</NavLink>
                            </div>
                        </li>
                    </ul>
                </nav>
                <form className="search-form" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-btn">Search</button>
                </form>
            </div>
        </header>
    );
};

export default Navbar;
