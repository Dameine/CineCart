const SearchB = () => {
    const handleSubmit = (event) => {console.log (event.target)}
     return <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="searchInput"/>
            <button type="submit">Search</button>
        </form>
    </div>
}

export default SearchB