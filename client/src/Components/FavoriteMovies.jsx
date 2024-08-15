import { useState, useEffect } from 'react';
import styles from "../Components/FavoriteMovies.module.css";
import MovieCard from './MovieCard';



export default function FavoriteMovies() {
    const [favorites, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const storedFavorite = JSON.parse(localStorage.getItem("movies")) || [];
        setFavoriteMovies(storedFavorite);
    }, []);


    return (
        <div className={styles.container}>
            <h1>Favorite Movies</h1>
            {favorites.length > 0 ? (
                <ul className={styles.movieGrid}>
                    {favorites.map((movie, index) => (
                        <MovieCard 
                        key={index} 
                        movie={movie} 
                        showDelete={true}
                        onDelete={() => {
                            const updatedFavorite = favorites.filter((elem) => elem.imdbID !== movie.imdbID);
                            localStorage.setItem("movies", JSON.stringify(updatedFavorite));
                            setFavoriteMovies(updatedFavorite);
                        }}
                        />
                    ))}
                </ul>
            ) : (
                <p>No favorite movies added yet.</p>
            )}
        </div>
    )
}
