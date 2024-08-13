import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_MOVIE } from "../../../utils/queries";
import { useGlobalContext } from "../../../utils/state.jsx";



const SearchB = () => {
    const {setSearchResult}  = useGlobalContext();


    const [getMovies, { data, error }] = useLazyQuery(GET_MOVIE);
    if (error) {
        console.log(JSON.stringify(error))
    }
    if (data) {
        console.log(data.getMovies)
        setSearchResult(data.getMovies)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const searchInput = event.target.searchInput.value
        getMovies({ variables: { query: searchInput } })

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="searchInput" />
                <button type="submit">Search</button>
            </form>
        </div>
    )

}

export default SearchB