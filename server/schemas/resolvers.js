const axios = require('axios');


const resolvers = {
  Query: {
    getMovies: async (_, args) => {
        const apiKey = process.env.API_KEY;
        const query = 'The Matrix';
        const url = `http://www.omdbapi.com/?t=${query}&apikey=${apiKey}`; 
        const response = await axios.get(url);
        console.log(response.data);
        const movie = response.data;
            return {
                Title: movie.Title,
                Poster: movie.Poster,
                Director: movie.Director,
                Genre: movie.Genre,
                shortPlot: movie.Plot,
                imdbRating: movie.imdbRating,
            };

    },

  },
//   Mutation: {
    
//   },
};

module.exports = resolvers;
