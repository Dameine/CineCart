// import { cinema } from "../cinema.js";
import s from "./cinemeList.module.css";
import image from "../../../assets/img/img1.jpg";
// import { useGlobalContext } from "../../../utils/state.jsx";
import AuthService from "../../../utils/auth.js";
import MovieCard from "../../MovieCard.jsx";

const CinemaList = ({ cinema }) => {
   // const {searchResult} = useGlobalContext();
   // console.log(searchResult);

   const handleClick = (e) => {
      const { value: imdbID } = e.target;
      const currentMovie = cinema.find((elem) => elem.imdbID === imdbID);

      if (currentMovie) {
         const storedFavorite = JSON.parse(localStorage.getItem("movies")) || [];

         const alreadyFavorite = storedFavorite.find((elem) => elem.imdbID === imdbID);

         if (!alreadyFavorite) {
            const updatedFavorite = [...storedFavorite, currentMovie];
            localStorage.setItem("movies", JSON.stringify(updatedFavorite));
            alert(`Movie ${currentMovie.Title} added to favorites`);
         } else {
            alert(`Movie ${currentMovie.Title} is already in favorites`);
         }
      }
   };

   return (
      <ul className={s.cinemaLi}>
         {cinema.map((elem, i) => (
            <MovieCard key={i} movie={elem} onClick={handleClick} />
         ))}
      </ul>
   );
};

export default CinemaList;

      // <ul className={s.cinemaLi}>
      //    {cinema.map((elem, i) => (
      //       <li
      //          key={i}
      //          className={s.cinemaItem}
      //          style={{
      //             backgroundImage: `url(${elem.Poster !== "N/A" ? elem.Poster : image})`,
      //          }}
      //       >
      //          {/* <img src={elem.Poster !== "N/A" ? elem.Poster : image} alt={elem.Title} style={{ maxHeight: "300px" }} /> */}
      //          <p className={s.cinemaPlot}>{elem.Plot}</p>
      //          <p className={s.cinemaPlot}>{elem.Title}</p>
      //          <p className={s.cinemaPlot}>{elem.Director}</p>
      //          <p className={s.cinemaPlot}>{elem.Genre}</p>
      //          <p className={s.cinemaPlot}>{elem.imdbRating}</p>
      //          <p className={s.cinemaPlot}>{elem.imdbID}</p>
      //          {AuthService.loggedIn() && (
      //             <button type="button" value={elem.imdbID} onClick={handleClick}>
      //                Add to favorite movies
      //             </button>
      //          )}
      //       </li>
      //    ))}
      // </ul>