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
        <form onSubmit={handleSubmit}>
            <input type="text" name="searchInput" id="search-input"/>
            <button type="submit">Search</button>
        </form>
    </div>
}

export default SearchB