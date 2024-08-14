const typeDefs = `
 type Movie {
    Title: String
    Poster: String
    Director: String
    Genre: String
    shortPlot: String
    imdbRating: String
    imdbID: String
  }

  type User {
    _id: ID
    username: String
    email: String
    favMovies: [Movie]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getMovies(query:String!): Movie
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addMovieToFavorites(imdbID: String,title: String, poster: String, director: String): User
    removeMovieFromFavorites(imdb: ID): User
  }
`;

module.exports = typeDefs;
