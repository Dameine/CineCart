import  CinemaList from "./CinemaList/CinemaList";
import  SearchB  from "./SearchB/SearchB";
import { useState } from "react";
import s from "./cinemaSearch.module.css"


const CinemaSearch = () => {
  const [cinema, setCinema] = useState([])

// const cinema = [
//         {
//            id: 1,
//            image: image,
//            title: "Cinema1",
//            description: "FilmDesc",
//         },
    
//     ]

  return (
    <>
      <section>
        <div className={s.cinemaSearchContainer}>
          <SearchB setCinema={setCinema}/>
          <CinemaList cinema={cinema}/>
        </div>
      </section>
    </>
  );
};


export default CinemaSearch
