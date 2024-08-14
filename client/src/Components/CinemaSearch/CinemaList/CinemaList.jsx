// import {cinema} from "../cinema.js" 
import s from "./cinemeList.module.css"
import image from "../../../assets/img/img1.jpg"
import { useGlobalContext } from "../../../utils/state.jsx";


const CinemaList = ({cinema}) => {
   const {searchResult}  = useGlobalContext();
   console.log(searchResult);


    return <ul className={s.cinemaLi}>
        {cinema.map(elem => {
         return (
            <li 
            key={elem.imdbId} 
            className={s.cinemaItem}
            style={{
               // background: "red"
               backgroundImage: `url(${elem.Poster != "N/A" ? elem.Poster : image})`
            }}
            >
            {/* <img src={elem.Poster != "N/A" ? elem.Poster : image} alt={elem.Title} style={{maxHeight: "300px"}}/> */}
            <p className={s.cinemaPlot}>{elem.Plot}</p>
            <button type="button">Add to favories movies</button>
            </li>
         )
         }
            )}
    </ul>
}

export default CinemaList;
