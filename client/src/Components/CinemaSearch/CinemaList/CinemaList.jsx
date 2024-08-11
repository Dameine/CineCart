// import {cinema} from "../cinema.js" 
import s from "./cinemeList.module.css"
import image from "../../../assets/img/img1.jpg"


const CinemaList = () => {

    const cinema = [
        {
           id: 1,
           image: image,
           title: "Cinema1",
           description: "FilmDesc",
        },
        
        {
           id: 2,
           image: image, 
           title: "Cinema1",
           description: "FilmDesc",
        },
        {
           id: 3,
           image: image, 
           title: "Cinema1",
           description: "FilmDesc",
        },
        {
           id: 4,
           image: image, 
           title: "Cinema1",
           description: "FilmDesc",
        },
    
    ]

    return <ul className={s.cinemaLi}>
        {cinema.map(elem => <li key={elem.id} className={s.cinemaItem}>
            <img src={elem.image} alt={elem.title} />
            <p>{elem.description}</p>
            <button type="button">Add to favories movies</button>
            </li>
            )}
    </ul>
}

export default CinemaList;
