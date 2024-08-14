import { gql } from '@apollo/client';



export const LOGIN_USER = gql`
mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;


export const NEW_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;

export const ADD_MOVIE = gql`
mutation AddMovieToFavorites($movie: MovieInput!) {
  addMovieToFavorites(movie: $movie) {
    _id
    username
    email
    favMovies {
      Title
      Poster
      Director
      Genre
      shortPlot
      imdbRating
      imdbID
    }
  }
}
`;
export const REMOVE_MOVIE = gql`
mutation removeMovieFromFavorites($movieId: ID!) {
  removeMovieFromFavorites(movieId: $movieId) {
    _id
    email
    username
    favMovies {
      movieId
      title
      poster
      director
    }
  }
}
`;