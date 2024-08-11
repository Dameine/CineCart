const typeDefs = `
 type Movie {
 Title: String
 Poster: String
 Director: String
 Genre: String
 shortPlot: String
 imdbRating: String

}

  type Query {
    
    getMovies: Movie
  }
`;

module.exports = typeDefs;
