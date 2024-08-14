// import {cinema} from "../cinema.js" 
import s from "./cinemeList.module.css"
import image from "../../../assets/img/img1.jpg"
// import { useGlobalContext } from "../../../utils/state.jsx";
import AuthService from "../../../utils/auth.js";

const CinemaList = ({ cinema }) => {
   // const {searchResult}  = useGlobalContext();
   // console.log(searchResult);

   const handleClick = (e) => {
      const { value: imdbID } = e.target;
      const currentMovie = cinema.find((elem) => elem.imdbID === imdbID);
      console.log(currentMovie);
   }
   return <ul className={s.cinemaLi}>
      {cinema.map((elem, i) => {
         console.log(elem);
         return (
            <li
               key={i}
               className={s.cinemaItem}
               style={{
                  // background: "red"
                  backgroundImage: `url(${elem.Poster != "N/A" ? elem.Poster : image})`
               }}
            >
               {/* <img src={elem.Poster != "N/A" ? elem.Poster : image} alt={elem.Title} style={{maxHeight: "300px"}}/> */}
               <p className={s.cinemaPlot}>{elem.Plot}</p>
               <p className={s.cinemaPlot}>{elem.Title}</p>
               <p className={s.cinemaPlot}>{elem.Director}</p>
               <p className={s.cinemaPlot}>{elem.Genra}</p>
               <p className={s.cinemaPlot}>{elem.imdbRating}</p>
               <p className={s.cinemaPlot}>{elem.imdbID}</p>
               {AuthService.loggedIn() && <button type="button" value={elem.imdbID} onClick={handleClick}>Add to favories movies</button>}
            </li>
         )
      }
      )}
   </ul>
}

export default CinemaList;
