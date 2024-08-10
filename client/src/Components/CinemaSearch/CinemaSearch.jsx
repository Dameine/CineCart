import  CinemaList from "./CinemaList/CinemaList";
import  SearchB  from "./SearchB/SearchB";

const CinemaSearch = () => {
  return (
    <>
      <section>
        <div className="container">
          <SearchB />
          <CinemaList />
        </div>
      </section>
    </>
  );
};


export default CinemaSearch
