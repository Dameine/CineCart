const typeDefs = `
 type Movie {
    Title: String
    Poster: String
    Director: String
    Genre: String
    shortPlot: String
    imdbRating: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getMovies: Movie
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
