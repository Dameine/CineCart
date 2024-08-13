
//This function retrieves saved movie IDs from local storage. 
// If there are any saved movies, it parses the data and returns an array of movie IDs. 
//Otherwise, it returns an empty array.
export const getSavedMovieIds = () => {
  const savedMovieIds = localStorage.getItem('saved_movies')
    ? JSON.parse(localStorage.getItem('saved_movies'))
    : [];

  return savedMovieIds;
};

// This function takes an array of movie IDs as an argument. 
// If the input array is not empty, it stores the movie IDs in local storage as a JSON string. 
// If the input array is empty, it removes the saved movies data from local storage.
export const saveMovieIds = (movieIdArr) => {
    if (movieIdArr.length) {
        localStorage.setItem('saved_movies', JSON.stringify(movieIdArr));
    } else {
        localStorage.removeItem('saved_movies');
    }
    };

    // This function removes a specific movie ID from the saved movies list. 
    // It checks if there are any saved movie IDs in local storage. If so, it filters out the specified movie ID and updates the saved movies data in local storage. 
    // If the movie ID is not found, it returns false.
    export const removeMovieId = (movieId) => {
        const savedMovieIds = localStorage.getItem('saved_movies')
          ? JSON.parse(localStorage.getItem('saved_movies'))
          : null;
      
        if (!savedMovieIds) {
          return false;
        }
      
        const updatedSavedMovieIds = savedMovieIds?.filter((savedMovieId) => savedMovieId !== movieId);
        localStorage.setItem('saved_movies', JSON.stringify(updatedSavedMovieIds));
      
        return true;
      };