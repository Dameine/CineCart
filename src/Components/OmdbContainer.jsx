import { useState, useEffect } from "react";
import API from "../utils/API";

const OmdbContainer = () => {

    // Set the initial state of the movies and search
    const [search, setSearch] = useState('');
    const [result, setResults] = useState({});

    // Function to search for movies
    const searchMovies = (query) => {
        const apiKey = process.env.API_KEY;
        API.search(query, apiKey)
            .then((res) => {
                setResults(res.data);
                setSearch('');
            })
            .catch(err => console.log(err));
    };

    // useEffect to load the initial movies
    useEffect(() => {
        searchMovies(search);
    }, []);

    // handleInputChange to update the search state
    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    // handleFormSubmit to search for movies based on the search term
    const handleFormSubmit = (e) => {
        e.preventDefault();
        searchMovies(search);
    };

    // Destructure the result object
    const {
        Title = '',
        Poster = '',
        Director = '',
        Genre = '',
        shortPlot = '',
        imdbRating = '',
    } = result;

    // Render the component (this is just a placeholder)
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={handleInputChange}
                    placeholder="Search for a movie"
                />
                <button type="submit">Search</button>
            </form>
            <div>
                <h2>{Title}</h2>
                <img src={Poster} alt={Title} />
                <p>Director: {Director}</p>
                <p>Genre: {Genre}</p>
                <p>Plot: {shortPlot}</p>
                <p>IMDB Rating: {imdbRating}</p>
            </div>
        </div>
    );
};

export default OmdbContainer;