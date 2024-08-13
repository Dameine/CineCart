import { gql } from '@apollo/client';



export const GET_MOVIE = gql`
query GetMovies($query: String!) {
  getMovies(query: $query) {
    Title
    Poster
    Director
    Genre
    shortPlot
    imdbRating
    imdbID
  }
}
`;