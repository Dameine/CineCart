import React from "react";
import styles from "./MovieCard.module.css";
import AuthService from "../utils/auth.js";

const MovieCard = ({ movie, onClick, showDelete, onDelete }) => {
   return (
      <li className="s.MovieCardContainer">
      <img
      src={movie.Poster !== "N/A" ? movie.Poster : "default-image.jpg"}
      alt="Movie Poster"/>
      
         <p className={styles.cinemaPlot}>{movie.Plot}</p>
         <p className={styles.cinemaPlot}>{movie.Title}</p>
         <p className={styles.cinemaPlot}>{movie.Director}</p>
         <p className={styles.cinemaPlot}>{movie.Genre}</p>
         <p className={styles.cinemaPlot}>{movie.imdbRating}</p>
         {/* <p className={styles.cinemaPlot}>{movie.imdbID}</p> */}
         {AuthService.loggedIn() && onClick && (
            <button type="button" value={movie.imdbID} onClick={onClick}>
               Add to favorite movies
            </button>
         )}
         {showDelete && (
            <button type="button" value={movie.imdbID} onClick={onDelete}>
               Remove from favorite movies
            </button>
         )}
      </li>
   );
};

export default MovieCard;
