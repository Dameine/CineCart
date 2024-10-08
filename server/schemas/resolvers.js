const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const axios = require("axios");

const resolvers = {
  Query: {
    getMovies: async (_, {query}) => {
      const apiKey = process.env.API_KEY;
      const url = `http://www.omdbapi.com/?t=${query}&apikey=${apiKey}`;
      const response = await axios.get(url);
      const movie = response.data;
      return {
        Title: movie.Title,
        Poster: movie.Poster,
        Director: movie.Director,
        Genre: movie.Genre,
        shortPlot: movie.Plot,
        imdbRating: movie.imdbRating,
        imdbID: movie.imdbID
      };

    },

    me: async (parent, arg, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    // AddUser creates a new user, generates a token, and returns both the token and the user data.
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    // Login: Validates user credentials, generates a token, and returns it along with user data.
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    // Adds a movie (identified by its _id) to a user's favorites array using Mongoose's $addToSet operation.
    addMovieToFavorites: async (parent, {movie}, context) => {
      if (context.user) {
        //  we need to create a variable that will store the userData.
        // We need to find a user and then update that users favMovies array (how do I add something to the end of an array) ***HINT WE ARE USING MONGOOSE
        const userData = await User.findOneAndUpdate(
          { _id: context.user._id }, //FILTER
          { $addToSet: { favMovies: movie } }, //CONTENT TO UPDATE
          { new: true }

        );

        return userData;
      }
      throw AuthenticationError;
    },
    removeMovieFromFavorites: async (parent, { movieId }, context) => {
      if (context.user) {
        const userData = await User.findOneAndUpdate(
          {_id: context.user._id},
          {$pullToSet: {favMovies: {movieId}}},
          { new: true }
        );
        return userData;
      }
      throw AuthenticationError;
    }
  },
};

module.exports = resolvers;
