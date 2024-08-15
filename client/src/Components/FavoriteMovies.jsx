import { useState, useEffect } from 'react';

export default function FavoriteMovies() {
    const [favorites, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const storedFavorite = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
        setFavoriteMovies(storedFavorite);
    }, []);


    return (
        <div>
            <h1>Favorite movies go here.</h1>
            <ul>
                {favorites.length > 0 ? (
                    favorites.map((movie, index) => (
                        <li key={index}>
                            <p><strong>Title:</strong> {movie.Title}</p>
                            <p><strong>Plot:</strong> {movie.Plot}</p>
                            <p><strong>Director:</strong> {movie.Director}</p>
                            <p><strong>Genre:</strong> {movie.Genre}</p>
                            <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
                        </li>
                    ))
                ) : (
                    <p>No favorite movies yet.</p>
                )}
            </ul>

        </div>
    )
}