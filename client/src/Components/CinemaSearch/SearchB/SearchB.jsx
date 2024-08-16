import s from "../cinemaSearch.module.css";

const SearchB = ({setCinema}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // https://www.omdbapi.com/?i=tt3896198&apikey=70720aef

        const searchInput = document.getElementById("search-input").value

        fetch(`https://www.omdbapi.com/?t=${searchInput}&apikey=70720aef`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            setCinema([data])
        })
    }
     return <div>
        <form className={s.formSearch} onSubmit={handleSubmit}>
            <input type="text" name="searchInput" id="search-input"/>
            <button className="s.SearchB" type="submit">Search</button>
        </form>
    </div>
// import { useQuery, useLazyQuery } from "@apollo/client";
// import { GET_MOVIE } from "../../../utils/queries";
// import { useGlobalContext } from "../../../utils/state.jsx";



// const SearchB = () => {
//     const {setSearchResult}  = useGlobalContext();


//     const [getMovies, { data, error }] = useLazyQuery(GET_MOVIE);
//     if (error) {
//         console.log(JSON.stringify(error))
//     }
//     if (data) {
//         console.log(data.getMovies)
//         setSearchResult(data.getMovies)
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         const searchInput = event.target.searchInput.value
//         getMovies({ variables: { query: searchInput } })

//     }
//     return (
//         <div>
//             <form action="" onSubmit={handleSubmit}>
//                 <input type="text" name="searchInput" />
//                 <button type="submit">Search</button>
//             </form>
//         </div>
//     )

}

export default SearchB