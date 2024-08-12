const typeDefs = `
 type Movie {
    movieId: ID
    title: String
    poster: String
    director: String
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
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addMovieToFavorites(movieId: String,title: String, poster: String, director: String): User
    removeMovieFromFavorites(movieId: ID): User
  }
`;

module.exports = typeDefs;
